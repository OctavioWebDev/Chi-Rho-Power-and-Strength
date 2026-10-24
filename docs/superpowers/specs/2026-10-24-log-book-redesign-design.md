# chirhostrength.com: log book redesign

**Date:** 2026-10-24
**Status:** draft, waiting for Octavio's review
**Approved mockup:** `docs/superpowers/mockups/2026-10-24-log-book/site.html` (published as https://claude.ai/artifact/Vf9yabpMWPxUhhyhhAYU8T). Where this spec and the mockup disagree, this spec wins.

## 1. Why

The current site reads as AI-generated. It uses the default Inter font and Tailwind yellow. Its sections follow the stock template order (rows of three icon cards, 01–04 steps, checkmark pills). The copy is generic, for example "Empowering your fitness journey…", and the stock photos have models in them. The goal is a site that only this coach could have, written the way he talks.

**Success:**
- Every page uses the log book look.
- The copy follows the voice rules in §3.
- Every current feature still works: Stripe checkouts, the gym campaign, the contact and apply emails, the blog, templates and the quiz.
- It reads cleanly at 390px phone width.

## 2. Scope

**In:**
- Every page under `chi_rho/src/app`: home, `/coaching` (overview, online, in-person, group-classes), `/gym` and `/gym/success`, `/book`, `/journal`, `/philosophy`, `/mystory`, `/blog` and `/blog/[slug]`, `/faq`, `/contact`, `/templates` and `/templates/[templateId]`, `/quiz`, `/success`, `/privacy` and `/terms`.
- The shared header and footer.
- A new `/apply` page.

**Out:**
- chirholifts.com.
- Merch.
- New photography.
- Any change to prices, Stripe products, Supabase tables or webhooks.
- Blog post content beyond restyling.

## 3. Voice rules (all copy)

- **Questions before answers.** Short, direct questions in a burst, e.g. "What are you doing now, and why?"
- **Demand something objective.** Strength is measured in weight on the bar and the log, never in feelings.
- **One yardstick:** "Are you stronger than you were last month?" Stronger is healthier.
- **Training is a tool.** Chi-Rho means Christ reigns. Lifting doesn't make a man. Say it plainly, once on the home page and once in the story, and don't preach.
- **Not about him.** Rules over life story. The story page is the one place for biography.
- **Praise is short:** "Yeaaaa buddy. Now move on."
- **Banned words:** journey, transform, unlock, empower, elevate, "no BS" (at most once on the whole site), "Not X. Just Y." patterns, emoji, em-dash asides.
- **Spelling and grammar are clean.** Keep his rhythm: short lines, plain words.
- **No unsourced numbers.** Drop the Toledo obesity and population stats from `/gym`.

## 4. Who it's for (policy change)

- **One-on-one and online coaching are for men.** Every place that currently says women are welcome changes to: "I coach men. If you're a woman with a training question, ask. I'll point you in the right direction." That covers the FAQ "Do you coach women?" and the group-classes FAQ.
- **Group classes stay men 50+.**
- **The Lifts app link stays open to everyone.**

## 5. Visual system

Same colors and fonts as the Chi-Rho Lifts app (Iron & Brass), so the coaching site and the app read as one brand.

| Token | Value | Use |
|---|---|---|
| iron | `#0B0A08` | page background |
| plate | `#15130F` | raised dark surfaces |
| rule | `#2A261F` | lines on dark |
| chalk | `#F4F1EA` | text on dark |
| dust | `#9C968A` | secondary text on dark |
| brass | `#EAB308` | "you / do this": primary buttons, your numbers, one word in a headline |
| paper | `#EDE8DC` | log sheets |
| ink / ink-2 | `#1A1712` / `#6D675C` | text on paper |
| pencil | `#8A6A12` | numbers written on a sheet |

- **Fonts:** Barlow Condensed (headings, numbers, labels; 500–800) and Barlow (body; 400–600), loaded with `next/font/google`. Remove Inter. No serif and no handwriting font.
- **Grain:** a fixed SVG-noise overlay at 7% opacity.
- **Single dark theme.** The site has no light mode.
- **Corners and shadows:** radius 2–3px on buttons and sheets. Sheets have no shadow and no tilt.

**Layout:**
- **Ledger rows.** Each section is a row: a 168px left margin holding a small gray uppercase label (gold sub-label optional), then the content.
- **Dividers.** Rows are split by a 1px rule.
- **Phone layout (≤680px):** the label moves above the content, and the side gutter is 16px.

**Components** (new, in `chi_rho/src/components/log/`):

| Component | What it is |
|---|---|
| `Entry` | A ledger row: `label`, optional `sub`, children. |
| `Sheet` | A paper log sheet with a lined background, plus an optional `SheetHead` (title + right-hand caption). |
| `LogTable` | Tabular numbers. Weight in pencil color, a status column (✓ / PR). The "note" column hides on phones. |
| `RateList` | A rate sheet: name, dotted leader, gold price, description, optional place tag (Toledo / Anywhere / 5 spots). |
| `Checklist` | Small gold squares as bullets; dark squares on a sheet. |
| `Facts` | Label/value list with gold values (10+ years, 480 lb…). |
| `Myths` | "Things people say": quote on the left, his answer on the right. |
| `Steps` | Only for real sequences (how coaching starts, gym roadmap). Big faint numbers; the current step in gold. |
| `Faq` | `<details>` list with category headings. |
| `Seal` | The Chi-Rho Power & Strength seal as inline SVG. |
| `Cover` | A type-only book or journal cover. |
| `BarbellProgress` | The campaign raised/goal bar. |

**Header:**
- Seal, wordmark and nav: Coaching, Classes, Barbell Club, Book & Journal, Philosophy, Articles, My Story, FAQ.
- A gold **Apply** button.
- Below 1020px the nav collapses behind a "Menu" button.

**Footer:**
- Four link columns plus contact: Toledo, phone and email as selectable text.
- No slogan.

**Photos:** none. The mockup's photo slots on the story and home pages are removed, along with the old stock images (`images.unsplash.com`), including blog post images.

## 6. Pages

Each page follows the mockup's structure and copy. Notes per route:

- **`/` (home):** the sections below, in order. All of the old home components (`HeroSection`, `ProblemSection`, `SolutionSection`, `WhyChooseUs`, `OurValues`, `SocialProofSection`, `HowItWorks`, `ServicesOverview`, `ProductsTiles`, `MainSection`, `AboutSection`, `BlogPreviewSection`) are deleted.
  1. Hero: "Are you stronger than you were last month?" with an example log sheet.
  2. The name (Chi-Rho means Christ reigns).
  3. Day one questions.
  4. First month program (Day A / Day B from the philosophy page).
  5. Things people say.
  6. Coaching rates.
  7. Book plus barbell club.
- **`/coaching`:** one page that covers everything. Sections:
  - "This is you if" with Facts (10+ years, 480 squat, 480 deadlift, programming refined 5 years);
  - online Strength $250 and Elite $500 as two Sheets;
  - in-person $1,150;
  - "The deal" (8-week guarantee, month-1 refund, 15% book discount, $50/$25 referral, 5/10/15% prepay);
  - how it starts.

  `/coaching/online` and `/coaching/in-person` keep their URLs (old links and SEO) but use the same components and show only their own sections.

  The add-ons on `/coaching` stay, as RateList rows at their current prices: Program Design Consultation, $100, and Technique Audit, $97. Competition Prep ($597) is commented out today and stays hidden.
- **`/apply` (new):** the intake Sheet.
  - **Fields:** name, email, age, bodyweight, "What are you doing now, and why?", "Can you explain the logic behind it?", years training, "What are you eating?", best squat/bench/deadlift, injuries/conditions/medications, schedule, and which coaching (Online Strength, Online Elite, In-person, Group class 50+, Not sure yet).
  - **Preselect:** `?service=` picks the coaching option.
  - **Sending:** it sends through EmailJS, the same service and template as `/contact`. The answers go into the template's message field as labeled lines.
  - **After sending:** "Got it. I'll read it and get back to you."
  - **Required:** name, email and coaching choice. Every other field is optional ("I don't know" is a fine answer).
- **`/contact`:** restyled. Keeps the EmailJS form for general questions and the discovery-call link.
  - Every "Apply" CTA site-wide points to `/apply`.
  - Discovery-call CTAs keep pointing to `/contact?service=discovery-call`.
- **`/coaching/group-classes`:** as in the mockup. Pricing Facts, the four-class sign-up Sheet (open spots come from the current hard-coded values), what every class includes, the founding member path, and the FAQ.
- **`/gym`:**
  - The campaign raised/members numbers still come from `/api/gym/campaign` (Supabase) and feed `BarbellProgress`.
  - The tiers become a RateList. Each "Back this tier" button calls the existing `/api/gym/checkout_sessions` with the same tier ids.
  - The equipment list is a Sheet, and the roadmap uses Steps.
  - `/gym/success` is restyled only.
- **`/book` and `/journal`:** as in the mockup. Amazon links and the sample-chapter PDF download stay. They stay two routes, and `/book` links to `/journal`.
- **`/philosophy`, `/mystory`:** as in the mockup. Story Facts: 10+ years, 480 squat, 480 deadlift, BS IT Management · WGU 2025, overnight shift. The mistakes list is struck-through lines with a short note under each.
- **`/blog`, `/blog/[slug]`:**
  - Keep the current data source and components' logic. Only the presentation changes: a dated list with no images and no sidebars, and the article in a 40em column.
  - A table or list inside a post may render as a Sheet.
  - Drop the newsletter CTA unless it's wired to something real (check before removing).
- **`/faq`:**
  - Keep all 33 questions and their categories from `faq/page.tsx`.
  - Answers are tightened to §3 using his existing wording. "Do you coach women?" changes per §4.
  - The category filter becomes plain category headings.
- **`/templates`, `/templates/[templateId]`, `/quiz`, `/success`:** restyled with the same components. Stripe checkout and PDF download flows are unchanged.
- **`/privacy`, `/terms`:** new header, footer and body type only.

**SEO:** update page titles and descriptions in `metadata.ts` and `lib/seo.ts` to match the new copy. Keep `sitemap.ts` working and add `/apply` to it.

## 7. Behavior that must not change

- **Stripe:** template checkout, gym tier checkout, the webhook and the success pages.
- **Supabase:** campaign totals, read server-side with the service role, exactly as now.
- **Email:** EmailJS sending from `/contact`, and the gym webhook emails.
- **Other:** PWA and service worker, analytics, CSP headers.
  - `next/font` self-hosts the fonts, so the CSP needs no change.
  - If Google Fonts were loaded from a `<link>`, the CSP already allows it.

## 8. Testing and verification

The repo has no test runner. For this redesign:

- `npm run build` and `npm run lint` pass in `chi_rho/`.
- Add **vitest** with one small suite for the logic this redesign adds:
  - the `/apply` message builder (fields to labeled lines, blank fields skipped, `service` preselect mapping);
  - the `BarbellProgress` percent (0 raised gives 0%, over goal caps at 100%, a missing total renders as $0).
- A visual check of every route at 1300px and 390px against the mockup. Fix any horizontal scroll or clipped text.
- Click through on the preview deploy:
  - one test-mode Stripe checkout for a template and one for a gym tier;
  - one `/apply` submission and one `/contact` submission.

## 9. Rollout

- **One feature branch.** Build in order: tokens and fonts, then components, header and footer, then pages.
- **One PR.** The site is on Vercel. Review the PR's Vercel preview deploy at desktop and phone width.
- **Merge only when Octavio says so.** Merging to `main` deploys the live site.

## 10. Decisions

- Photos: none (Octavio, 2026-10-24).
- Hosting: Vercel (Octavio, 2026-10-24).
- Book quote: the chapter 1 line already on `/book` ("You need three things: a barbell, progressive overload, and consistency"). Change it if Octavio picks another.
- The hero log sheet's numbers are an example client's week. Swap them if Octavio wants his own.
