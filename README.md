# Accredian 

A pixel-faithful recreation of [enterprise.accredian.com](https://enterprise.accredian.com/) built with **Next.js 16 App Router**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js ≥ 18
- pnpm (`npm i -g pnpm`)

### Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm dev
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
