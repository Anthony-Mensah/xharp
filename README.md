# Xharp Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## My Approach

I structured the project using the Next.js App Router to take advantage of server and client components although this project is client side only.  
For styling, I used Tailwind CSS and framer motion presets to create reusable animations for fade‑in effects.  
I focused on keeping components modular and semantic so they can scale easily.

## Challenges Faced

- **Git conflicts with README.md**: When pushing to GitHub, I ran into non‑fast‑forward errors because both local and remote had different README commits.
- **Rebase confusion**: I got stuck in a rebase state where files seemed to disappear.
- **Client vs Server components**: Adding `"use client"` everywhere caused metadata errors in Next.js.
- Couldn’t find some of the required images for the project on figma.
- Had unnecessary imports in some files which made the codebase less clean.
- Needed to improve SEO by adding metadata but had to figure out the correct Next.js approach.

## How I Solved Them

- For Git conflicts, I used `git pull --rebase` and resolved the README conflict manually.
- When rebase got stuck, I checked `git status` and used `git rebase --continue` or `git rebase --abort` to recover.
- For Next.js client components, I only added `"use client"` to top‑level interactive components instead of layouts/pages, which solved the metadata issue.
- Reused available images where possible and substituted missing ones with suitable alternatives to keep the project consistent.
- Removed unnecessary imports to keep the codebase clean, reduce warnings, and improve readability.
- Added metadata using Next.js’s built‑in metadata configuration in the App Router to improve SEO and ensure pages have proper titles and descriptions.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
