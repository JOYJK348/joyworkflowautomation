import { createBrowserClient } from '@supabase/ssr'

let browserClient: any = null;

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return null; 
  }

  // Use singleton pattern on the client-side to prevent lock collisions
  if (typeof window !== 'undefined' && browserClient) {
    return browserClient;
  }

  const client = createBrowserClient(url, key);

  if (typeof window !== 'undefined') {
    browserClient = client;
  }

  return client;
}
