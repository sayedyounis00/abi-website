---
name: ABI - Arbeit.Bildung.International
description: Institutional medical & academic recruitment portal connecting international talent with Germany
colors:
  primary: "#0d9488"
  primary-hover: "#0f766e"
  secondary: "#0284c7"
  secondary-hover: "#0369a1"
  accent: "#0284c7"
  neutral-bg: "#f8fafc"
  neutral-fg: "#0f172a"
  card-bg: "#ffffff"
  border: "#e2e8f0"
  dark-bg: "#0b0f17"
  dark-fg: "#f1f5f9"
  dark-card: "#151d2a"
  dark-border: "#1e293b"
typography:
  display:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "Geist, system-ui, -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.05em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-hero:
    backgroundColor: "{colors.primary}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "{colors.card-bg}"
    textColor: "{colors.neutral-fg}"
    rounded: "{rounded.lg}"
    padding: "16px 32px"
  card-service:
    backgroundColor: "{colors.card-bg}"
    textColor: "{colors.neutral-fg}"
    rounded: "{rounded.xl}"
    padding: "32px"
---

# Design System: ABI - Arbeit.Bildung.International

## Overview

**Creative North Star: "The Sovereign Harbor"**

ABI's visual language embodies the quiet reassurance, institutional clarity, and unwavering precision of a safe, authoritative port of entry. Moving to Germany as a physician, nurse, engineer, or academic scholar is a monumental, high-stakes life decision surrounded by legal and bureaucratic uncertainty. The design system therefore rejects flashiness, corporate gimmicks, and tech hyperactivity in favor of structured architectural grounding, balanced white space, and luminous maritime accents.

The interface unites two worlds: the civic solidity of the German public and institutional landscape, and the warm, accessible clarity required by international professionals reviewing pathways in a non-native language. High-contrast slate typography is illuminated by alpine spruce teal and deep horizon sky blue, signalling forward movement, legal security, and accredited prestige.

**Key Characteristics:**
- **Institutional Reliability:** Clean, spacious structural grid with balanced hierarchy that instills immediate confidence in medical directors and foreign applicants alike.
- **Luminous Layering:** Light slate and dark void backdrops softened by gentle glassmorphic navigation bars and ambient teal-sky background glows.
- **Directional Continuity:** Clear progressive steps, pill badges, and dual-gradient call-to-actions that anchor the eye without visual noise.

## Colors

The palette balances authoritative German institutional slates with deep, luminous spruce teal, maritime sky accents, and domain-specific semantic colors, strictly calibrated for WCAG AA/AAA legibility.

### Primary & Action Roles
- **Alpine Spruce Teal** (#0f766e / #0d9488): The primary brand anchor. Used for primary action buttons, key brand kickers, interactive icon backplates, and applicant track actions. Communicates clinical health, precision, and dependable guidance. Contrast on white: 5.4:1 (AA).
- **Deep Alpine Spruce** (#115e59): Used for active/hover states and high-contrast text on light teal backgrounds. Contrast on white: 7.5:1 (AAA).

### Secondary & Institutional Roles
- **Deep Horizon Sky** (#0284c7 / #0369a1): The maritime horizon tone. Used for hospital/employer track selection, legal verification badges, and official decree states. Contrast on white: 5.2:1 (AA).
- **Deep Navy Sky** (#075985): High-contrast text on light sky containers. Contrast on white: 6.9:1 (AAA).

### Domain Semantic Roles & The Sovereign Harbor Harmonization
To prevent visual fragmentation and retain an authoritative civic identity, the entire UI is strictly unified around:
- **Alpine Spruce Teal** (`#0f766e` / `#0d9488`): Primary actions, applicant track, medical and core qualification milestones (`bg-teal-50 text-teal-800 border-teal-200/80`). Contrast on white: > 5.4:1.
- **Maritime Horizon Sky** (`#0284c7` / `#0369a1`): Employer track, institutional verification, onboarding milestones (`bg-sky-50 text-sky-800 border-sky-200/80`). Contrast on white: > 5.2:1.
- **Disparate rainbow colors (amber, indigo, purple)** are explicitly eliminated to maintain cohesive institutional aesthetics and clear optical hierarchy.

### Neutral Surfaces & High-Contrast Typography
- **Crisp Slate Paper** (`#f8fafc` / `bg-slate-50`): Clean, low-glare canvas background for light mode.
- **Abyssal Ink** (`#0f172a` / `text-slate-900`): Deep slate black used for primary high-contrast headlines and section titles. Contrast on white: 15.8:1 (AAA).
- **Legible Charcoal Body & Subtext** (`#334155` / `text-slate-700`): Primary descriptive copy, narrative paragraphs, and card subtext. Guaranteed crisp readability without washing out on high-DPI or sunlight glare. Contrast on white: 7.5:1 (AAA).
- **Emphasized Item Lists & Deliverables** (`#1e293b` / `text-slate-800 font-medium`): Phase deliverables, bullet items, and key specifications. Contrast on white: 11.8:1 (AAA).
- **Secondary Footnotes & Disclaimers** (`#475569` / `text-slate-600 font-medium`): Timestamps, DSGVO notes, and copyright text. Contrast on white: 5.8:1 (AA).
- **Accessible Form Placeholders** (`#64748b` / `placeholder:text-slate-500`): Replaced faint standard `text-slate-400` (~2.8:1) with compliant slate placeholder achieving 4.6:1 (AA).
- **Pure Card White** (`#ffffff`): Elevated foreground surface for cards, modals, and container shells.
- **Border Slate** (`#e2e8f0` / `border-slate-200`): Subtle 1px dividing boundary separating structural modules.

### Named Rules
**The Gradient Anchor Rule.** Linear gradients (`linear-gradient(135deg, #0d9488 0%, #0284c7 100%)`) are strictly reserved for primary CTA trigger fills, key header title accents, and signature banners. Background body canvases must never be flooded with full gradients.

**The Palette Cohesion Rule.** All tracks, badges, and phase milestones alternate strictly between Alpine Spruce Teal and Maritime Sky, eliminating visual distraction and reinforcing institutional trust.

**The Contrast Floor Rule.** All subtext and body descriptions must use `text-slate-700` or darker (contrast ratio $\ge 7.0:1$), and all input placeholders must use `placeholder:text-slate-500` ($\ge 4.5:1$). No subtexts may fall below WCAG AA thresholds.

## Typography

**Display Font:** Geist (fallback: system-ui, -apple-system, sans-serif)  
**Body Font:** Geist (fallback: system-ui, -apple-system, sans-serif)  
**Label/Mono Font:** Geist Mono (fallback: monospace)

**Character:** Modern neo-grotesque precision engineered for high legibility on digital screens. The geometric purity and open counters ensure effortless readability across diverse screen sizes and non-native German reading contexts.

### Hierarchy
- **Display** (ExtraBold 800, `clamp(2.25rem, 5vw, 3.75rem)`, line-height 1.15, letter-spacing -0.025em): Used for the central Hero statement (`Arbeit. Bildung. International`).
- **Headline** (ExtraBold 800, `clamp(1.875rem, 3.5vw, 3rem)`, line-height 1.2, letter-spacing -0.02em): Section headers (`Unsere Leistungen`, `Über uns`).
- **Title** (Bold 700, `1.25rem` / `20px` to `1.5rem` / `24px`, line-height 1.35, letter-spacing -0.01em): Service card headers and key feature titles.
- **Body** (Regular 400, `1rem` / `16px` to `1.125rem` / `18px`, line-height 1.625, letter-spacing normal): Descriptive paragraphs, service details, and institutional copy. Constrained to ≤65ch max line length.
- **Label** (Bold 700, `0.75rem` / `12px` to `0.875rem` / `14px`, line-height 1.5, letter-spacing 0.05em, uppercase): Category kickers (`WAS WIR BIETEN`, `WER WIR SIND`), pill tags, and stat labels.

### Named Rules
**The Scannable Credibility Rule.** Non-native German speakers evaluating career pathways require generous line-heights (1.625) and constrained paragraph line lengths (≤65ch) to maintain effortless comprehension and eliminate bureaucratic intimidation.

## Layout

- **Container Width:** Standard maximum constraint of 1280px (`max-w-7xl`) centered with responsive gutter padding (`px-4 sm:px-6 lg:px-8`).
- **Vertical Rhythm:** Generous section breathing room (`py-16` / `64px` on mobile up to `py-28` / `112px` on desktop) providing clear mental boundaries between distinct service phases.
- **Grid Systems:**
  - 12-column asymmetric layout for hero introduction (7 cols copy, 5 cols asset grid).
  - 2-column balanced grid (`md:grid-cols-2`, gap 32px) for detailed service pathway cards.
  - 3-column metric grid (`md:grid-cols-3`, gap 24px) for numerical credibility metrics.
- **Fluid Breakpoints:** Standard responsive thresholds (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).

## Elevation & Depth

Surfaces rely on luminous layered depth rather than dense skeletal drop shadows. Visual separation is created by tonal contrast, frosted glassmorphism, and selective ambient backdrops.

### Shadow Vocabulary
- **Ambient Glow** (`w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none`): Soft diffuse colored atmospheric light sitting behind heroes and dark feature sections.
- **Interactive Card Lift** (`box-shadow: 0 20px 25px -5px rgba(13, 148, 136, 0.1), 0 8px 10px -6px rgba(13, 148, 136, 0.1); transform: translateY(-4px);`): Dynamic response when hovering over service modules and interactive cards.
- **Button Buoyancy** (`shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5`): Tactile lift for primary call-to-actions.

### Named Rules
**The Kinetic Lift Rule.** Cards and buttons are flush or cleanly hair-lined at rest. Elevated lift and luminous shadows emerge purely in response to user intent (hover, focus-visible).

## Shapes

The form language balances approachable human curves with architectural discipline:
- **Pill Geometry (9999px / `rounded-full`):** Category eyebrow badges, navigation contact buttons, and status chips.
- **Module Enclosures (24px / `rounded-3xl`):** Major service cards and newsletter callout panels.
- **Action Buttons & Media Tiles (16px / `rounded-2xl`):** Primary hero buttons, stat cards, and media placeholder frames.
- **Form Fields (12px / `rounded-xl`):** Input fields and secondary action controls.
- **Hairline Borders:** Consistent 1px subtle strokes (`border-slate-200` in light, `border-slate-800` in dark) defining containers without visual clutter.

## Components

### Buttons
- **Shape:** Pill (`rounded-full` / 9999px) for header CTA; Squircle (`rounded-2xl` / 16px) for hero primary CTA.
- **Primary:** Dual-gradient fill (`linear-gradient(135deg, #0d9488 0%, #0284c7 100%)`), white bold text, internal padding `px-5 py-2.5` (header) or `px-8 py-4` (hero).
- **Hover / Focus:** Hover scale `scale-[1.02]`, translateY `-2px`, glowing teal shadow `shadow-teal-500/25`.
- **Secondary / Ghost:** White/slate-800 background, 1px slate-200 border, slate-700/slate-200 text, hover background shift to slate-50/slate-700.

### Cards / Containers
- **Corner Style:** `rounded-3xl` (24px).
- **Background:** Crisp pure white (`#ffffff`) or nocturnal slate-900 (`#0f172a`), bordered by 1px slate-200/slate-800.
- **Shadow Strategy:** Flush at rest; `translateY(-4px)` with teal-tinted ambient shadow on hover.
- **Internal Padding:** 32px (`p-8`).

### Navigation
- **Style:** Sticky top header with glassmorphic backdrop (`rgba(255, 255, 255, 0.85)` / `backdrop-filter: blur(12px)`).
- **Typography:** Medium weight 14px (`text-sm font-medium`), transition from slate-700 to primary spruce teal on hover.
- **Height:** 80px (`h-20`) fixed vertical space with flex alignment.

### Inputs / Fields
- **Style:** 12px radius (`rounded-xl`), 16px padding (`px-5 py-4`), pure white background, high-contrast slate placeholder (`placeholder:text-slate-500`, WCAG AA compliant).
- **Focus:** 2px high-contrast ring with zero outline displacement.

### Category Eyebrow Badges
- **Style:** Pill shape (`rounded-full`), `px-4 py-1.5`, 12px bold uppercase (`text-xs font-bold uppercase tracking-wider`).
- **Color:** 10% translucent teal background (`bg-teal-500/10`), 20% teal border (`border border-teal-500/20`), dark teal text (`text-teal-700` / `dark:text-teal-300`).

## Do's and Don'ts

### Do:
- **Do** preserve the dual-audience balance: make navigation and service overviews equally scannable for an international medical graduate and a German hospital administrator.
- **Do** pair every critical interactive card with clear, tactile feedback (1px border brightening, -4px translation, soft tinted teal shadow).
- **Do** maintain a strict 65ch maximum line length on body copy to ensure high reading comprehension for non-native German speakers.
- **Do** use authentic iconography and real document/institutional cues rather than decorative visual filler.

### Don't:
- **Don't** use generic, cheesy staffing stock imagery (e.g. forced thumbs-up photos, cliché handshakes, artificial smiles).
- **Don't** flood body canvas areas with full background gradients or harsh multi-stop rainbow ramps.
- **Don't** apply heavy, murky, uncolored black drop shadows (`box-shadow: 0 10px 30px #000000`).
- **Don't** sacrifice German institutional seriousness for trendy, hyper-playful startup gimmicks.
