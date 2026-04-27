# Design System Inspired by Apple

## 1. Visual Theme & Atmosphere

Apple's web presence is a masterclass in reverent product photography framed by near-invisible UI. The homepage is a stack of edge-to-edge product "tiles" — alternating light and dark canvases, each centered on a hero headline, a one-line tagline, two tiny blue pill CTAs, and an impossibly crisp product render. Nothing competes with the product. Typography is confident but quiet; color is either pure white, an off-white parchment, or a near-black tile; interactive elements are a single, quiet blue.

Density is unusually low even by contemporary SaaS standards. Each tile occupies roughly one viewport, and there is no decorative chrome — no borders, no gradients, no decorative frames, no shadows on headlines. Elevation appears only when a product image rests on a surface (a single soft `rgba(0, 0, 0, 0.22) 3px 5px 30px` drop for visual weight). The result is a catalog that feels more like a museum gallery: the wall disappears and the artifact takes over.

Store and shop surfaces retain the same chassis but switch modes. The product configurator (iPhone 17 Pro, accessories grid) introduces a tight grid of white utility cards at `18px` radius with a thin border, paired with a persistent thin sub-nav strip. The environment page leans darker and more editorial. Across all five surfaces the typographic system, spacing rhythm, and the single blue accent are consistent — this is one design language expressed at different volumes.

**Key Characteristics:**
- Photography-first presentation; UI recedes so the product can speak
- Alternating full-bleed tile sections: white/parchment ↔ near-black
- Single blue accent (`#0066cc`/`#0071e3`) carries every interactive element
- Two button grammars: tiny blue pill CTAs (`980px` radius) and compact utility rects (`8px` radius)
- SF Pro Display + SF Pro Text — negative letter-spacing at display sizes for the signature "Apple tight" headline feel
- Whisper-soft elevation used only when a product image needs to breathe
- Tight two-row nav: slim global nav + product-specific sub-nav with persistent right-aligned primary CTA
- Section rhythm across multiple pages: light hero → dark product tile → light utility tile → dark tile → gray footer — a predictable pulse

## 2. Color Palette & Roles

> Source pages analyzed: homepage, environment, store, iPhone 17 Pro buy page, accessories index.

### Primary

- **Action Blue** (`#0066cc`): The single brand-level interactive color. All text links, all blue pill CTAs ("Learn more", "Buy"), and the focus ring root. This is Apple's quiet but universal "click me" signal.
- **Focus Blue** (`#0071e3`): A marginally brighter sibling of Action Blue, reserved for the keyboard focus ring on buttons (`outline: 2px solid`).
- **Near-Black Ink** (`#1d1d1f`): The voice of every headline, every body paragraph, and the dark nav button's fill. Chosen instead of pure black to keep the page feeling photographic rather than printed.

### Secondary & Accent

- **Sky Link Blue** (`#2997ff`): A brighter blue used on dark surfaces for in-copy links and inline callouts, where Action Blue would disappear against the tile background.
- **Pearl Button** (`#fafafc`): A near-white used as the fill for secondary "ghost" buttons — lighter than the parchment canvas so the button still reads as a button against `#f5f5f7`.
- **Soft Chip Gray** (`rgba(210, 210, 215, 0.64)`): Translucent gray used on dark product imagery for circular control chips (thumbnail carousels, close buttons floating over photography).

### Surface & Background

- **Pure White** (`#ffffff`): The dominant canvas. Content, utility cards, store tiles, configurator grids.
- **Parchment** (`#f5f5f7`): The signature Apple off-white. Used for alternating light tiles, footer region, and the default page canvas in store utility sections. Just different enough from white to create rhythm.
- **Near-Black Tile 1** (`#272729`): The primary dark-tile surface on the homepage product grid.
- **Near-Black Tile 2** (`#2a2a2c`): A micro-step lighter — used where a dark tile sits directly above or below Tile 1 to create the faintest separation.
- **Near-Black Tile 3** (`#252527`): A micro-step darker — used at the bottom of the stack and in embedded video/player frames.
- **Pure Black** (`#000000`): Reserved for true void — video player backgrounds, edge-to-edge photographic overlays, the global nav bar background.

### Neutrals & Text

- **Near-Black Ink** (`#1d1d1f`): Primary heading + body color on light surfaces.
- **Paper White** (`#ffffff`): All text on dark tiles and on the global nav bar.
- **Muted Ink 80%** (`rgba(0, 0, 0, 0.8)`): Body text on the white Pearl Button surface — slightly softer than pure black.
- **Muted Ink 48%** (`rgba(0, 0, 0, 0.48)`): Disabled button text and legal fine-print.
- **Divider 4%** (`rgba(0, 0, 0, 0.04)`): 3px "border" on secondary buttons — functions as a ring shadow rather than a hard line.

### Semantic & Accent

- **Action Blue** (`#0066cc`): Doubles as the "informational" semantic — promos, inline info links, and the "Pre-Order Now" / "Learn more" CTA language.
- **Focus Blue** (`#0071e3`): The accessibility focus signal — never decorative, only keyboard-state.

### Gradient System

No decorative gradients. Atmospheric depth on product photography (the iPhone 17 Pro camera plate, the Apple Watch bands, AirPods reflections) is inherent to the imagery, not a CSS gradient overlay. The environment page's hero uses photographic atmosphere (mountain vista at dawn) but no gradient tokens were defined.

## 3. Typography Rules

### Font Family

- **Display**: `"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif` — Apple's proprietary display face, optimized for sizes ≥ 19px. Defines the voice of every headline.
- **Body / UI**: `"SF Pro Text", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif` — the text-optimized variant used for body copy, captions, buttons, and links below 20px.
- **OpenType features**: `features: "numr"` is enabled on numeric links (pricing tables, spec sheets) to switch to numerator forms. Display sizes rely on tight tracking rather than contextual ligatures.

### Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|--------|-------------|----------------|-------|
| Hero Headline | 56px | 600 | 1.07 | -0.28px | SF Pro Display; tight negative tracking is the signature |
| H1 / Tile Headline | 40px | 600 | 1.10 | — | SF Pro Display; used atop every product tile |
| H2 / Section | 34px | 600 | 1.47 | -0.374px | SF Pro Text at display proportions |
| Lead / Subhead | 28px | 400 | 1.14 | 0.196px | SF Pro Display; product tile subcopy |
| Large Lead | 24px | 300 | 1.50 | — | SF Pro Text; environment page lead paragraphs (note the rare weight 300) |
| Sub-tile Tagline | 21px | 400–700 | 1.19 | 0.231px | SF Pro Display; used as a secondary tagline on compact tiles |
| Body Strong | 17px | 600 | 1.24 | -0.374px | SF Pro Text; inline strong emphasis, nav link hover text |
| Body | 17px | 400 | 1.47 | -0.374px | SF Pro Text; default paragraph |
| Dense List | 17px | 400 | 2.41 | — | SF Pro Text; store/footer utility link lists (unusually open leading) |
| Caption / Meta | 14px | 400 | 1.43 | -0.224px | SF Pro Text |
| Caption Strong | 14px | 600 | 1.29 | -0.224px | SF Pro Text |
| Button (large) | 18px | 300 | 1.00 | — | SF Pro Text; store hero CTAs (note the rare weight 300) |
| Button (utility) | 14px | 400 | 1.29 | -0.224px | SF Pro Text; nav utility actions |
| Fine Print | 12px | 400 | 1.00 | -0.12px | SF Pro Text |
| Micro Legal | 10px | 400 | 1.30 | -0.08px | SF Pro Text |

### Principles

- **Negative letter-spacing at display sizes.** Every headline at 17px and up carries a slight tracking tighten (`-0.12` → `-0.374px`). This produces the iconic "Apple tight" headline cadence. Never used at 12px or below.
- **Body copy at 17px, not 16px.** Apple breaks the SaaS convention and runs paragraph text at 17px. The extra pixel gives the page an unmistakable "reading, not scanning" pace.
- **Weight 300 is real and rare.** Used deliberately on a handful of large-size reads (store hero CTAs at 18px/300 and the environment page's 24px/300 lead). It's not an accident — it's a light-atmosphere cue reserved for moments where the content should feel airy.
- **Weight 600, not 700, for headlines.** Apple's headlines sit at weight 600. Weight 700 is used sparingly for 21px taglines that need a touch more assertion.
- **Line-height is context-specific.** Display sizes use 1.07–1.19 (tight). Body uses 1.47. Utility link stacks in the footer/store use an unusually relaxed 2.41. This 2.41 is not a bug — it's how the footer's dense link columns breathe.

### Note on Font Substitutes

SF Pro is Apple's proprietary system font. When building off-system:

- Use `system-ui, -apple-system, BlinkMacSystemFont` as the first stack entry — on macOS/iOS/Safari this resolves to the real SF Pro.
- For non-Apple platforms, **Inter** (Google Fonts, variable) is the closest open-source equivalent. Inter at weight 600 with `font-feature-settings: "ss03"` approximates SF Pro's rounded "a" character.
- Nudge `letter-spacing` down by `-0.01em` on display sizes to re-create the Apple tight feel; Inter's default tracking runs slightly wider than SF Pro.
- For body text, tighten line-height by `0.03` (from 1.47 → 1.44) when substituting Inter — Inter's taller x-height needs less leading.

## 4. Component Stylings

### Buttons

**Primary Blue Pill CTA** — the signature Apple action
- Background: Action Blue (`#0066cc`)
- Text: Paper White (`#ffffff`), SF Pro Text 17px, weight 400
- Border: none
- Radius: 980px (full pill — effectively capsule-shaped)
- Padding: approximately 11px 22px
- Default state: solid blue fill
- Focus state: 2px solid Focus Blue (`#0071e3`) outline
- Active state: `transform: scale(0.95)` — a subtle, signature "press" shrink

**Secondary Blue Pill (Ghost)**
- Background: transparent
- Text: Action Blue (`#0066cc`), SF Pro Text 17px, weight 400
- Border: 1px solid Action Blue (`#0066cc`) — this is the extracted token
- Radius: 980px
- Padding: approximately 11px 22px
- Used as the second CTA when two blue pills appear together ("Learn more" / "Buy")

**Dark Utility Button** — global nav actions (Sign In, Bag, language selector)
- Background: Near-Black Ink (`#1d1d1f`)
- Text: Paper White (`#ffffff`), SF Pro Text 14px, weight 400, letter-spacing -0.224px
- Border: 1px solid transparent
- Radius: 8px
- Padding: 8px 15px
- Active state: scale(0.95)
- Focus state: 2px solid Focus Blue outline

**White Capsule Button** — product-card secondary
- Background: Pearl Button (`#fafafc`)
- Text: Muted Ink 80% (`rgba(0, 0, 0, 0.8)`), 14px
- Border: 3px solid Divider 4% (`rgba(0, 0, 0, 0.04)`) — functions more as a soft ring than a visible border
- Radius: 11px
- Padding: 0 14px
- Focus state: 2px solid Focus Blue outline

**Circular Control Chip** — floats over photography
- Background: Soft Chip Gray (`rgba(210, 210, 215, 0.64)`) or 48% variant
- Text/Icon: Near-Black Ink (`#1d1d1f`) or Muted Ink 48%
- Border: none
- Radius: 50%
- Used for carousel controls, close buttons, and in-image controls (product image thumbnails on the iPhone buy page)

### Cards & Containers

**Product Tile — Dark**
- Background: Near-Black Tile 1 (`#272729`) / Tile 2 (`#2a2a2c`) / Tile 3 (`#252527`)
- Text: Paper White (`#ffffff`)
- Border: none
- Radius: 0 (full-bleed tiles have no corner rounding — they touch edges)
- Shadow: none on the tile itself; inner product imagery may carry the one system shadow
- Padding: `~64–80px` vertical, content centered

**Product Tile — Light**
- Background: Pure White (`#ffffff`) or Parchment (`#f5f5f7`)
- Text: Near-Black Ink (`#1d1d1f`)
- Border: none
- Radius: 0
- Padding: matches dark tile

**Utility Card** — store grid, accessories grid
- Background: Pure White (`#ffffff`)
- Border: 1px solid rgba(0, 0, 0, 0.08) — implied from screenshot reading
- Radius: 18px (inferred as Apple's store-surface card radius; the extracted `8px` on `picture` refers to inner image corners)
- Padding: 20–28px
- Shadow: none by default; hovered product image picks up the system shadow via the product render itself, not a CSS shadow on the card

**Product-over-Surface Shadow**
- The single extracted shadow token: `rgba(0, 0, 0, 0.22) 3px 5px 30px 0` — applied to product imagery resting on a surface (iPhone render dropping onto a Parchment tile). Never on text, never on containers.

### Inputs & Forms

Apple's form surfaces are minimal on the analyzed pages. The visible form element is the accessories search input:

- **Search Input**
  - Background: Pure White (`#ffffff`)
  - Text: Near-Black Ink (`#1d1d1f`), SF Pro Text 17px
  - Border: 1px solid `rgba(0, 0, 0, 0.08)`
  - Radius: 980px (a full pill — search is also pill-shaped, matching the CTA grammar)
  - Padding: approximately 12px 20px
  - Leading icon: search glyph at 14px, muted tint

Error and validation states were not surfaced in the analyzed pages.

### Navigation

**Global Nav Bar** — persistent, ultra-thin
- Background: Pure Black (`#000000`) with `rgba(0, 0, 0, 0.8)` on some marketing templates
- Height: ~44px desktop
- Text: Paper White (`#ffffff`), SF Pro Text 12px, weight 400, letter-spacing -0.12px
- Links are quiet, spaced ~20px apart, running edge-to-edge across the top
- Right-aligned cluster: Search, Bag icons — always visible
- Mobile: collapses to hamburger at ~834px; Apple logo centers

**Product Sub-Nav** — surface-specific, sticks below global nav
- Background: rgba(245, 245, 247, 0.8) — Parchment with backdrop blur, creating a frosted-glass effect
- Height: ~52px
- Content on left: product category name ("iPhone", "Store", "Accessories") at 21px weight 600
- Content right: inline nav links at 14px, ending in a persistent blue pill CTA ("Buy") or a utility link ("Shop now")
- Sticks below the global nav; both bars compose a unified header stack

**Footer Nav**
- Background: Parchment (`#f5f5f7`)
- Link columns: SF Pro Text 12px, line-height 2.41 (the relaxed leading makes the dense columns scannable)
- Column headings: SF Pro Text 12px weight 600
- Legal row at the very bottom at 12px/400 in Muted Ink 48%

### Image Treatment

- **Hero imagery**: full-bleed, 21:9 or taller on the homepage; 16:9 on environment and shop pages. Product renders are photographic-realistic, often shot on a tinted surface that becomes the tile background.
- **Product renders**: PNG/WebP with transparency; rest on a surface tile and pick up the system shadow (`rgba(0, 0, 0, 0.22) 3px 5px 30px`).
- **Accessory grid**: square 1:1 crops at 18px radius, light neutral backgrounds, product centered with 20–40px internal padding.
- **Lazy-loading**: responsive `srcset` and `sizes` across all breakpoints; CDN-optimized WebP.
- **No rounded imagery in hero tiles** — images are full-bleed rectangular. Rounding (`8px`, `18px`) appears only on inline card imagery.

### Signature Reusable Components

**Homepage Product Tile** (the single most-repeated component)
- Full-bleed section (100% width)
- Alternates light and dark canvases every row
- Centered stack: product name (SF Pro Display 40px/600) → one-line tagline (SF Pro Display 28px/400) → two blue pill CTAs (Learn more / Buy) → product render resting on the surface with system shadow
- Ten to fifteen tiles compose the full homepage

**Store Product Grid Card**
- White utility card at 18px radius with thin hairline border
- Top: product image (18px radius, `1:1` crop)
- Below: product name (SF Pro Text 17px/600) → price (17px/400) → blue text link "Buy" or "Learn more"
- Used in dense grids (store landing, accessories index)

**Configurator Option Chip** (iPhone 17 Pro buy page)
- Pill-shaped tappable cell at 980px radius
- Border: 1px solid rgba(0, 0, 0, 0.08), upgrades to 2px solid Focus Blue when selected
- Contains: small product thumbnail + label + price delta
- Arranged in a grid of 4–5 options per row

**Floating Sticky Bar** (iPhone 17 Pro buy page, bottom of viewport on scroll)
- Full-width bar at bottom of viewport
- Left: running price total
- Right: primary blue pill CTA "Add to Bag"
- Background: Parchment with backdrop-filter blur

**Environment Hero — Photographic Quote Card**
- Dark photographic canvas (mountain vista at dawn)
- Centered white-text headline at 40px
- Small green "Apple 2030" pictographic logo above the headline
- Single blue pill CTA below

## 5. Layout Principles

### Spacing System

- **Base unit**: 8px. Sub-base values (`2`, `4`, `5`, `6`, `7`) are used for tight typographic adjustments; structural layout snaps to 8/12/16/20/24.
- **Extracted scale**: `2, 4, 5, 6, 7, 8, 9, 9.6, 10, 11, 12, 14, 15, 17, 20 px` — with 8, 12, 17, 20 doing the heavy structural work.
- **Section vertical padding**: approximately 64–80px inside a product tile; tiles stack edge-to-edge with 0 gap (the color change provides the break).
- **Card padding**: 20–28px inside utility grid cards.
- **Button padding**: 8–11px vertical, 15–22px horizontal.
- **Universal rhythm constants**: 17px body line-height multiplier (`~25px` line) and 21px tagline size show up on every analyzed page.

### Grid & Container

- **Max content width**: ~980px on text-heavy sections (environment), ~1440px on product grids (store, accessories), full-bleed for product tiles (homepage).
- **Column patterns**: 3 to 5 column utility card grid on store/accessories; 2-column side-by-side tiles on homepage occasional sections; single-column centered stack on product tile heroes.
- **Gutters**: 20–24px between cards in a utility grid.

### Whitespace Philosophy

Apple's whitespace is the product's pedestal. Every tile begins with at least 64px of air above its headline and 48–64px below. Product renders are never crowded; the nearest content to a product image is at least 40px away. The footer is the only area that breaks this — there, Apple goes deliberately dense to make the full information architecture visible at a glance.

### Border Radius Scale

| Size | Use |
|------|-----|
| 0 | Full-bleed product tiles (no corner rounding) |
| 5px | Inline links when styled as subtle chips (rare) |
| 8px | Dark utility buttons (Sign In, Bag), inline card imagery |
| 11px | White Pearl Button capsules |
| 18px | Utility/store product cards, accessories grid cards |
| 50% | Circular control chips floating over photography |
| 980px | Primary blue pill CTAs, sub-nav buy button, configurator option chips, search input — the signature Apple pill |

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| 0 | No shadow, no border | Full-bleed tiles, global nav, footer |
| 1 | `1px solid rgba(0, 0, 0, 0.08)` | Utility cards, sub-nav frosted-glass separator |
| 2 | Backdrop-filter blur on Parchment 80% | Sub-nav and the iPhone buy floating sticky bar |
| 3 | `rgba(0, 0, 0, 0.22) 3px 5px 30px 0` | Product renders resting on a surface (the only true "shadow" in the system) |

**Shadow philosophy**: Apple uses exactly one drop-shadow, and it is applied to photographic product imagery — never to cards, never to buttons, never to text. Elevation in the UI comes from (a) surface-color change (light tile ↔ dark tile) and (b) backdrop-blur on sticky bars. The single shadow is about giving the product weight, not about UI hierarchy.

### Decorative Depth

- **Atmospheric imagery** on the environment page (photographic vista) supplies mood; no CSS gradient involved.
- **Edge-to-edge tile alternation** creates rhythm without borders or shadows — the color change itself is the divider.
- **Backdrop-filter blur** on sub-nav and sticky bars creates a "floating over content" effect that's functional, not decorative.

## 7. Do's and Don'ts

### Do
- Use Action Blue (`#0066cc`) for every interactive element — links, pill CTAs, focus signals — and nothing else
- Set headlines in SF Pro Display with negative letter-spacing (`-0.28 → -0.374px`) to get the signature "Apple tight" cadence
- Run body copy at 17px, not 16px — the extra pixel defines the brand's reading pace
- Alternate light (`#ffffff` / `#f5f5f7`) and dark (`#272729`) full-bleed tiles for section rhythm
- Reserve the full pill (`980px` radius) for the primary blue CTA and any other element that should read as an "action"
- Apply the single product-shadow (`rgba(0, 0, 0, 0.22) 3px 5px 30px`) only to product renders resting on a surface
- Use `scale(0.95)` as the active/press state on every button — it's the system-wide micro-interaction

### Don't
- Don't introduce a second accent color; every "click me" signal is Action Blue
- Don't add shadows to cards, buttons, or text — shadow is reserved for product imagery
- Don't use gradients as decorative backgrounds; atmosphere comes from photography
- Don't set body copy at weight 500–600; body is always 400, strong inline is 600, display is 600
- Don't round full-bleed tiles — tiles are rectangular and edge-to-edge; the color change is the divider
- Don't tighten line-height below 1.47 for body copy — the editorial leading is part of the brand
- Don't mix radii grammars — use 8px for compact utility, 18px for utility cards, 980px for pills, and nothing in between (except the rare 11px Pearl Button)
- Don't weight-500 anything — Apple's ladder is 300 / 400 / 600 / 700, with 500 deliberately absent

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Small phone | ≤ 419px | Single-column tiles; sub-nav collapses all but category name and primary CTA |
| Phone | 420–640px | Single-column stack; product renders scale to 80% of tile width |
| Large phone | 641–735px | Product tiles transition to tighter padding (48px vertical vs 64px); fine-print wraps |
| Tablet portrait | 736–833px | Global nav collapses to hamburger; sub-nav hides category chips, keeps primary CTA |
| Tablet landscape | 834–1023px | Global nav returns fully expanded; 3-column utility grids become 2-column |
| Small desktop | 1024–1068px | Product tiles use 2/3 width with margin gutters |
| Desktop | 1069–1440px | Full layout; 4–5 column store grids; 1440px content max |
| Wide desktop | ≥ 1441px | Content locks at 1440px, margins absorb extra width |

The extracted breakpoint ladder is `1441 → 1440 → 1070 → 1069 → 1068 → 1044 → 1023 → 834 → 833 → 776 → 736 → 735 → 734 → 641 → 640 → 480 → 419`. The structural ones that matter for agents: 1440px (content lock), 1068px (small-desktop), 833px (tablet landscape switch), 734px (tablet portrait), 640px (phone), 480px (small phone).

### Touch Targets

Minimum 44×44px. Apple's pill CTAs land at ~44×100px (with the full-pill radius making the visible hit area more generous than the label suggests). Circular control chips on photography are 44×44px exactly. Global nav utility links are smaller (~32×80px) — they deliberately sit at a tighter target because they're precision desktop actions, and the mobile hamburger replaces them at ≤ 833px.

### Collapsing Strategy

- **Global nav**: full horizontal link row on desktop → collapses to Apple logo + hamburger + bag icon at 834px and below
- **Sub-nav**: category name + inline links + primary CTA → category name + primary CTA only at mobile; inline links move into a hamburger tray
- **Product tiles**: stack from 2-column to 1-column at 834px; vertical padding tightens from 64px → 48px at small-phone
- **Utility grids** (store, accessories): 5-col → 4-col (1440px) → 3-col (1068px) → 2-col (834px) → 1-col (640px)
- **Hero typography**: Display 56px → 40px at 1068px → 34px at 640px → 28px at 419px

### Image Behavior

- All product imagery uses responsive `srcset` with breakpoint-matched crops
- Hero photography may switch art direction at mobile (e.g., the environment page's vista crops to a taller aspect ratio on mobile, framing the subject differently)
- Product renders maintain their 1:1 or 4:3 aspect ratios across breakpoints; only scale changes
- Lazy-loading is default; the above-fold hero loads eagerly

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA**: Action Blue (`#0066cc`)
- **Focus ring**: Focus Blue (`#0071e3`)
- **Heading + body text (light surface)**: Near-Black Ink (`#1d1d1f`)
- **Text on dark surfaces**: Paper White (`#ffffff`)
- **Background (primary)**: Pure White (`#ffffff`)
- **Background (parchment)**: Parchment (`#f5f5f7`)
- **Dark tile background**: Near-Black Tile 1 (`#272729`)
- **Global nav background**: Pure Black (`#000000`)
- **Hairline border**: `rgba(0, 0, 0, 0.08)`

### Example Component Prompts

- "Create a primary Apple-style pill CTA with Action Blue (`#0066cc`) fill, Paper White text in SF Pro Text 17px weight 400, `980px` border-radius, 11px vertical / 22px horizontal padding, and a scale(0.95) active state."
- "Design a full-bleed product tile with Near-Black Tile 1 (`#272729`) background, a centered SF Pro Display 40px/600 headline in Paper White with `-0.28px` letter-spacing, a 28px subtitle below, two Action Blue pill CTAs, and a product render resting on the surface with the signature shadow `rgba(0, 0, 0, 0.22) 3px 5px 30px`."
- "Build a store utility card with Pure White background, `18px` border-radius, 1px hairline `rgba(0, 0, 0, 0.08)` border, a 1:1 product image at the top, product name in SF Pro Text 17px weight 600 Near-Black Ink, price on the next line in 17px weight 400, and a blue text link underneath."
- "Compose a global nav bar with Pure Black background, Paper White links in SF Pro Text 12px weight 400 with `-0.12px` letter-spacing, centered Apple logo, and a right-aligned search + bag icon cluster."
- "Create a sub-nav strip with Parchment (`#f5f5f7`) at 80% opacity plus backdrop-blur, a category name on the left in SF Pro Display 21px weight 600, inline nav links in the center at 14px, and a persistent Action Blue pill CTA on the right."

### Iteration Guide

When refining existing screens generated with this design system:
1. Focus on ONE component at a time
2. Reference specific color names and hex codes from this document
3. Use natural language descriptions, not CSS values
4. Describe the desired "feel" (photographic, museum-quiet, tile-alternating) alongside specific measurements

### Known Gaps

- Form validation and error states were not surfaced on the analyzed pages; only the neutral search input is documented.
- The homepage's embedded video/player frame uses Pure Black; interior player controls are not documented (they're a platform widget, not a web-design token).
- Some component imagery is dynamic (rotating product hero) and its specific copy varies per surface — component specs name the structure, not the rotating content.
- Dark-mode counterparts for store and accessories utility cards were not surfaced on the analyzed pages; the system documented is the daytime/light-dominant variant Apple ships by default.
