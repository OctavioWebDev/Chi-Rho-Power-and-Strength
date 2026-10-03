-- Gym founding campaign: backers and a single running total.
-- Captured from the live Supabase project (khiinsjirgucbifsxske), which was
-- originally set up by hand in the SQL editor.

create table public.gym_founding_members (
  id                     uuid primary key default gen_random_uuid(),
  created_at             timestamptz not null default now(),
  stripe_session_id      text not null unique,
  stripe_customer_id     text,
  stripe_subscription_id text,
  email                  text not null,
  tier_id                text not null,
  tier_name              text not null,
  amount_cents           integer not null,
  is_recurring           boolean not null default false,
  status                 text not null default 'active',
  cancelled_at           timestamptz,
  last_renewed_at        timestamptz
);

create index idx_gym_members_email  on public.gym_founding_members (email);
create index idx_gym_members_tier   on public.gym_founding_members (tier_id);
create index idx_gym_members_status on public.gym_founding_members (status);
create index idx_gym_members_subscription on public.gym_founding_members (stripe_subscription_id)
  where stripe_subscription_id is not null;

create table public.gym_campaign_totals (
  id                 integer primary key default 1,
  total_raised_cents bigint not null default 0,
  total_backers      integer not null default 0,
  last_updated_at    timestamptz not null default now(),
  constraint single_row check (id = 1)
);

insert into public.gym_campaign_totals (id) values (1);

create view public.gym_campaign_progress as
select
  total_raised_cents,
  total_raised_cents::numeric / 100.0 as total_raised_dollars,
  total_backers,
  65000.0 as goal_dollars,
  round(total_raised_cents::numeric / 100.0 / 65000.0 * 100, 1) as percent_funded,
  last_updated_at
from public.gym_campaign_totals
where id = 1;

create function public.increment_gym_campaign(p_amount_cents integer)
returns void
language plpgsql
security definer
as $$
begin
  update gym_campaign_totals
  set
    total_raised_cents = total_raised_cents + p_amount_cents,
    total_backers      = total_backers + 1,
    last_updated_at    = now()
  where id = 1;
end;
$$;
