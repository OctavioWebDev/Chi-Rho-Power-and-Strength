-- Fix the Supabase Security Advisor findings. The website reaches these objects
-- only server-side with the service_role key (src/lib/supabase.ts), which
-- bypasses RLS, so the public anon/authenticated roles get no access at all.
-- RLS is enabled with no policies on purpose.

alter table public.gym_founding_members enable row level security;
alter table public.gym_campaign_totals  enable row level security;

revoke all on public.gym_founding_members  from anon, authenticated;
revoke all on public.gym_campaign_totals   from anon, authenticated;
revoke all on public.gym_campaign_progress from anon, authenticated;

alter view public.gym_campaign_progress set (security_invoker = true);

alter function public.increment_gym_campaign(integer) set search_path = public, pg_temp;
revoke execute on function public.increment_gym_campaign(integer) from public, anon, authenticated;
grant  execute on function public.increment_gym_campaign(integer) to service_role;
