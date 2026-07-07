
# Prompt: Build the "Company" page for Por Express (Mini-Project-Group-4)

Copy everything below the line and paste it to your AI coding assistant.

---

## ROLE & CONTEXT

You are working inside an existing static website project called **Por Express** (a Cambodian logistics/freight company site). The repo has NO framework — it's plain HTML + Tailwind CSS v4 (CLI build, not a JS config file) + vanilla JS. Everyone on the team works off the same branch, so `src/output.css` and the theme tokens are already shared/identical for all contributors — don't regenerate or rewrite the Tailwind setup, just build on top of it. Match the existing design system exactly, don't invent a new one.

Repo layout (relevant parts):
```
index.html                 ← homepage, already built, is the source of truth for style
src/input.css              ← Tailwind v4 entry point, theme tokens defined here via @theme
src/output.css             ← compiled CSS (built by: npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch), do not hand-edit
public/fonts/                ← self-hosted font files
public/images/PorExpress-Logo.png
public/images/Hero-section-picture.png  ← background illustration for THIS page's hero (truck/warehouse abstract graphic)
js/home.js                 ← nav dropdown logic for the homepage (pattern to reuse)
page/company/company.html  ← TARGET FILE — currently empty, you are building this
js/company.js              ← TARGET FILE — currently empty, you are building this
```

Your task: build `page/company/company.html` and `js/company.js` as a new "Company / About Us" page that visually matches a Figma design (described section-by-section below) while reusing the site's exact nav bar, footer, color palette, fonts, and component conventions from `index.html`. Do not create a Tailwind config file — this project configures Tailwind entirely in CSS via `@theme` in `src/input.css`. If you need a new color, font, or animation not already defined there, add it to `src/input.css` following the existing pattern (see "If you need something new" at the end).

---

## DESIGN SYSTEM (copy exactly — do not approximate)

**Colors** (from `src/input.css` `@theme`):
- `--color-primary: #1D3D50` — dark navy-teal. Headings, dark section/card backgrounds, primary buttons, icon tiles.
- `--color-secondary: #00BA34` — green. Accents, eyebrow labels, links, highlighted heading words, icons, filled CTA buttons, stat numbers.
- `--color-accent: #E5E5E5` — light gray. Page/section backgrounds, neutral card fills.
- Plain `white`/`black` at reduced opacity for muted copy (`text-black/55`, `text-accent/60`, etc).

**Fonts:**
- `font-display` → "Space Grotesk" — all headings.
- `font-body` → "Roboto" — body copy (already global on `<body>`).
- `font-mono` → "IBM Plex Mono" — eyebrow labels, stat numbers/labels, team member "Team · 0X" tags and role tags — this page leans on mono type more heavily than others (team cards especially), reproduce that.

**This page's eyebrow style is a variant — use it consistently across every section on this page:** instead of the small green-dot pill badge used on the homepage, this page prefixes each eyebrow label with a literal em dash, all caps, mono, green:
```html
<span class="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-secondary mb-3.5">
  <span class="w-4 h-px bg-secondary"></span> SECTION LABEL
</span>
```
(Normalize the couple of inconsistent mockup labels — "Coverage Network" and "About our team" appeared in mixed/lowercase in the source file — to the same uppercase treatment as every other eyebrow on this page, for visual consistency.)

**Recurring conventions to reuse from `index.html`:**
- Section heading: `font-display font-bold text-[clamp(28px,3vw,38px)] leading-tight text-primary` (white on dark sections)
- Body copy: `text-base leading-relaxed text-black/55` (light muted tone on dark sections)
- Card shadow: `shadow-[0_20px_45px_-30px_rgba(18,39,51,0.35)]`; radius `rounded-2xl`
- Icon tiles: `w-10 h-10 rounded-[10px] bg-secondary/15` with a `text-secondary` icon (light cards), or `w-13 h-13 rounded-2xl bg-primary` with `text-secondary` icon (used for the Mission/Vision/Values icons — note one of those three, "Our Vision", uses an inverted green-filled tile instead of navy, per the mockup — keep that one exception)
- Buttons: filled green pill = `bg-secondary rounded-full font-semibold` (dark text); filled navy pill = `bg-primary text-white rounded-full font-semibold`; both get a hover shadow lift
- Max content width `max-w-[1240px] mx-auto px-5 sm:px-8`; section vertical padding `py-24 sm:py-28`
- All icons are inline SVGs (`stroke="currentColor"`), no icon library — draw simple flat line icons in the same visual weight as `index.html`'s icons for anything new.

---

## HEADER / NAV — reuse exactly, adjust only the relative paths

On this page the header sits standalone on the light `bg-accent` page background (not inside the dark hero shell) — the hero card is a separate rounded element below it. Copy this verbatim from `index.html`, fixing relative paths (this file lives at `page/company/company.html`):

```html
<header class="relative z-20 px-4 sm:px-6 pt-4 sm:pt-5">
  <div class="max-w-[1180px] mx-auto h-20 flex items-center justify-between bg-white rounded-full py-2.5 pr-2.5 pl-5 shadow-[0_12px_30px_-14px_rgba(18,39,51,0.25)]">
    <a href="../../index.html" class="flex items-center gap-2 h-full py-3">
      <span class="block h-full w-44 overflow-hidden">
        <img src="../../public/images/PorExpress-Logo.png" alt="Por Express" class="h-full w-full object-cover object-center">
      </span>
    </a>
    <nav class="hidden lg:flex items-center gap-1">
      <a href="../../index.html" class="text-sm font-medium text-primary px-3.5 py-2.5 rounded-full">Home</a>
      <!-- Services / Shipments / Company / Support dropdowns — copy verbatim from index.html (lines ~33-95),
           fix hrefs to ../<page>/<page>.html. Mark the "Company" trigger as the current page if the site
           has an active-state convention; otherwise leave as-is. -->
    </nav>
    <div class="flex items-center gap-4">
      <a href="../Auth/Auth.html" class="text-sm font-medium text-primary/75 hover:text-primary px-1 py-2.5">Login</a>
      <a href="#" class="inline-flex items-center justify-center font-semibold text-sm text-white bg-primary px-5.5 py-3 rounded-full hover:shadow-[0_8px_20px_-8px_rgba(18,39,51,0.5)] transition-shadow whitespace-nowrap">Get Started</a>
    </div>
  </div>
</header>
```

Nav dropdown behavior: copy the click/keyboard toggle logic from `js/home.js` into `js/company.js` unchanged.

---

## FOOTER — reuse exactly, adjust only the relative paths

Copy the entire `<footer>` block from `index.html` verbatim, fixing paths relative to `page/company/company.html` (`../../public/images/...`, `../../index.html`, `../service/service.html`, `../shipment/shipment.html`, self-link `company.html` for "Company", `../support/support.html`). Keep the sponsor line exactly as it reads in `index.html` ("Sponsored and recognized by").

---

## PAGE-SPECIFIC SECTIONS (in order)

### 1. Hero — "Driving Logistics Excellence Across Cambodia" (dark rounded card)
Reuse the homepage's rounded-shell technique, but inverted: an outer `bg-accent` frame (`p-4 sm:p-6`) containing an inner `max-w-[1400px] mx-auto bg-primary rounded-[28px]` card that holds the hero content (this is the mirror image of `index.html`'s outer-primary/inner-accent shell).
- H1 (font-display, bold, white, large): "Driving **Logistics** Excellence Across Cambodia" — "Logistics" in `text-secondary` green, rest white.
- Paragraph (muted light, `text-white/60` or similar): "Reliable transportation, warehousing, freight forwarding, and end-to-end supply chain solutions built for businesses of every size."
- Two CTAs, both filled green pills (per the mockup, not one green + one outline): "Learn More" and "Contact Us" (link this one to `../support/support.html#contact` if that page/anchor exists on your branch, otherwise `#`).
- Three stats inline below the buttons: **10+** Years Experience, **25** Provinces Served, **50,000+** Deliveries Completed (bold green number, muted white label underneath — same stat pattern as `index.html`'s statistics section but on this card instead).
- Background: place `../../public/images/Hero-section-picture.png` as a large, semi-transparent decorative illustration bleeding off the right/bottom edge of the card, behind the text (absolutely positioned, `object-cover` or `object-contain` depending on how the asset is cropped, low opacity or `mix-blend-mode` so it reads as a subtle background pattern rather than competing with the text — check the actual image and adjust positioning/opacity to taste, the mockup shows it as a faint navy/green geometric truck-and-warehouse motif in the card's right two-thirds).

### 2. "Ten years of moving Cambodia's businesses forward" (white bg)
- Eyebrow: "ABOUT POR EXPRESS"
- Heading: "Ten years of moving Cambodia's businesses forward"
- Two paragraphs:
  1. "Founded in 2020, Por Express has grown from a single depot in Phnom Penh into one of Cambodia's most trusted freight and supply chain partners, serving manufacturers, retailers, and exporters across the country."
  2. "We combine a modern fleet, purpose-built warehousing, and real-time visibility technology with a team that understands the realities of moving goods across Cambodia's provinces — from congested city routes to rural last-mile delivery."
- A 3-item checklist, each with a green circular checkmark icon: "Licensed, insured, and compliant nationwide freight operations"; "15 strategically located warehouses across major provinces"; "Dedicated account teams for SME and enterprise clients".
- **Right side (no image asset provided for this part — design it yourself):** three small stat/info cards staggered vertically, each visually "hanging" from a thin green vertical line coming down from above the section (a decorative touch echoing the nav's accent color). Build these as plain HTML/CSS + inline SVG, no image files:
  1. **"Fleet Efficiency."** — dark navy card header, white card body below containing a small green delivery-truck line icon, a small up-trending line-chart icon, the number **"12%"** in bold green, and the caption "12% Efficiency Improvement vs Last Month".
  2. **"On-Time Delivery Rate."** — same two-tone card shape, containing a simple 6-bar bar chart (bars in alternating green/navy) labeled J F M A M J along the bottom, with **"98.6%"** in bold green and caption "On-Time Delivery Rate".
  3. **"Shipments in Transit."** — same card shape, containing a small warehouse/shelf icon with a few colored bar segments and an arrow, with the caption "**45** Active Shipments" (45 in bold).
  Stagger these three cards at different vertical offsets (per the mockup) using margin/translate utilities; stack them in a simple column on mobile.

### 3. "Mission, Vision & Core Values" (light `bg-accent`)
- Eyebrow: "WHAT DRIVES US"
- Heading: "Mission, Vision & Core Values"
- Subheading: "The principles that guide every shipment, every warehouse, and every client relationship."
- 3-column grid of cards (card fill is a slightly darker gray than the section background, per the mockup — e.g. `bg-white/60` or a dedicated light gray, use your judgment to get visible card separation against `bg-accent`):
  1. **Our Mission** — dark navy icon tile with a star icon — "To deliver reliable, efficient, and secure logistics solutions that empower businesses across Cambodia to grow with confidence."
  2. **Our Vision** — green-filled icon tile (exception to the usual navy tile) with an eye icon — "To be Cambodia's most trusted logistics partner, recognized for innovation, dependability, and nationwide reach."
  3. **Core Values** — dark navy icon tile with a heart icon — "Integrity, safety, and accountability in every shipment — paired with a genuine commitment to our people and clients."

### 4. "Built for businesses that can't afford delays" (white bg)
- Eyebrow: "WHY CHOOSE US"
- Heading: "Built for businesses that can't afford delays"
- Subheading: "Six reasons Cambodian businesses trust **Por Express** with their most time-sensitive freight." (the source mockup says "Meridian" here — that's a leftover from a template and doesn't match this company's name anywhere else on the site; use "Por Express".)
- 3-column, 2-row grid of bordered cards (light green icon tile, bold title, muted description):
  1. **Fast Delivery** (lightning-bolt icon) — "Optimized routing and a modern fleet keep transit times short and predictable, province to province."
  2. **Real-Time Shipment Tracking** (clock icon) — "Monitor every shipment from pickup to delivery with live status updates and instant notifications."
  3. **Secure Cargo Handling** (shield icon) — "Trained handling staff, sealed containers, and insured transit protect every shipment in our care."
  4. **Nationwide Coverage** (globe icon) — "Active service across 25 provinces, connecting Phnom Penh to the country's furthest corners."
  5. **Modern Warehouse Facilities** (cube icon) — "15 climate-aware, security-monitored warehouses positioned for efficient regional distribution."
  6. **24/7 Customer Support** (headset icon) — "A dedicated support team is available around the clock to answer questions and resolve issues fast."

### 5. "Company Milestones" (light `bg-accent`)
- Eyebrow: "OUR JOURNEY"
- Heading: "Company Milestones"
- Subheading: "From a single depot to a nationwide logistics network."
- A horizontal timeline: a thin line with 4 green ringed dots spaced along it, each with a white card underneath containing a green year and a bold milestone title:
  - **2020** — Company Founded
  - **2021** — Expanded Nationwide
  - **2023** — Real-Time Tracking Launched
  - **2025** — International Expansion
  Stack vertically on mobile with the line running down the left side instead of across the top (same responsive pattern as the "How It Works" numbered-step section on `index.html`, adapted to a dotted timeline).

### 6. "Wherever your business operates, we're already there" (dark `bg-primary`)
- Eyebrow: "COVERAGE NETWORK"
- Heading (white): "Wherever your business operates, we're already there"
- Paragraph (muted light): "Our depots and delivery routes span the country, backed by a fleet and warehouse network built for scale."
- 4 stat boxes (dark bordered cards, green bold numbers): **25** Provinces Covered; **120** Delivery Routes *(placeholder label — no source text was available for this figure; swap in the real label/number if your team has one)*; **15** Warehouses; **50,000+** Deliveries Completed.
- Left side: an inline SVG stylized map of Cambodia's provinces on the dark background, with small green glowing dots marking depot locations and light green province name labels, similar in spirit to the coverage map already built on `index.html` (reuse that section's `dot-grid`/map conventions if helpful) but drawn as a full province outline map rather than a simplified dot diagram. Label at least: Oddar Meanchey, Preah Vihear, Stung Treng, Ratanakiri, Banteay Meanchey, Siem Reap, Battambang, Pailin, Kampong Thom, Kratié, Mondulkiri, Kampong Chhnang, Kampong Cham, Tboung Khmum, Pursat, Kampong Speu, Prey Veng, Svay Rieng, Koh Kong, Preah Sihanouk, Kampot, Kep, Takeo.

### 7. "Frequently Asked Questions" (light `bg-accent`) — click-to-open accordion, your own answer copy
- Eyebrow: "SUPPORT"
- Heading: "Frequently Asked Questions"
- Subheading: "Answers to the questions we hear most from clients."
- 4 accordion rows, white rounded bordered cards, bold question + a circular icon button on the right that shows **+** collapsed and flips to **−** (or an X) when expanded. **This must be a single-open accordion**: opening one question automatically closes whichever other one is currently open. Implement the toggle in `js/company.js` (click-driven, `aria-expanded` on each trigger, matching the accessibility pattern already used for nav dropdowns in `js/home.js` — don't rely on `:hover`). No answer copy existed in the source design, so write concise, on-brand answers yourself, e.g.:
  1. **How do I track my shipment?** — "Enter your tracking number on the Shipments page to see live status updates from pickup through delivery."
  2. **What areas do you deliver to?** — "We currently operate in all 25 provinces of Cambodia, with same-day service in Phnom Penh and 2–7 day delivery windows elsewhere."
  3. **What shipping methods are available?** — "Standard, express, nationwide, and bulk cargo/freight — pick the option that matches your timeline and shipment size."
  4. **What items cannot be transported?** — "Illegal goods, hazardous or flammable materials, and perishable items without proper packaging are not accepted. Contact support if you're unsure about a specific item."
  (Feel free to lightly edit this copy, but keep the tone and length consistent with the rest of the site.)

### 8 & 9. "Meet Our Team" (light `bg-accent`)
- Eyebrow: "ABOUT OUR TEAM"
- Heading: "Meet Our Team"
- Subheading: "Programmer, hardworking, and obsessive problem-solver" (reproduce as-is from the source design — it reads as a collective tagline for the team, not a typo to fix).
- **Mentor spotlight** (shown first, set apart from the grid): a large green "Mentor" label, then one wider card: photo, "Lecturer" caption, name "**Srorng Sokcheat**".
- **"Team Members"** sub-heading (large, bold green), then a responsive 3-column grid of 7 member cards. Each card: photo (portrait aspect ratio, ID-photo style crop), a small gray mono "Team · 0X" tag, bold name, a green mono role tag, and a row of 3 small circular social icons (dark navy circle, green glyph) for Facebook, Telegram, and GitHub (all `href="#"` placeholders unless real links are supplied later):
  1. Team · 01 — **Heng Soleakna** — Leader
  2. Team · 02 — **Chhun Hokchheng** — Sub · Leader
  3. Team · 03 — **San Sengthanu** — Member
  4. Team · 04 — **Savuth Sochamraouen** — Member (title-cased; source design had it lowercase)
  5. Team · 05 — **Leang Seavminh** — Member
  6. Team · 06 — **Man Senghak** — Leader *(worth double-checking with your team — having two people tagged "Leader" alongside a separate "Sub · Leader" looks like it might be a copy mistake in the source design; default to "Member" if you can't confirm)*
  7. Team · 07 — **Han Sitha** — Member

**No photo files exist in the repo yet** for the mentor or any of the 7 members. Since teammates will add real photos later without wanting to touch the markup again, build each card's image with a predictable, slugified path and a graceful fallback, following the same `onerror` pattern already used elsewhere in `index.html` (e.g. the testimonial avatars):
```html
<div class="aspect-[3/4] rounded-2xl overflow-hidden bg-primary/10 relative">
  <img src="../../public/images/team/heng-soleakna.jpg" alt="Heng Soleakna" class="w-full h-full object-cover"
       onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
  <div class="hidden absolute inset-0 items-center justify-center bg-primary text-white font-display font-bold text-2xl">HS</div>
</div>
```
Use `public/images/team/<first>-<last>.jpg` (lowercase, hyphenated) for every card, and the person's initials as the fallback tile content, so dropping in a correctly-named photo later "just works" with no HTML changes. Use the same pattern for the mentor's photo (`public/images/team/srorng-sokcheat.jpg`).

---

## FILES TO CREATE / EDIT

1. `page/company/company.html` — full document. `<head>` links `../../src/output.css`. Load `<script src="../../js/company.js" defer></script>` at the bottom.
2. `js/company.js` — currently empty. Add: (a) nav dropdown toggle copied from `js/home.js`, (b) the single-open FAQ accordion toggle described in section 7.
3. Do **not** modify `index.html`, `src/output.css` (generated), or any other existing page.

## IF YOU NEED SOMETHING NEW

If a color, spacing token, or animation isn't already defined in `src/input.css`, add it inside the appropriate existing block (`@theme` for tokens, `@layer components` for reusable classes) with a short comment, rather than hardcoding one-off values — this keeps the diff clean and mergeable for a team pulling the same branch.

## SELF-CHECK BEFORE YOU FINISH

- Every eyebrow label on this page uses the "— LABEL" mono/uppercase/green treatment consistently (including the two that were inconsistent in the source: Coverage Network, About our team).
- "Meridian" does not appear anywhere — replaced with "Por Express".
- The FAQ accordion is genuinely single-open and click-driven (not hover), with working `aria-expanded` and an icon that visibly flips between + and −.
- All 7 team cards + mentor card reference `public/images/team/<slug>.jpg` and fall back to an initials tile if the image 404s, without a console error breaking anything else.
- Hero background references `public/images/Hero-section-picture.png` and doesn't visually drown out the heading/paragraph/buttons.
- Nav dropdowns work via click, no console errors.
- All internal links/paths resolve correctly from `page/company/company.html`'s actual location.
- Page is responsive: single column on mobile, matching breakpoints used elsewhere on the site.
- Nothing outside `page/company/company.html` and `js/company.js` was modified.
