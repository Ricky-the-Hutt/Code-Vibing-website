# Ricardo Lopes - Personal Website

A minimalist personal website and blog built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ Clean, minimalist design
- ✅ Blog with markdown-based CMS
- ✅ Search functionality
- ✅ Social media integration
- ✅ CV download page
- ✅ Dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env.local` file (copy from `.env.example`):
```bash
cp .env.example .env.local
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **PostHog** - Analytics

---

**Ricardo Lopes**

## Troubleshooting

### Vercel Deployment Not Triggering
If pushing to GitHub does not trigger a Vercel build automatically:
1.  **Check Vercel Project Settings**: Ensure the project is connected to the correct GitHub repository (`Ricky-the-Hutt/Code-Vibing-website`).
2.  **Verify Git Integration**: In Vercel, go to Settings > Git. Ensure "Deploy Hooks" are enabled (or simply that the connection is active).
3.  **Manual Redeploy**: Go to Deployments > [Latest Deployment] > ... > Redeploy.
4.  **Check Ignored Build Step**: If `vercel.json` contains a `git.ignore` command, ensure it's not falsely returning success (skipping build).

