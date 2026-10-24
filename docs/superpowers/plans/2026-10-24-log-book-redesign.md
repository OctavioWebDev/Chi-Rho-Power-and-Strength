# Log Book Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle and rewrite every page of chirhostrength.com in the approved "plain log book" design and Octavio's voice, without changing any payment, campaign or email behavior.

**Architecture:**
- **Shared design layer.** A small component set (`src/components/log/`) on Tailwind tokens that match the Chi-Rho Lifts app (Iron & Brass, Barlow / Barlow Condensed).
- **Pages.** Each page is rebuilt from those components, with copy from the mockup.
- **Data and API.** Data sources and API routes stay as they are. The only new logic is the `/apply` email params and the campaign percent; both are pure functions with vitest tests.

**Tech Stack:** Next.js 14 App Router, React 18, TypeScript, Tailwind 3, `next/font/google`, EmailJS browser SDK, vitest (new).

**Spec:** `docs/superpowers/specs/2026-10-24-log-book-redesign-design.md`
**Mockup (copy + layout source):** `docs/superpowers/mockups/2026-10-24-log-book/site.html`. Open it in a browser and use `#home`, `#coaching`, `#apply`, `#classes`, `#club`, `#book`, `#philosophy`, `#story`, `#articles`, `#post`, `#faq`.

## Global Constraints

- **App location.** All app code is in `chi_rho/`, and every command runs from `chi_rho/`. The branch is `feat/log-book-redesign`, cut from `docs/log-book-redesign-spec`.
- **Colors.** Tokens: iron `#0B0A08`, plate `#15130F`, rule `#2A261F`, chalk `#F4F1EA`, dust `#9C968A`, brass `#EAB308`, paper `#EDE8DC`, ink `#1A1712`, ink-2 `#6D675C`, pencil `#8A6A12`.
- **Fonts.**
  - Barlow Condensed (500, 600, 700, 800) for headings, numbers and labels. Barlow (400, 500, 600, plus italic 400) for body.
  - Load both with `next/font/google`.
  - Inter is removed. No serif font, no handwriting font.
- **Theme and shapes.** One dark theme. Sheets are flat, with no tilt, no shadow and no clip. Radius is 2–3px.
- **Ledger rows.** Each row has a 168px label column. At ≤680px the label stacks above the content with a 16px side gutter. The header nav collapses behind "Menu" below 1020px.
- **Voice (spec §3).**
  - Banned words: journey, transform, unlock, empower, elevate.
  - No emoji, and no em-dash asides in new copy.
  - "No BS" appears at most once site-wide.
  - No unsourced statistics.
- **Who's coached.** Women-coaching copy says exactly: "I coach men. If you're a woman with a training question, ask. I'll point you in the right direction."
- **Photos.** None. Remove `next/image` stock photos and `/assets/images/*unsplash*` references from pages.
- **Off limits.** Do not change any file under `src/app/api/`, or `src/lib/stripe.ts`, `src/lib/supabase.ts`, `src/lib/emailjs.ts`, `src/auth.ts` or `src/middleware.ts`.
- **Secrets.** `npm run build` may need env vars. If it fails on a missing env var, stop and ask Octavio to place his `.env.local` in `chi_rho/`. Never print or commit env values.
- **Commits.** Every commit message ends with `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`.

## Rulings carried from planning

- **Spec §6 `/contact` is replaced.** `/contact` today is already the coaching application (EmailJS template `template_jmuzz7g`), so two forms would duplicate it.
  - `/apply` becomes the only application form and sends to that same template.
  - `/contact` becomes a permanent redirect to `/apply`. Query strings carry through, so `?service=discovery-call` still preselects.
  - The free call is one of the service options.
  - Cost if wrong: re-adding a short general-question form later.
- **`BackButton` is removed** from both layouts. The mockup has none, and the header covers navigation.

## Review Focus

1. **`/apply` with only the required fields filled.** The email must read "Not provided" for every blank, never "undefined" or an empty line. *(Task 5 test)*
2. **`?service=` with an unknown or old value** (`comp-prep`, `foo`). Nothing is preselected and the page doesn't crash. Old links (`strength-coaching`, `inperson`, `group-class`, `discovery-call`) do preselect. *(Task 5 test)*
3. **Submitting without a name, a valid email or a coaching choice.** It's blocked with a plain message saying what's missing, and typed answers are kept. *(Task 5 test)*
4. **The campaign API fails or returns odd numbers** (null, negative, over goal, goal 0). The bar shows 0–100% and never NaN, and the totals read `$0`. *(Task 3 test)*
5. **Long words, wide tables and price rows at 390px.** No sideways page scroll and nothing clipped. *(Task 14 visual check)*

---

### Task 1: Tooling, fonts and tokens

**Files:**
- Modify: `package.json` (devDependency `vitest`; script `"test": "vitest run"`)
- Create: `vitest.config.ts` (`test.environment: 'node'`, `test.include: ['src/**/*.test.ts']`, alias `@` → `./src`)
- Modify: `tailwind.config.ts`:
  - `theme.extend.colors` gets the 10 tokens from Global Constraints, using those names.
  - `fontFamily.display: ['var(--font-display)', 'Arial Narrow', 'sans-serif']` and `fontFamily.body: ['var(--font-body)', 'Helvetica Neue', 'Arial', 'sans-serif']`.
- Modify: `src/app/layout.tsx`:
  - Swap Inter for `Barlow_Condensed({ weight: ['500','600','700','800'], subsets: ['latin'], variable: '--font-display' })` and `Barlow({ weight: ['400','500','600'], style: ['normal','italic'], subsets: ['latin'], variable: '--font-body' })`.
  - `<html className={`${display.variable} ${body.variable}`}>`.
  - `<body className="bg-iron text-chalk font-body antialiased">`.
  - Fix `authors`/`creator` to `Octavio Sanchez`.
- Modify: `src/app/globals.css`:
  - `body::after` grain overlay: fixed, 7% opacity, the SVG-noise data URI from the mockup's `body::after`.
  - Base `h1,h2,h3 { font-family: var(--font-display); text-transform: uppercase; text-wrap: balance; line-height: .94 }`.
  - Focus ring: `outline 2px brass, offset 3px`.
- Test: `src/lib/smoke.test.ts` (deleted in Task 3)

- [ ] **Step 1: Add vitest and a smoke test**

```ts
// src/lib/smoke.test.ts
import { expect, it } from 'vitest';
it('runs', () => expect(1 + 1).toBe(2));
```

- [ ] **Step 2: Run tests**

Run: `npm install && npm test`
Expected: 1 passed.

- [ ] **Step 3: Apply the font and token changes above.**

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: compiles. Pages still look old, but use the Barlow fonts on black.

- [ ] **Step 5: Commit** `Tooling: vitest, Barlow fonts, Iron & Brass tokens`

---

### Task 2: Log components

**Files (create, all in `src/components/log/`; server components unless noted):**

| File | Exports |
|---|---|
| `Entry.tsx` | `Entry({ label: string; sub?: string; id?: string; children })`: a ledger row. Grid `168px 1fr`, label in dust caps (14px, tracking .16em) with `sub` in brass below. 1px rule between consecutive rows. Stacks at ≤680px. |
| `PageTitle.tsx` | `PageTitle({ children; lede?: ReactNode })`: an `h1` at `clamp(50px,7vw,104px)` weight 800; wrap one phrase in `<em>` for brass. Optional lede paragraph, 20px. |
| `Sheet.tsx` | `Sheet({ title?: string; caption?: string; className?; children })`: a paper sheet (bg paper, text ink, horizontal 1px rules every 24px at 9% ink, padding 32/24/18, radius 2). Shows a `SheetHead` (title left, caption right, 2px ink underline) when `title` is set. |
| `LogTable.tsx` | `LogTable({ columns: { key: string; label: string; align?: 'left'\|'right'; hideOnPhone?: boolean; tone?: 'weight'\|'day'\|'note' }[]; rows: Record<string, ReactNode>[] })`: tabular nums, Barlow Condensed 21px (17px on phones), `weight` tone in pencil, `day`/`note` in ink-2. Wrapped in an `overflow-x-auto` box. |
| `RateList.tsx` | `RateList({ items: { name: string; price: string; unit?: string; tag?: string; description: ReactNode; action?: ReactNode }[] })`: a 2px chalk top rule; name, dotted leader, brass price with unit in dust; tag as chalk caps before the description. The leader is hidden ≤680px. |
| `Checklist.tsx` | `Checklist({ items: ReactNode[]; tone?: 'dark'\|'paper'; negative?: boolean })`: 9px squares; brass on dark, ink on paper, rule color when `negative`. |
| `Facts.tsx` | `Facts({ items: { label: string; value: string }[] })`: 2px chalk top rule; brass values. |
| `Myths.tsx` | `Myths({ items: { said: string; answer: ReactNode }[] })`: two columns (stacked ≤900px). The quote in dust condensed caps. |
| `Steps.tsx` | `Steps({ items: { title: string; text: string; here?: boolean; note?: string }[] })`: `<ol>` with big faint numbers; `here` in brass, with `note` (e.g. "We're here") as brass caps. |
| `Faq.tsx` | `Faq({ groups: { heading?: string; items: { q: string; a: ReactNode }[] }[]; openFirst?: boolean })`: `<details>` rows, a brass +/– marker, group headings in brass caps. |
| `Seal.tsx` | `Seal({ size?: number; className? })`: inline SVG copied from the mockup's `#seal` symbol. |
| `Cover.tsx` | `Cover({ top: string; title: string; bottom: string; variant?: 'light'\|'dark' })`: a 2:3 type-only cover. |
| `Button.tsx` | `ButtonLink({ href; children; variant?: 'solid'\|'line' })`: solid = brass block; line = caps with a 2px brass underline. |
| `index.ts` | Re-exports everything. |

- [ ] **Step 1: Build the components** to the mockup's CSS for `.entry`, `.tape` (as restyled in the plain override), `.paper`, `.logtbl`, `.rates`, `.checks`, `.facts`, `.myths`, `.road`, `.faq`, `.cover` and `.btn`/`.link`. Use Tailwind classes plus a small `log.css` imported by `index.ts` only where Tailwind is awkward (dotted leader, sheet rules).

- [ ] **Step 2: Build**

Run: `npm run build && npm run lint`
Expected: both pass.

- [ ] **Step 3: Commit** `Log book components`

---

### Task 3: Campaign percent and BarbellProgress

**Files:**
- Create: `src/lib/campaign.ts`. `fundedPercent(raised: number | null | undefined, goal: number): number` returns 0–100, rounded down to a whole number. `formatDollars(n: number | null | undefined): string` returns e.g. `$65,000` and `$0` for null.
- Create: `src/components/log/BarbellProgress.tsx`. Signature: `BarbellProgress({ raised, members, goal }: { raised: number | null; members: number | null; goal: number })`.
  - Three numbers: Raised, Founding members, Goal.
  - A drawn bar (shaft, collars, brass fill at `fundedPercent`).
  - Ticks at $0, $15k, $30k, $45k and $65k.
  - Exported from `index.ts`.
- Test: `src/lib/campaign.test.ts`
- Delete: `src/lib/smoke.test.ts`

- [ ] **Step 1: Write failing tests**

```ts
import { describe, expect, it } from 'vitest';
import { fundedPercent, formatDollars } from './campaign';

describe('fundedPercent', () => {
  it('0 raised is 0', () => expect(fundedPercent(0, 65000)).toBe(0));
  it('half way', () => expect(fundedPercent(32500, 65000)).toBe(50));
  it('rounds down', () => expect(fundedPercent(649, 65000)).toBe(0));
  it('caps at 100', () => expect(fundedPercent(90000, 65000)).toBe(100));
  it('null/undefined/negative is 0', () => {
    expect(fundedPercent(null, 65000)).toBe(0);
    expect(fundedPercent(undefined, 65000)).toBe(0);
    expect(fundedPercent(-5, 65000)).toBe(0);
  });
  it('goal 0 is 0, not NaN', () => expect(fundedPercent(100, 0)).toBe(0));
});

describe('formatDollars', () => {
  it('formats', () => expect(formatDollars(65000)).toBe('$65,000'));
  it('null is $0', () => expect(formatDollars(null)).toBe('$0'));
});
```

- [ ] **Step 2: Run tests**

Run: `npm test`
Expected: FAIL, because `./campaign` isn't found.

- [ ] **Step 3: Implement `campaign.ts` and `BarbellProgress.tsx`.**

- [ ] **Step 4: Run tests**

Run: `npm test`
Expected: 8 passed.

- [ ] **Step 5: Commit** `Campaign percent + BarbellProgress`

---

### Task 4: Header, footer, layouts

**Files:**
- Modify: `src/app/components/Header.tsx` (client component). Rewrite it as:
  - Seal plus "CHI-RHO / POWER & STRENGTH".
  - Nav: Coaching `/coaching`, Classes `/coaching/group-classes`, Barbell Club `/gym`, Book & Journal `/book`, Philosophy `/philosophy`, Articles `/blog`, My Story `/mystory`, FAQ `/faq`.
  - `aria-current="page"` from `usePathname()`. Active link: chalk with a brass underline.
  - Gold "Apply" button → `/apply`.
  - Below 1020px, a "Menu" button toggles the nav as a full-width list. It closes on route change.
  - Drop the templates, chirholifts and stickermule dropdown entries from the header; the footer carries them.
- Modify: `src/app/components/Footer.tsx`. Rewrite with five columns:
  - Seal.
  - Coaching: Online & in-person, Group classes 50+, Apply.
  - Learn: Book & journal, Philosophy, Articles, Programs `/templates`.
  - About: My story, Barbell Club, FAQ, Chi-Rho Lifts app `https://chirholifts.com/`, Merch `https://www.stickermule.com/chirhops`.
  - Reach me: Toledo, Ohio; `(419) 343-9894`; `chirhostrength@gmail.com` as selectable text.
  - Plus Privacy and Terms links. No slogan.
- Modify: `src/app/layout.tsx` and `src/app/(app)/layout.tsx`. Remove `BackButton`.
- Delete: `src/app/components/BackButton.tsx`.

- [ ] **Step 1: Implement.**

- [ ] **Step 2: Build and check**

Run: `npm run build && npm run lint`
Expected: pass. Then run `npm run dev` and check `/` at 1300px and 390px: the header fits, Menu opens and closes, and there's no sideways scroll.

- [ ] **Step 3: Commit** `Header and footer in the log book style`

---

### Task 5: `/apply` and the `/contact` redirect

**Files:**
- Create: `src/lib/apply.ts`:

```ts
export const SERVICES = [
  { id: 'strength-coaching', label: 'Online Strength · $250/mo' },
  { id: 'elite', label: 'Online Elite · $500/mo' },
  { id: 'inperson', label: 'In-person · $1,150/mo' },
  { id: 'group-class', label: 'Group class, men 50+ · $300/mo' },
  { id: 'consultation-program', label: 'Program design consultation · $100' },
  { id: 'technique-audit', label: 'Technique audit · $97' },
  { id: 'discovery-call', label: 'Free 20-minute call first' },
] as const;
export type ServiceId = (typeof SERVICES)[number]['id'];
export type ApplyForm = {
  name: string; email: string; phone: string; age: string; weight: string;
  now: string; logic: string; years: string; eating: string;
  squat: string; bench: string; deadlift: string;
  hurt: string; schedule: string; service: ServiceId | '';
};
export function serviceFromParam(p: string | null): ServiceId | '';
export function validateApply(f: ApplyForm): string[];          // human messages, [] when OK
export function buildApplyParams(f: ApplyForm): Record<string, string>;
```

  - **`validateApply` messages (exact):** `"Add your name."`, `"Add an email I can reply to."` (when missing or without `@` and a dot after it), `"Pick which coaching you want."`.
  - **`buildApplyParams` keys** match `template_jmuzz7g` as sent by the old contact page: `full_name, email, phone, location, age, service, training_experience, current_frequency, equipment_access, current_squat, current_bench, current_deadlift, primary_goal, biggest_challenge, timeline, start_date, heard_about, read_book, additional_info`.
    - Values are trimmed, and a blank becomes `"Not provided"`.
    - `service` is the SERVICES label.
    - `training_experience` = years; `location`, `current_frequency`, `equipment_access`, `primary_goal`, `biggest_challenge`, `timeline`, `start_date`, `heard_about` and `read_book` = `"Not asked"`.
    - `additional_info` holds labeled lines, each `"<Label>: <value>"`, joined by `\n` in this order, with blank answers skipped: `What are you doing now, and why?`, `Logic behind it`, `Bodyweight`, `What are you eating?`, `Injuries / conditions / meds`, `Schedule`. With every one of those blank, it's `"None provided"`.
- Create: `src/app/(app)/apply/page.tsx` (server: metadata + `<Suspense>`) and `src/app/(app)/apply/ApplyForm.tsx` (client).
  - Copy and layout from mockup `#apply`: PageTitle "Fill out the *intake sheet.*", the lede, and a Sheet titled "Chi-Rho intake" with caption "Page 1 of 1".
  - Fields in mockup order: phone added after email (optional); Service as a radio group with the SERVICES labels.
  - Preselect from `useSearchParams().get('service')` via `serviceFromParam`.
  - On submit: run `validateApply` and show the messages above the button in ink. If they pass, call `emailjs.send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '', 'template_jmuzz7g', buildApplyParams(form), process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')`.
  - On success: replace the button row with "Got it. I'll read it and get back to you." and clear the form.
  - On failure: "That didn't send. Try again, or email chirhostrength@gmail.com." The form keeps its data.
- Modify: `next.config.mjs`. Add `async redirects() { return [{ source: '/contact', destination: '/apply', permanent: true }] }`. Next.js carries the query string through.
- Delete: `src/app/(app)/contact/page.tsx`.
- Modify: every `href="/contact..."` in `src/` → `/apply...` (keep the query).
- Test: `src/lib/apply.test.ts`

- [ ] **Step 1: Write failing tests**

```ts
import { describe, expect, it } from 'vitest';
import { buildApplyParams, serviceFromParam, validateApply, type ApplyForm } from './apply';

const blank: ApplyForm = { name: '', email: '', phone: '', age: '', weight: '', now: '', logic: '', years: '',
  eating: '', squat: '', bench: '', deadlift: '', hurt: '', schedule: '', service: '' };
const min: ApplyForm = { ...blank, name: ' Joe ', email: 'joe@x.com', service: 'elite' };

describe('serviceFromParam', () => {
  it('old links preselect', () => {
    expect(serviceFromParam('strength-coaching')).toBe('strength-coaching');
    expect(serviceFromParam('discovery-call')).toBe('discovery-call');
    expect(serviceFromParam('group-class')).toBe('group-class');
  });
  it('unknown, retired or missing is empty', () => {
    expect(serviceFromParam('comp-prep')).toBe('');
    expect(serviceFromParam('foo')).toBe('');
    expect(serviceFromParam(null)).toBe('');
  });
});

describe('validateApply', () => {
  it('blank form lists all three', () =>
    expect(validateApply(blank)).toEqual(['Add your name.', 'Add an email I can reply to.', 'Pick which coaching you want.']));
  it('bad email', () => expect(validateApply({ ...min, email: 'joe@' })).toEqual(['Add an email I can reply to.']));
  it('minimum passes', () => expect(validateApply(min)).toEqual([]));
});

describe('buildApplyParams', () => {
  it('minimum: blanks become Not provided, never undefined', () => {
    const p = buildApplyParams(min);
    expect(p.full_name).toBe('Joe');
    expect(p.service).toBe('Online Elite · $500/mo');
    expect(p.current_squat).toBe('Not provided');
    expect(p.additional_info).toBe('None provided');
    expect(p.primary_goal).toBe('Not asked');
    expect(Object.values(p).some(v => v === '' || v.includes('undefined'))).toBe(false);
  });
  it('labeled lines, blanks skipped', () => {
    const p = buildApplyParams({ ...min, now: '5x5', weight: '212', schedule: 'nights' });
    expect(p.additional_info).toBe('What are you doing now, and why?: 5x5\nBodyweight: 212\nSchedule: nights');
  });
});
```

- [ ] **Step 2: Run tests**

Run: `npm test`
Expected: FAIL, because `./apply` isn't found.

- [ ] **Step 3: Implement `apply.ts`, the page, the redirect and the link swap.**

- [ ] **Step 4: Run tests and build**

Run: `npm test && npm run build`
Expected: all tests pass, and the build passes.

- [ ] **Step 5: Manual check.** In `npm run dev`:
  - `/contact?service=inperson` lands on `/apply` with In-person checked.
  - Submitting empty shows the three messages.
  - Do not submit a real application unless Octavio says to.

- [ ] **Step 6: Commit** `Apply: intake sheet on the existing EmailJS template; /contact redirects`

---

### Task 6: Home

**Files:**
- Modify: `src/app/page.tsx`. Make it a server component built from the log components. Sections and copy come from mockup `#home`, in order:
  1. Hero with the example Sheet: Week 9 · Friday; 315 PR, 205, 365, BW; note "PR on squat. Yeaaaa buddy. Now move on."
  2. The name (Seal + "Chi-Rho means *Christ reigns.*").
  3. Day one: questions on a Sheet, no answers.
  4. First month: the A/B LogTable, with the note column `hideOnPhone`.
  5. Things people say.
  6. Coaching rates: the four RateList rows plus the link "Everything that's included" → `/coaching`.
  7. Also here: Cover + the chapter 1 pull quote "You need three things: a barbell, progressive overload, and consistency." + links to `/book` and `/gym`.
  - Apply CTAs → `/apply`; the call CTA → `/apply?service=discovery-call`.
- Delete: `src/app/components/{HeroSection,ProblemSection,SolutionSection,WhyChooseUs,OurValues,SocialProofSection,HowItWorks,ServicesOverview,ProductsTiles,MainSection,AboutSection,BlogPreviewSection,Map}.tsx`. Grep first; delete only the ones no other file imports.

- [ ] **Step 1: Implement.**
- [ ] **Step 2: Build and lint**

Run: `npm run build && npm run lint`
Expected: pass. Visual check of `/` at 1300px and 390px against the mockup.

- [ ] **Step 3: Commit** `Home in the log book style`

---

### Task 7: Coaching pages

**Files:**
- Modify: `src/app/coaching/page.tsx`. Copy from mockup `#coaching`, in order:
  - PageTitle "Stop guessing. *Get stronger.*"
  - "This is you if" Checklist + Facts (Under the bar 10+ years; Best squat 480 lb; Best deadlift 480 lb; Programming refined 5 years).
  - Online: two Sheets for Strength $250 and Elite $500, with the mockup's lists. The "most picked" / "5 spots" labels are small ink-2 caps.
  - In-person: a RateList row at $1,150.
  - Add-ons: RateList rows for Program Design Consultation $100 → `/apply?service=consultation-program` and Technique Audit $97 → `/apply?service=technique-audit`.
  - The deal: five offers.
  - How it starts: Steps.
- Modify: `src/app/coaching/online/page.tsx` and `src/app/coaching/in-person/page.tsx`. Each shows only its own sections plus "The deal" and "How it starts", reusing the same section components.
  - Factor the shared sections into `src/app/coaching/sections.tsx`, exporting `OnlinePackages`, `InPerson`, `TheDeal`, `HowItStarts` and `AddOns`, so all three pages use one copy.
  - Keep each page's existing FAQ items, tightened to the voice rules.
- Keep `src/app/coaching/loading.tsx`, restyled as a dust "Loading…" line.

- [ ] **Step 1: Implement.**
- [ ] **Step 2: Build, lint and visual check**

Run: `npm run build && npm run lint`
Expected: pass. Visual check of all three routes at 1300px and 390px.

- [ ] **Step 3: Commit** `Coaching pages in the log book style`

---

### Task 8: Group classes

**Files:**
- Modify: `src/app/coaching/group-classes/page.tsx`. Copy from mockup `#classes`:
  - PageTitle "Over 50? *Get under the bar.*"
  - Facts: $300 / mo; $3,600 / yr; 3 to 5 men; 47 a year.
  - A Sheet "Class sign-up sheet" with a LogTable for the four classes and their open-spot values as currently hard-coded on the page. Note: "3 names and it starts."
  - Every-class Checklist, the founding member path, and the FAQ.
  - The women FAQ answer is the exact Global Constraints line.
  - "Reserve a spot" → `/apply?service=group-class`.

- [ ] **Step 1: Implement.** **Step 2:** `npm run build && npm run lint`, plus a visual check. **Step 3: Commit** `Group classes page`

---

### Task 9: Barbell Club (`/gym`)

**Files:**
- Modify: `src/app/(app)/gym/page.tsx` (stays a client component). Keep the existing `fetch('/api/gym/campaign')` and checkout `fetch('/api/gym/checkout_sessions', …)` logic exactly; replace only the markup.
  - PageTitle "Toledo needs a *barbell gym.*" with the mockup lede.
  - `BarbellProgress` fed from the campaign response; on fetch failure, pass nulls.
  - Remove the Toledo stats block (426K / 36.9% / 0).
  - Tiers as a RateList whose `action` is the existing tier checkout button (same tier ids).
  - The equipment order Sheet (LogTable: Qty / Item / Note).
  - Roadmap Steps with the first item `here` and note "We're here".
  - The existing FAQ via `Faq`.
- Modify: `src/app/(app)/gym/success/GymSuccessContent.tsx`. Markup only.

- [ ] **Step 1: Implement.**
- [ ] **Step 2: Build and check**

Run: `npm test && npm run build && npm run lint`
Expected: pass. In `npm run dev`, `/gym` shows $0 / 0 / $65,000 when the API fails (block it in devtools), and a tier button still starts checkout (stop at the Stripe page).

- [ ] **Step 3: Commit** `Barbell Club page`

---

### Task 10: Book and journal

**Files:**
- Modify: `src/app/(app)/book/page.tsx`. Copy from mockup `#book`:
  - Cover + PageTitle "Shut up *and lift.*"
  - Amazon link and sample-chapter PDF link: keep the existing URLs.
  - The chapter 1 pull quote at full length: "You don't need 17 different exercises. You need three things: a barbell, progressive overload, and consistency."
  - What you'll learn: Checklist.
  - Book-or-coach: two Sheets.
  - A link to `/journal`.
- Modify: `src/app/(app)/journal/page.tsx`. A dark Cover, the "Write it down." section from the mockup, the existing Amazon link, and what's inside as a Checklist.

- [ ] **Step 1: Implement.** **Step 2:** `npm run build && npm run lint`, plus a visual check. **Step 3: Commit** `Book and journal pages`

---

### Task 11: Philosophy and My Story

**Files:**
- Modify: `src/app/(app)/philosophy/page.tsx`. Copy from mockup `#philosophy`:
  - PageTitle.
  - Day A / Day B as two Sheets with LogTables, plus the progression note in pencil.
  - What it's not: Myths.
  - Objections: Faq, with `openFirst`.
  - After that: a link to `/coaching`.
- Modify: `src/app/(app)/mystory/page.tsx`. Copy from mockup `#story`:
  - PageTitle "I'm not special. *I just kept writing it down.*"
  - The three-paragraph letter + signature.
  - Facts: 10+ years, 480 lb, 480 lb, BS, IT Mgmt · WGU 2025, Overnight.
  - Mistakes: a Sheet with struck-through lines and an ink-2 note under each.
  - What I won't / will do: Checklists, the first with `negative`.
  - No photo.

- [ ] **Step 1: Implement.** **Step 2:** `npm run build && npm run lint`, plus a visual check. **Step 3: Commit** `Philosophy and story pages`

---

### Task 12: Articles

**Files:**
- Modify: `src/app/(app)/blog/components/BlogContent.tsx`. Keep `allPosts` and the category param. Render:
  - PageTitle "From the *training log.*"
  - A dated list: date, title link, excerpt, read time. No images.
  - Delete `FeaturedPost`, `BlogCard`, `RecentPostsSidebar`, `CategoriesSidebar` and `PageHeader` once nothing imports them.
  - Check `NewsletterCTA`: if its submit doesn't send anywhere real, delete it. If it does, restyle it as one line + input.
  - Keep `ComingSoonNotice` if it's used, restyled.
- Modify: `src/app/(app)/blog/[slug]/page.tsx`.
  - Keep the post data and `notFound()`.
  - Remove `next/image` and the post image.
  - Byline row ("← Articles · date · Octavio Sanchez"), PageTitle, and body in a 40em column at 19px.
  - The progressive-overload session list renders as a Sheet LogTable (Session 1–3: 135/140/145 ✓) with the note "Keep going until you miss reps. Then try it again."
- Modify: `src/app/templates/page.tsx`. A RateList of the five programs at $5, each row's action the existing link to `/templates/[templateId]`. Level as dust caps after the name.
- Modify: `src/app/templates/[templateId]/TemplateClient.tsx` and `src/app/templates/[templateId]/page.tsx`. Markup only. Stripe checkout and download calls are unchanged.
- Restyle: `src/app/templates/loading.tsx` and `src/app/templates/[templateId]/loading.tsx`.

- [ ] **Step 1: Implement.**
- [ ] **Step 2: Build and check**

Run: `npm run build && npm run lint`
Expected: pass. In dev, a template's buy button still reaches Stripe test checkout (stop there).

- [ ] **Step 3: Commit** `Articles and programs pages`

---

### Task 13: FAQ, quiz, success, privacy, terms

**Files:**
- Modify: `src/app/(app)/faq/page.tsx`.
  - Keep all 33 entries and the 8 categories, rendered as `Faq` groups.
  - Remove the filter buttons. PageTitle "Ask me *straight.*" with the lede from mockup `#faq`.
  - Tighten every answer to the voice rules, keeping his meaning and wording where possible. No banned words, no emoji.
  - "Do you coach women?" answer = the exact Global Constraints line.
- Modify: `src/app/(app)/quiz/page.tsx`, `src/app/success/SuccessContent.tsx`, `src/app/(app)/privacy/page.tsx`, `src/app/(app)/terms/page.tsx`. Markup and type only, using PageTitle and Entry. Logic and legal text are unchanged.

- [ ] **Step 1: Implement.** **Step 2:** `npm run build && npm run lint`. **Step 3: Commit** `FAQ, quiz, success and legal pages`

---

### Task 14: SEO, copy guard, final verification

**Files:**
- Modify: `src/app/sitemap.ts`.
  - URLs: `/`, `/coaching`, `/coaching/online`, `/coaching/in-person`, `/coaching/group-classes`, `/apply`, `/gym`, `/book`, `/journal`, `/philosophy`, `/mystory`, `/blog`, each `/blog/<slug>`, `/faq`, `/templates`.
  - Fix the base URL's double slash.
  - Remove `/workouttemplets`.
- Modify: `src/app/layout.tsx` metadata and `src/app/metadata.ts`.
  - Default description: "Strength coaching for men in Toledo and online. Are you stronger than you were last month?"
  - Keywords: strength coaching, Toledo, barbell, powerlifting, online coaching.
  - Each page sets its own `title`.
- Modify: `next.config.mjs`. Remove `images.unsplash.com` from `images.domains` and from the CSP `img-src` if nothing uses it (grep).
- Create: `src/copy-guard.test.ts`. It reads every `.tsx` under `src/app` and `src/components` except `privacy` and `terms`, and asserts:
  - no match for `/\b(journey|transform\w*|unlock\w*|empower\w*|elevate\w*)\b/i`;
  - no emoji (`/\p{Extended_Pictographic}/u`);
  - at most one `/no bs/i` across all files combined;
  - no `unsplash`;
  - no `Women are welcome`.

- [ ] **Step 1: Write `copy-guard.test.ts`.**
- [ ] **Step 2: Run tests**

Run: `npm test`
Expected: PASS. If it fails, fix the copy it names, not the test.

- [ ] **Step 3: Apply the SEO and config changes.**
- [ ] **Step 4: Full verification**

Run: `npm test && npm run lint && npm run build`
Expected: all pass. Then run `npm run start` and visually check every route in the sitemap plus `/apply?service=elite`, `/contact`, `/gym/success`, `/success` and one `/templates/<id>`, at 1300px and at 390px. At 390px there must be no sideways scroll and nothing clipped (Review Focus 5). Fix and recommit anything found.

- [ ] **Step 5: Commit** `SEO, copy guard, final fixes`

- [ ] **Step 6: Hand off.** Do not push or merge. Report to Octavio. Pushing the branch and opening the PR (which gets a Vercel preview link) happens when he says so. On the preview, run one test-mode template checkout, one test-mode gym tier checkout and one `/apply` submission. Merging to `main` makes it live and happens only on his word.
