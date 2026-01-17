# Clouth - Custom Apparel Platform

> A composable Next.js commerce experience for designing, measuring, and ordering bespoke garments end-to-end.

## Table of Contents

1. [Overview](#overview)
2. [Product Highlights](#product-highlights)
3. [Architecture at a Glance](#architecture-at-a-glance)
4. [Core Features](#core-features)
5. [Technology Stack](#technology-stack)
6. [Directory Structure](#directory-structure)
7. [Getting Started](#getting-started)
8. [Environment Variables](#environment-variables)
9. [Available Scripts](#available-scripts)
10. [Integrations](#integrations)
11. [Testing & Quality](#testing--quality)
12. [Troubleshooting](#troubleshooting)
13. [Contributing](#contributing)
14. [License](#license)

## Overview

Clouth is a full-stack custom apparel experience built on the Next.js App Router. It combines an immersive storefront, a modular shirt customization studio, measurement capture flows, and a multi-step checkout with dynamic pricing, coupons, and dual payment options (PayPal and Cash on Delivery). Authentication, persistence, and transactional messaging are powered by Clerk, MongoDB, and React Email/Nodemailer, while assets are served from Cloudinary.

## Product Highlights

- **Immersive storefront** - Hero, product showcases, sponsor reels, and testimonials managed through composable React sections in `app/components`.
- **Custom shirt studio** - Layered garment rendering, PDF spec export (via `jspdf`), and persistence through `/api/shirt` and MongoDB.
- **Measurement-first flow** - Dedicated forms for body and shirt measurements (male and female variants) ensure accurate fits before checkout.
- **Smart cart and checkout** - Local persistence, selective checkout (`selectedCartItems`), coupon validation, payment choice, and order creation.
- **Multi-channel payments** - Pre-built PayPal client integration plus Stripe server setup for future card processing.
- **Headless commerce APIs** - `/api/cart`, `/api/shirt`, and Clerk webhooks orchestrate carts, inventory, and user lifecycle events.
- **Operational add-ons** - Preloaders, discount popups, toast systems, and client success sliders drive engagement from first visit onward.

## Architecture at a Glance

- **Framework** - Next.js 15 App Router with client/server components, colocated API routes, and TypeScript across the stack.
- **State Management** - Local React state for flows, Jotai atoms for wishlist/cart counters, and localStorage syncing for persistence.
- **Design System** - Tailwind CSS layered with Radix UI primitives and custom components under `components/ui`.
- **Data Layer** - MongoDB via Mongoose (`lib/database`) with domain-specific action modules grouped by garment feature.
- **File Storage** - Cloudinary for uploading layered garment assets (collars, cuffs, fabrics, etc.).
- **Payments and Auth** - Clerk for identity, Stripe SDK stub for server-side intents, and a custom PayPal button for client-side capture.
- **Notifications** - `react-toast`, `react-toastify`, `sonner`, and in-app popups for transactional and marketing messages.

## Core Features

### Storefront and Marketing

- Landing page (`app/page.tsx`) orchestrates the hero, shirt collections, diversity shout-outs, client wall, preloader, and discount popup.
- Sponsor and testimonial reels (`app/components/sponsors`, `ClientsListComponent`) highlight partnerships and social proof.
- Global navbar/topbar components manage responsive navigation, account access, and cart drawer triggers.

### Customization Studio

- `app/form-new` and `app/components/ShirtCustomise/**` expose a step-by-step designer with overlapping SVG/PNG layers.
- Users can lock in collar, cuff, sleeve, pocket, fit, button, and body styles defined under `app/utils/data/data`.
- A PDF summary is generated via `jsPDF`, and finalized specs are persisted through `/api/shirt` and `createShirt` actions, which also seed the cart.

### Measurement Capture and Fit Profiles

- `app/components/bodyMeasurement`, `femaleBodyMeasurement`, and `shirtMeasurement` capture granular metrics (neck, chest, hips, yoke, etc.).
- Pages such as `app/measurement`, `app/form`, and `app/form-new` guide users through measurement entry before redirecting to customization or checkout.

### Cart, Promotions and Checkout

- Cart UI (`app/cart/page.tsx`) enriches each line item with live shirt data, composite imagery, quantity controls, and measurement summaries.
- Coupons are validated through `checkCouponExists`, and only selected cart items travel to checkout via `selectedCartItems` in localStorage.
- Checkout (`app/checkout/page.tsx`) implements a three-step wizard (Delivery, Coupon, Payment), address persistence, and Clerk-aware order creation.

### Payments and Order Lifecycle

- PayPal integration (`app/checkout/paypal/page.tsx` plus `components/PayPal/PayPalButton.tsx`) mounts the PayPal SDK with the configured client ID.
- Cash-on-delivery completes by creating an order via `createOrder` and redirecting to `app/order/[orderId]`.
- Order history and detail pages under `app/order/history` and `app/order/[orderId]` let customers revisit purchases, download specs, or reorder.

### Authentication and Accounts

- Clerk wraps the entire app in `app/layout.tsx`, enabling `useUser`, `useSignIn`, and `useSignUp` wherever needed.
- `AccountPopUp` centralizes login/sign-up modals without forcing navigation, and Clerk webhooks (`app/api/webhooks/clerk`) keep Mongo users in sync.

### Notifications and Engagement

- Preloader and `DiscountPopup` drive first-visit engagement, tracked via `localStorage` (`visited` flag in `app/page.tsx`).
- Toast systems (`react-toast`, `react-toastify`, `sonner`) surface success/error states across cart, checkout, and measurement flows.

### Content and Admin Surface

- `lib/database/actions/admin/ShirtArea/**` contains CRUD operations for every garment attribute (fabric, color, collar, cuffs, etc.) with Cloudinary uploads.
- `lib/emails` holds React Email templates ready for transactional messaging through Nodemailer or EmailJS.

## Technology Stack

| Layer            | Main Libraries / Services |
|------------------|---------------------------|
| Framework        | Next.js 15 (App Router), React 19 |
| Styling and UI   | Tailwind CSS, Material Tailwind, Radix UI, custom `components/ui` kit, Framer Motion, GSAP |
| State and Data   | React state, Jotai, React Query (selected flows), SWR |
| Forms and UX     | React Hook Form, react-error-boundary, react-fast-marquee, react-slick |
| Auth             | Clerk (client and server SDK, webhooks) |
| Payments         | PayPal JS SDK, Stripe SDK (server) |
| Storage and Assets | Cloudinary (image layers), localStorage (cart selections) |
| Backend          | Next.js Route Handlers, Mongoose, Nodemailer, EmailJS, Svix (Clerk webhooks) |
| Tooling          | TypeScript, ESLint, PostCSS, Tailwind merge utilities |

## Directory Structure

```
app/
├── components/             # Reusable storefront and UI building blocks
│   ├── Navbar, cartDrawer, searchModal, PayPal, Preloader, etc.
│   └── ui/                 # Button, card, dialog, sheet, tabs built on Radix
├── cart/, checkout/, order/, history/  # Commerce flows
├── form/, form-new/, measurement/, monogram/  # Customization journeys
├── api/                    # Route handlers (cart, shirt, webhooks, etc.)
├── accessories/, faq/, fabric/, gender/, ...  # Marketing and discovery pages
└── utils/                  # Static data sources and atoms
components/ui/              # Shared UI primitives for legacy routes
hooks/                      # Domain hooks (monogram details, use-toast)
lib/
├── database/               # Mongo connection, models, action modules
├── stripe.ts               # Stripe SDK bootstrap
├── utils.ts                # Tailwind-friendly class helpers
└── emails/                 # React Email templates
public/                     # Static assets (popups, logos, etc.)
tailwind.config.ts          # Design tokens and plugins
```

## Getting Started

1. **Prerequisites**
   - Node.js 18.18+ (Next.js 15 requirement)
   - npm 10+ or pnpm 9+
   - MongoDB instance and Cloudinary account
2. **Clone the repository**
   ```bash
   git clone https://github.com/KGEC-DEV-TEAM-2025/stitch_my_clothes.git
   cd stitch_my_clothes
   ```
3. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```
4. **Configure environment variables** - see [Environment Variables](#environment-variables) and create `.env.local`.
5. **Run the development server**
   ```bash
   npm run dev
   ```
   The app is served at http://localhost:3000 with Hot Module Replacement. Clerk must be configured for local domains.
6. **Optional checks**
   ```bash
   npm run lint
   npm run build && npm start   # Production preview
   ```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `MONGODB_URL` | Connection string for the primary MongoDB cluster. |
| `STRIPE_API_KEY` | Secret key for Stripe server-side API calls (used in `lib/stripe.ts`). |
| `NEXT_PUBLIC_PAYPAL_CLIENT_ID` | PayPal REST client ID exposed to the browser for SDK initialization. |
| `CLERK_SECRET_KEY` | Server-side Clerk key for webhooks and backend operations. |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Public key for Clerk's front-end SDK. |
| `WEBHOOK_SECRET` | Signing secret used to validate Clerk webhook payloads. |
| `CLOUDINARY_NAME` | Cloudinary cloud name for asset uploads. |
| `CLOUNDINARY_API_KEY` | Cloudinary API key (note the spelling matches the existing code). |
| `CLOUDINARY_SECRET` | Cloudinary API secret. |
| `NEXT_PUBLIC_CLERK_*` (optional) | Additional Clerk config such as domain, proxy URL, redirect URLs, etc. |

> Store secrets in `.env.local` (ignored by git). When deploying to Vercel, add them under Project Settings - Environment Variables.

## Available Scripts

| Script        | Description |
|---------------|-------------|
| `npm run dev` | Starts Next.js in development mode with Turbopack. |
| `npm run build` | Creates an optimized production build. |
| `npm run start` | Serves the production build. |
| `npm run lint` | Runs ESLint (skipped automatically during CI builds per `next.config.ts`). |

## Integrations

- **Clerk** - Authentication, user management, and session handling via `ClerkProvider` plus `/api/webhooks/clerk` to mirror users in MongoDB.
- **MongoDB + Mongoose** - Persistent storage for users, shirts, carts, orders, coupons, and measurement presets.
- **Cloudinary** - Handles upload/storage of garment layer images across all admin action modules.
- **Stripe** - Server-side SDK is ready for card payments or invoicing workflows (`lib/stripe.ts`).
- **PayPal** - Client-side SDK handles express checkout for the cart total, with success callbacks routed to order history.
- **EmailJS / Nodemailer / React Email** - Transactional messaging templates for order confirmations or measurement reminders.

## Testing & Quality

- Runtime safeguards rely on TypeScript types, React Error Boundaries (`app/components/ErrorFallback`), and defensive localStorage parsing.
- ESLint plus TypeScript guard against regressions; consider extending with Playwright/Cypress and Vitest for UI and domain logic.
- Critical flows to cover first: shirt creation (`/api/shirt`), cart mutations (`/api/cart`), coupon validation, and PayPal success callbacks.

## Troubleshooting

- **Authentication mismatch** - Ensure Clerk keys are configured for the active domain (localhost vs production) and webhooks use the correct `WEBHOOK_SECRET`.
- **Cloudinary upload failures** - Confirm `CLOUDINARY_NAME`, `CLOUNDINARY_API_KEY`, and `CLOUDINARY_SECRET` are present; watch for the intentional spelling in env names.
- **Cart not syncing** - Clear `localStorage` (keys `cartItems`, `selectedCartItems`, `wishlistCount`) and re-authenticate; the cart API requires `clerkId`.
- **PayPal SDK not loading** - Check that `NEXT_PUBLIC_PAYPAL_CLIENT_ID` is set and no ad blockers are preventing `www.paypal.com` scripts.
- **Build warnings** - ESLint is disabled during builds, but you should run `npm run lint` locally to catch issues before deployment.

## Contributing

1. Fork the repository and create a feature branch (`git checkout -b feature/amazing`).
2. Keep changes scoped; update or add tests where applicable.
3. Run `npm run lint` and `npm run build` before opening a pull request.
4. Use conventional commit messages when possible (for example, `feat: add measurement validator`).

## License

This project is licensed under the ISC License. See `package.json` for details.
