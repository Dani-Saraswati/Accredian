# Accredian Enterprise — Partial Clone

A pixel-faithful recreation of [enterprise.accredian.com](https://enterprise.accredian.com/) built with **Next.js 16 App Router**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js ≥ 18
- pnpm (`npm i -g pnpm`)

### Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
# → http://localhost:3000
```

### Production Build

```bash
pnpm build
pnpm start
```

---

## 🏗️ Approach Taken

### Architecture
- **Next.js App Router** with `app/` directory structure
- **Server Component** root layout; **Client Components** only where interactivity is needed (modals, counters, carousels)
- **API Route** at `/api/leads` handles form submissions (POST) and lead retrieval (GET)

### Page Sections
| Section | Component | Notes |
|---|---|---|
| Navigation | `Navbar.tsx` | Sticky, scroll-aware active state, mobile drawer |
| Hero | `Hero.tsx` | Animated headline, dual images |
| Stats | `StatsBar.tsx` | Animated counters on scroll |
| Client Logos | `LogoMarquee.tsx` | Static grid with hover effects |
| Accredian Edge | `WhyAccredian.tsx` | Zigzag layout with 7 feature nodes |
| Programs | `Programs.tsx` | Domain cards, course segments, audience matrix |
| CAT Framework | `CATFramework.tsx` | Wave SVG path with 3 concept nodes |
| How It Works | `HowItWorks.tsx` | 3-step process with connector line |
| FAQ | `FAQ.tsx` | Tabbed accordion by category |
| Testimonials | `Testimonials.tsx` | Auto-rotating carousel |
| Footer | `Footer.tsx` | Links, address, social icons |
| Enquire Modal | `EnquireModal.tsx` | Full lead capture form → API |

### Styling Strategy
- Tailwind CSS v4 with custom CSS variables for the design system
- All color tokens defined in `app/globals.css` under `:root`
- `--accent-blue`, `--text-primary`, `--text-secondary` used consistently

---

## 🤖 AI Usage

**Claude (Anthropic)** was used extensively:

- **Initial scaffold**: Generated all section components and the overall page structure
- **CSS variable system**: Designed the `:root` token architecture for a consistent light theme
- **Framer Motion animations**: `whileInView`, staggered children, `AnimatePresence` transitions
- **EnquireModal**: Full form with validation, dropdowns, and success state
- **API route**: Lead capture POST/GET handlers with in-memory store

**Manually reviewed and improved**:
- Fixed a critical bug where the CSS variable file was using dark-theme colors (`#050A14` base, `#F1F5F9` text-primary) while all components expected a white/light background — caused near-invisible text across the entire site
- Wired the modal's `handleSubmit` to actually call `/api/leads` instead of a simulated delay
- Validated image `remotePatterns` in `next.config.mjs` match all external image hostnames used
- Reviewed and cleaned up Tailwind class redundancies

---

## ✅ What Works

- ✅ All 10 page sections fully rendered
- ✅ Responsive (mobile + desktop)
- ✅ Sticky navigation with scroll-based active section tracking
- ✅ Animated counters, carousels, scroll-reveal animations
- ✅ Enquire Now modal with form validation and API submission
- ✅ Lead capture API (`POST /api/leads`, `GET /api/leads`)
- ✅ Mobile hamburger menu with full-screen drawer

---

## 💡 Improvements with More Time

1. **Persistent lead storage** — Connect `/api/leads` to Supabase or PlanetScale instead of in-memory
2. **Email notifications** — Send confirmation email on lead submission via Resend/SendGrid
3. **SEO** — Add `generateMetadata` per section, Open Graph images
4. **Dark mode** — The CSS token system is already set up for it; just needs a toggle
5. **Testing** — Add Playwright e2e tests for the form flow
6. **CMS integration** — Pull programs, testimonials from Contentful/Sanity for easy content updates
7. **Analytics** — Track modal opens and form completions with Vercel Analytics events

---

## 🔗 Submission

- **Live URL**: *(Vercel deployment URL here)*
- **GitHub**: *(Repository URL here)*
