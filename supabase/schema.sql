-- Panda Digital Systems lead intake schema.
-- Run in the Supabase SQL editor before setting SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  project_type text not null,
  description text not null,
  project_stage text not null,
  requested_services text[] not null default '{}',
  budget_range text not null,
  timeline text not null,
  deadline text,
  name text not null,
  email text not null,
  company text,
  website text,
  role text,
  country_region text,
  time_zone text,
  consent boolean not null default false,
  status text not null default 'NEW'
);

alter table public.leads enable row level security;

-- No public RLS policies are created intentionally.
-- The browser cannot read or write this table directly. The server route writes with a service role key.


-- Safe additions for existing Panda Digital v1 lead tables.
alter table public.leads add column if not exists country_region text;
alter table public.leads add column if not exists time_zone text;
