-- JOY_AUTOMATIONS LEADS DATABASE SCHEMA (POSTGRES / SUPABASE READY)
-- Version: ELITE_SUPABASE_V1

CREATE TABLE IF NOT EXISTS leads (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    business_name TEXT,
    intent TEXT, -- Requirements (FULL_AUTOMATION, WHATSAPP_BOT, etc.)
    source TEXT DEFAULT 'DIRECT', -- (GOOGLE_SEARCH, SOCIAL_MEDIA, etc.)
    message TEXT,
    pains TEXT[], -- Stored as text array for better querying in Postgres
    status TEXT DEFAULT 'NEW' CHECK (status IN ('NEW', 'ACTIVE', 'REJECTED', 'ON_GOING', 'CLOSED')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (Recommended for Supabase)
-- ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Note: In Supabase SQL Editor, just paste and run this code to create the table.
