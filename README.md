# HomeRehab - Professional Physical Rehabilitation Services

A modern, responsive landing page for home-based physical rehabilitation services, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌍 **Bilingual Support** - English and Georgian (ქართული)
- 📱 **Mobile-First Design** - Optimized for mobile devices (90% mobile users)
- 🎨 **Modern UI** - Professional design with smooth animations
- ⚡ **Performance** - Optimized with Next.js 14 App Router
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🎯 **Active Navigation** - Highlights current section while scrolling

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and deploy

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Project Structure

```
homerehab/
├── app/
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Specialist.tsx
│   │   ├── WhyUs.tsx
│   │   └── Footer.tsx
│   ├── contexts/        # React contexts
│   │   └── LanguageContext.tsx
│   ├── hooks/           # Custom hooks
│   │   ├── useActiveSection.ts
│   │   └── useReducedMotion.ts
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/              # Static assets
│   ├── logo.png
│   ├── cover.png
│   └── doctor.jpeg
└── package.json
```

## Sections

- **Hero** - Main landing section with call-to-action
- **Specialist** - Showcase of rehabilitation specialists
- **Why Us** - Key benefits and statistics
- **Contact** - Footer with contact information

## Language Support

The site supports two languages:
- English (EN)
- Georgian (KA/ქართული)

Language preference is saved in localStorage and persists across sessions.

## Environment Variables

No environment variables required for basic deployment.

## License

Private project - All rights reserved.
