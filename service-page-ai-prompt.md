
# Prompt: Build the "Service" page for Por Express (Mini-Project-Group-4)

Copy everything below the line and paste it to your AI coding assistant.

---

## ROLE & CONTEXT

You are working inside an existing static website project called **Por Express** (a Cambodian logistics/freight company site). The repo has NO framework — it's plain HTML + Tailwind CSS v4 (CLI build, not a JS config file) + vanilla JS. Everyone on the team works off the same branch, so `src/output.css`, `src/custom.css`, `src/dark.css` and the theme tokens are already shared/identical for all contributors — don't regenerate or rewrite them, just build on top of them. Match the existing design system exactly, don't invent a new one.

Repo layout (relevant parts):
```
index.html                  ← homepage, source of truth for style
page/company/company.html   ← already-built sub-page at the same folder depth as this one —
                               use it as your reference for the header/nav/footer markup,
                               since it already has the current dark-mode + mobile-menu setup
                               with correctly adjusted relative paths (../../...)
src/input.css               ← Tailwind v4 entry point, theme tokens defined here via @theme
src/output.css               ← compiled CSS (built by: npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch), do not hand-edit
src/custom.css               ← hand-written plain CSS (not Tailwind-generated), loaded after output.css
src/dark.css                  ← hand-written dark-mode overrides, activated by class="dark" on <html>
js/home.js                  ← nav dropdown toggle logic (pattern to reuse)
js/ui.js                    ← dark-mode toggle + mobile menu logic (pattern to reuse, load as-is)
page/service/service.html   ← TARGET FILE — currently empty, you are building this
js/service.js               ← TARGET FILE — currently empty, you are building this
```

Your task: build `page/service/service.html` and `js/service.js` as a new "Our Services" page that visually matches a Figma design (described section-by-section below) while reusing the site's exact nav bar, footer, color palette, fonts, dark-mode system, and component conventions. Do not create a Tailwind config file — this project configures Tailwind entirely in CSS via `@theme` in `src/input.css`. If you need a new color, font, or animation not already defined there, add it to `src/input.css` following the existing pattern (see "If you need something new" at the end).

---

## DESIGN SYSTEM (copy exactly — do not approximate)

**Colors** (from `src/input.css` `@theme`):
- `--color-primary: #1D3D50` — dark navy-teal. Headings, dark section backgrounds, primary buttons/icon tiles.
- `--color-secondary: #00BA34` — green. Accents, badges, highlighted heading words, icons, outline-button borders, stat/rating numbers.
- `--color-accent: #E5E5E5` — light gray. Section backgrounds and neutral card fills.
- Plain `white`/`black` at reduced opacity for muted copy (`text-black/55`, `text-white/60`, etc).

**Fonts:**
- `font-display` → "Space Grotesk" — all headings.
- `font-body` → "Roboto" — body copy (global on `<body>`).
- `font-mono` → "IBM Plex Mono" — uppercase captions (e.g. "PP & SIEM REAP", "COASTAL / RIVER", "NATIONWIDE TRUCKING"), badge labels.

**Icon style note:** the rest of the site (`index.html`, `company.html`) uses stroke-based outline SVG icons (`stroke="currentColor"`, no fill) throughout. The Figma mockup for this page renders the three "Freight Infrastructure" icons (plane, ship, truck) as solid/filled glyphs, which breaks from that convention. Default to the site's established outline-stroke icon style for consistency across pages — draw a simple outline plane/ship/truck icon rather than filled ones — unless your team specifically wants this page to look different on purpose.

**Recurring conventions to reuse from `index.html` / `company.html`:**
- Section heading here is consistently **green** (`text-secondary`), not navy like other pages — follow the mockup on this: `font-display font-bold text-[clamp(26px,3vw,36px)] text-secondary`.
- Body copy: `text-base leading-relaxed text-black/55` (or `text-white/60` on the dark hero)
- Card border: plain `border border-primary/15 rounded-2xl` (this page's cards read as outlined, not drop-shadowed, boxes — lighter-weight than the shadow-heavy cards on other pages)
- Icon tiles: small `w-11 h-11 rounded-[10px] bg-secondary/15` light tile with a `text-secondary` icon for feature rows (Climate-Controlled / Live Inventory), or a plain standalone icon (no tile) for the row-card and grid-card headers, matching each mockup section as described below.
- Buttons on this page are a distinct style from the rest of the site: **rectangular with modest corner rounding** (`rounded-lg` or `rounded-xl`, not `rounded-full`), bordered/outline (`border border-current`, transparent fill), used for every CTA on this page (hero buttons, "LOCAL NETWORK MAP", "VIEW SPECIALIZED FLEET", "Get Local Quote"). Keep this consistent — don't mix in the pill-shaped buttons used elsewhere on the site.
- Max content width `max-w-[1240px] mx-auto px-5 sm:px-8`; section vertical padding `py-20 sm:py-24`.

---

## HEADER / NAV / FOOTER — copy verbatim from `page/company/company.html`

Copy the entire `<head>` block (favicon links, dark-mode anti-flash script, the three stylesheet links), the `<header>` block (logo, desktop nav with all 4 dropdowns, theme-toggle button, login/CTA, mobile nav-toggle button, mobile menu panel), and the `<footer>` block from `page/company/company.html` verbatim — it's already at the same folder depth (`page/service/service.html`) so all the `../../` relative paths are already correct as-is. Only change:
- The mobile menu's "Company" link back to a same-page-appropriate target isn't needed here — instead, mark **"Services"** as the current page the same way `company.html` marks "Company" (solid `bg-accent` on the nav-trigger button, `aria-current="page"`, but do **not** add the `open` class to the wrapping `.nav-item` — that was a bug fixed on `company.html`; leave the dropdown closed by default).
- Update the mobile menu's "Services" link to point at `service.html` (self) instead of the dedicated page it pointed to from `company.html`.
- Update the footer's "Quick" list "Services" link to `service.html` (self) rather than a relative link to itself elsewhere.

Load both scripts at the bottom, matching `company.html`: `<script src="../../js/service.js" defer></script>` and `<script src="../../js/ui.js" defer></script>`.

---

## PAGE-SPECIFIC SECTIONS (confirmed order, top to bottom)

### 1. Hero — "Our Logistics Solutions" (dark `bg-primary`)
- Badge above the heading: an anchor icon + "Our Services" text, in a pill with a `border border-secondary` outline, `text-secondary`, transparent/dark fill (not the green-tinted filled pill badge style used on other pages' heroes).
- H1 (font-display, bold, large): "Our **Logistics** Solutions" — wait, check wording precisely: the heading reads "Our Logistics **Solutions**" — "Our Logistics" in white, "Solutions" in `text-secondary` green.
- Paragraph (muted light, `text-white/60`): "Orchestrating high-precision supply chains across Cambodia with smart infrastructure and nationwide connectivity."
- Two outline buttons (rectangular, modest rounding, `border border-white/30 text-white`, transparent fill): "Get a Quote" and "Track Shipment" (link the latter to `../shipment/shipment.html`, and "Get a Quote" to `#quote` or `../support/support.html#contact` if no dedicated quote flow exists yet).
- No illustration/photo in the hero itself on this page (unlike other pages) — the hero is text-only on the dark card.

### 2. "Cambodia Logistics Network" (white bg)
- Heading (green, bold): "Cambodia Logistics Network"
- Sub-label directly under the heading (smaller, `text-primary`, regular weight — reads like a category tag, not a full sentence): "Shipping Services"
- Two full-width row cards (bordered box, icon top-left, bold title, muted description below, a small ↗ arrow icon in the top-right corner):
  1. **Express Delivery** (folded-map icon) — "Time-sensitive shipping that guarantees delivery within defined windows. Perfect for high-priority documents and perishable cargo."
  2. **Local Distribution** (delivery-truck icon) — "High-frequency urban network providing same-day delivery within Phnom Penh and next-day to major provincial cities."

### 3. "Freight Infrastructure" (light `bg-accent`)
- Heading (green, bold): "Freight Infrastructure"
- 3-column grid of bordered cards, each with: a small icon (see icon-style note above — build as outline, not filled), a bold title in `text-secondary` green, a `font-mono text-xs uppercase tracking-wide text-black/50` caption line, and a muted description:
  1. **Local Air Cargo** — caption "PP & SIEM REAP" — "Express air freight connections between Phnom Penh and Siem Reap for time-critical assets and luxury goods."
  2. **Sihanoukville Sea Freight** — caption "COASTAL / RIVER" — "Direct maritime services via Sihanoukville Port, handling FCL/LCL for industrial and bulk local requirements."
  3. **Inter-Provincial Rail/Road** — caption "NATIONWIDE TRUCKING" — "Heavy-duty transport solutions across the primary national road network and domestic rail lines."
- Directly below the grid, a **featured two-toned card** (rounded, `border border-secondary`, white top half / dark navy bottom half, both inside one card shape):
  - White top half: heading "**Smart Warehousing**" (green), description "Our facilities are equipped with IoT-enabled climate control and AI-driven inventory management systems.", then two feature rows (small light-green icon tile + bold title + muted description):
    - **Climate-Controlled** (thermometer icon) — "Precision storage for pharmaceuticals & perishables."
    - **Live Inventory** (box/inventory icon) — "Real-time SKU tracking with 99.9% accuracy."
  - Dark bottom half: a full-bleed illustrated banner with large bold white uppercase text **"SMART WAREHOUSE MANAGEMENT SYSTEM"** overlaid on an isometric warehouse illustration (shelving units, stacked boxes, a forklift). **No image asset exists yet for this illustration.** Build it as an `<img>` pointing at a predictable path — `../../public/images/service/smart-warehouse-banner.png` — with a dashed-border placeholder `<div>` fallback (same `onerror` swap pattern used for the homepage's own hero-image placeholder in `index.html`) showing a simple box/warehouse outline icon and the caption "Illustration placeholder — swap in exported artwork", so a teammate can drop the real export in later without touching markup.

### 4. "Precision Delivery Solutions" (light `bg-accent`)
- Starts with its own full-bleed illustrated banner (rounded, `border border-secondary`, dark navy bg) depicting an isometric logistics scene: a phone displaying a map/route, a small delivery robot/cart, a delivery van being loaded with boxes, a person with a hand-truck, and shelving — no text overlay this time. Same treatment as the banner above: **no image asset exists yet** — use `<img src="../../public/images/service/precision-delivery-banner.png">` with the same dashed-border placeholder fallback pattern.
- Heading (green, bold, centered): "Precision Delivery Solutions"
- Subheading (centered, `text-primary`, not muted gray — read the mockup color as full-strength navy, slightly bolder than typical muted subheadings elsewhere): "Engineered for the unique demands of Cambodia's growing urban centers and remote provincial landscapes."
- Two cards (bordered box, left-aligned: icon top-left, bold title, muted description, an outline button below):
  1. **Urban Last-Mile** (scooter/moped icon) — "Swift, high-frequency urban delivery networks optimized for Phnom Penh and Siem Reap city centers." — button "LOCAL NETWORK MAP" (uppercase, small text)
  2. **Specialized Local Cargo** (crate/box icon) — "Handling of sensitive local freight including agricultural tech, medical supplies, and luxury retail." — button "VIEW SPECIALIZED FLEET" (uppercase, small text)

### 5. "Prices and Rating" (white bg)
- This reads as its own short closing section — the heading doubles as the section title (no separate eyebrow), inside a single bordered card:
- Heading (green, bold, left-aligned): "Prices and Rating"
- Three rows, each: item name + a star icon + a bold green rating number on the left, and a muted "FROM $X.XX" price on the right:
  1. Domestic Parcel (Standard) ★ 4.8 — FROM $2.50
  2. Provincial Freight (Per CBM) ★ 4.9 — FROM $15.00
  3. Storage (Per Pallet/Day) ★ 4.7 — FROM $0.85
- Full-width outline button below the rows: "Get Local Quote ▷" (green border and text, small triangle/play glyph after the label).

### 6. Footer
Reuse verbatim from `company.html` as described above.

---

## FILES TO CREATE / EDIT

1. `page/service/service.html` — full document, built from the `company.html` head/header/footer plus the 5 sections above in order.
2. `js/service.js` — currently empty. Copy the nav-dropdown toggle logic from `js/home.js` (the mobile menu + dark-mode toggle already live in `js/ui.js`, which you're loading as-is — don't duplicate that logic here). This page has no accordion or form, so that's likely all `service.js` needs; add anything else only if you introduce an interactive element in the sections above.
3. Do **not** modify `index.html`, `company.html`, `src/output.css` (generated), or any other existing page.

## IF YOU NEED SOMETHING NEW

If a color, spacing token, or animation isn't already defined in `src/input.css`, add it inside the appropriate existing block (`@theme` for tokens, `@layer components` for reusable classes) with a short comment, rather than hardcoding one-off values. This page introduces a new button shape (rectangular outline, not pill) and a two-toned feature-card pattern (white top / dark bottom in one rounded card) — if either becomes a `@layer components` class (e.g. `.btn-outline`, `.feature-card-split`), document it briefly so `shipment.html`/`support.html` can reuse it if they end up wanting the same look.

## SELF-CHECK BEFORE YOU FINISH

- Section headings are green (`text-secondary`), matching this page's mockup — don't default to the navy headings used elsewhere on the site.
- Every CTA on this page uses the rectangular outline button style, not the pill-shaped buttons from other pages.
- The two illustration placeholders (`smart-warehouse-banner.png`, `precision-delivery-banner.png`) degrade gracefully with a dashed-border fallback if the image 404s, and don't break layout.
- Nav dropdowns work via click (not just hover), dark mode toggles correctly (via the shared `js/ui.js`), and there are no console errors.
- "Services" is marked as the current nav item (solid `bg-accent` on its trigger) but its dropdown does **not** render open by default.
- All internal links/paths resolve correctly from `page/service/service.html`'s actual location.
- Page is responsive: single column on mobile, matching breakpoints used elsewhere on the site.
- Nothing outside `page/service/service.html` and `js/service.js` was modified.
