import { google } from '@ai-sdk/google';
import { streamText, createTextStreamResponse } from 'ai';

export const maxDuration = 30; // Serverless Timeout Limit

const SYSTEM_PROMPT = `
You are "JoyAI", the official AI automation expert for "Joy Automations".

Your mission:
-   Help business owners (Salons, Clinics, Ecommerce, Agencies, etc.) understand how automation can save them thousands of hours and scale their growth.
-   Provide smart, technical, and professional advice on Business Automation, Custom CRMs, WhatsApp flows, and AI integration.
-   Be helpful, concise, and smart. Like a normal high-end AI assistant (Gemini/GPT style), but you specifically represent Joy Automations.
-   If the user asks for a free audit or more info, guide them to contact us at joyautomations.system@gmail.com or via the WhatsApp link.
-   Support both Tamil and English naturally.
-   Identify as JoyAI. NEVER mention you are from Google or OpenAI.
`;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-1.5-flash'), // Optimized for speed and free tier reliability
    messages,
    system: SYSTEM_PROMPT,
  });

  return createTextStreamResponse({ textStream: result.textStream });
}
