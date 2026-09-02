# Edwin Kibira Isuzu Sales — Project Handoff Notes
Last updated: 2026-08-26

## 🎯 Goal
Become **#1 in the motor industry in Kenya** via a world-class dealership website.

---

## ✅ What Has Been Done

### Phase 1 — Foundation & SEO
- SEO schema markup added
- Newsletter subscription feature
- Showroom map pins
- Privacy Policy & Terms pages
- FAQ page

### Phase 2 — UX & Sales Tools
- **Vehicle Comparison Tool** (`/compare`)
- **Fleet Sales page** (`/fleet-sales`) with contact form
- **Live Chat widget** (`src/components/layout/LiveChat.tsx`)
- **Favourites system** (`/favourites`) with heart icon in Navbar
- **Google Reviews integration** (on homepage)

### Phase 3 — Blog / Content Hub
- Blog architecture: `src/app/blog/page.tsx` + `src/app/blog/[slug]/page.tsx`
- Blog data: `src/data/posts.ts`
- `@tailwindcss/typography` plugin installed for article prose styling
- **3 real articles sourced from isuzu.co.ke/newsroom:**
  1. Official Launch of the Locally Assembled mu-X SUV (Feb 2026)
  2. Lake Zone Construction KSh 57M Fleet Deal (June 2026)
  3. 2026 D-Max New 5-Year/120,000km Warranty Unveiled (July 2026)
- Blog links in Navbar + Footer (desktop & mobile)
- Source attribution links (`isuzu.co.ke`) on each article

### Removed Features
- ~~Trade-In Estimator~~ — removed per user request

---

## 🚧 What Still Needs to Be Done

### Priority Queue (in order)
1. **🔴 Fix Blog 404 error** — User reported 404 on blog. Debug cause. May be a Vercel deployment routing issue or a Next.js 15+ async params type problem in the `[slug]` page. May need to change `params: { slug: string }` to `params: Promise<{ slug: string }>` and `await params`.

2. **WhatsApp Business Catalogue Integration** — Add a direct link/button that opens the WhatsApp Business product catalogue for browsing vehicles via WhatsApp.

3. **YouTube Video Embeds** — Add a video gallery section or embed Isuzu East Africa YouTube content (e.g., mu-X launch video). Source: youtube.com/@IsuzuEastAfrica.

4. **Price Alert / Notify Me Feature** — Allow users to subscribe to price drop or availability alerts for specific models. Requires email input + backend (or integration with Mailchimp/Resend).

---

## 🔗 Key URLs & Resources
- **GitHub:** https://github.com/morrisaspiretech/edwinkibiraisuzusales
- **Official Isuzu EA Newsroom:** https://www.isuzu.co.ke/newsroom/
- **Isuzu YouTube:** https://www.youtube.com/@IsuzuEastAfrica

---

## 🏗️ Architecture Overview
- **Framework:** Next.js (App Router)
- **Monorepo:** Turborepo — apps: `website`, `admin-dashboard`; packages: `database` (Prisma ORM)
- **Styling:** Tailwind CSS + `@tailwindcss/typography`
- **Brand Colors:** Primary `#1a1a1a`, Secondary/Accent `#D62B2B`
- **Key Data Files:**
  - `apps/website/src/data/vehicles.ts` — Vehicle model definitions
  - `apps/website/src/data/posts.ts` — Blog articles
- **Public Images:** `apps/website/public/vehicles/` — local vehicle images

---

## 🐛 Known Issues
- Blog pages returning 404 on the deployed site. Suspect: Next.js 15 async params type issue in `apps/website/src/app/blog/[slug]/page.tsx`. Fix: change params type to `Promise<{slug:string}>` and `await params`.

---

## 📋 How to Resume
1. Open the project: `c:\Users\morri\Music\edwinisuzusales`
2. Run dev server: `npm run dev` (from repo root)
3. Tell the agent: **"Continue from the HANDOFF notes in `.agents/HANDOFF.md`"**
4. Start with fixing the blog 404, then move to WhatsApp catalogue integration.
