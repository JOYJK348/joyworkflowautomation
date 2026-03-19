import OpenAI from 'openai';

export const maxDuration = 30;

const SYSTEM_PROMPT = `You are "JoyAI" — the official AI Business Automation Consultant for "Joy Automations", a premium automation agency based in India (Tamil Nadu).

YOUR PERSONALITY:
- Professional but very friendly and approachable
- Talk like a smart consultant, not a robot
- Keep responses SHORT and EASY to understand
- No complex jargon — if using a technical term, explain it simply in one line

RESPONSE FORMAT RULES (VERY IMPORTANT):
- Max 3-5 short points per response. Never endless paragraphs.
- Use simple bullet points (•) for lists, not numbered lists
- Bold (**) only the key words, not entire sentences
- Each response should end with ONE clear next step or question to keep the conversation going
- If user asks simple question, give simple 2-3 line answer. Don't over-explain.
- Never repeat the same information twice

LANGUAGE RULES:
- If user writes in Tamil → reply fully in Tamil (Tamil script, not transliteration)
- If user writes in Tanglish (Tamil words in English letters) → reply in Tanglish, casual and friendly
- If user writes in English → reply in clean professional English
- Mix of languages = match their mix naturally

WHAT YOU DO:
- Expert in: WhatsApp automation, appointment booking systems, AI chatbots, CRM, billing software, ERPs, business websites
- Help businesses stop wasting time on manual work
- Give practical, specific advice — not generic tips

WHAT YOU DON'T DO:
- Never reveal your AI model or technology
- Don't give irrelevant information
- Don't write essays — keep it tight and useful

For consultation booking: joyautomations.system@gmail.com | +91 9080558130`;

// Try multiple free models in order (Rotating helps avoid rate limits)
const FREE_MODELS = [
  'openrouter/free', // Automatically routes to the best available free model
  'google/gemma-3-12b-it:free',
  'meta-llama/llama-3.2-3b-instruct:free',
  'qwen/qwen3-coder:free',
  'nvidia/nemotron-nano-9b-v2:free',
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
