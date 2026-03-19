import OpenAI from 'openai';

export const maxDuration = 30;

const SYSTEM_PROMPT = `You are "JoyAI" — the official Senior Business Automation Consultant AI for "Joy Automations", a premium automation agency based in India.
- Name: JoyAI, Brand: Joy Automations
- Expertise: Business Automation, WhatsApp flows, CRM, AI Chatbots, E-commerce, Salon/Clinic automation
- Be professional, smart, concise. Give actionable advice.
- Support Tamil and English naturally. If user writes Tamil, respond in Tamil.
- Never reveal your underlying AI model or technology.
- For consultation: joyautomations.system@gmail.com`;

// Try multiple free models in order (Rotating helps avoid rate limits)
const FREE_MODELS = [
  'google/gemini-2.0-flash-lite-preview-02-05:free',
  'deepseek/deepseek-r1:free',
  'meta-llama/llama-3.3-70b-instruct:free',
  'google/gemini-2.0-pro-exp-02-05:free',
  'qwen/qwen-2.5-72b-instruct:free',
  'mistralai/mistral-small-3.1-24b-instruct:free',
  'microsoft/phi-3-medium-128k-instruct:free',
];

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey) {
      return new Response('OpenRouter API key not configured', { status: 500 });
    }

    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey,
    });

    // SHUFFLE the models list so we don't always hit the same model first
    // This distributes the rate limit load across different providers
    const shuffledModels = [...FREE_MODELS].sort(() => Math.random() - 0.5);

    // Try each model until one works
    let lastError: any = null;
    for (const model of shuffledModels) {
      try {
        console.log(`[JoyAI] Trying model: ${model}`);
        
        const completion = await openai.chat.completions.create({
          model,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
        });

        console.log(`[JoyAI] ✅ Model ${model} connected!`);

        // Stream the response
        const encoder = new TextEncoder();
        const stream = new ReadableStream({
          async start(controller) {
            try {
              for await (const chunk of completion) {
                const text = chunk.choices?.[0]?.delta?.content;
                if (text) {
                  controller.enqueue(encoder.encode(text));
                }
              }
            } catch (e) {
              console.error('[JoyAI] Stream error:', e);
            } finally {
              controller.close();
            }
          },
        });

        return new Response(stream, {
          headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'no-cache',
          },
        });
      } catch (err: any) {
        console.error(`[JoyAI] ❌ ${model} failed:`, err?.message?.slice(0, 100));
        lastError = err;
        continue;
      }
    }

    // All models failed
    console.error('[JoyAI] All models failed. Last error:', lastError?.message);
    return new Response('Servers are currently busy with high demand (Free tier limits). Please wait 30 seconds and try again.', { status: 503 });
  } catch (error) {
    console.error('[JoyAI] Error:', error);
    return new Response('AI service error. Please try again.', { status: 500 });
  }
}
