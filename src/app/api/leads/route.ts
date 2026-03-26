import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const supabase = createClient();
    if (!supabase) {
      return NextResponse.json({ error: 'Supabase client not initialized' }, { status: 500 });
    }

    const body = await request.json();
    const { name, whatsapp, business, intent, source, message, pains } = body;

    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name,
          whatsapp,
          business_name: business,
          intent,
          source,
          message,
          pains: pains || []
        }
      ])
      .select();

    if (error) throw error; 
    
    return NextResponse.json({ success: true, lead: data[0] });
  } catch (error: any) {
    console.error('API_LEAD_ERROR:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const supabase = createClient();
    if (!supabase) {
      return NextResponse.json({ error: 'Supabase client not initialized' }, { status: 500 });
    }

    const { data, error } = await supabase
      .from('leads')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('API_FETCH_ERROR:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const supabase = createClient();
    if (!supabase) {
      return NextResponse.json({ error: 'Supabase client not initialized' }, { status: 500 });
    }

    const { id, status } = await request.json();

    const { data, error } = await supabase
      .from('leads')
      .update({ status })
      .eq('id', id)
      .select();

    if (error) throw error;
    
    return NextResponse.json({ success: true, lead: data[0] });
  } catch (error: any) {
    console.error('API_STATUS_UPDATE_ERROR:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
