import type { ExperienceCaseStudy } from "../../types";
import { stitchMyClothesImages } from "./stitch-images";

export const stitchMyClothesExperience: ExperienceCaseStudy = {
  id: 4,
  slug: "stitch-my-clothes-platform",
  role: "Full-stack Product Engineer",
  company: "Clouth (Stitch My Clothes)",
  location: "Hybrid • Mumbai, IN",
  timeframe: "Jul 2022 – Dec 2023",
  excerpt:
    "Launched Clouth's custom apparel stack—from immersive storefront to measurement-first checkout—so shoppers, stylists, and tailors can co-create garments without spreadsheets or ad-hoc chat.",
  summary:
    "Led discovery, architecture, and delivery of the App Router commerce experience, layering a modular shirt studio, measurement capture flows, cart intelligence, and dual payments on top of Clerk-secured APIs and MongoDB.",
  card: {
    thumbnail: stitchMyClothesImages.thumbnail,
  },
  hero: {
    headline:
      "Digitized bespoke tailoring for Clouth—from inspiration through doorstep delivery",
    heroImage: stitchMyClothesImages.hero,
    badges: ["Next.js App Router", "Clerk", "MongoDB", "Cloudinary"],
    stats: [
      { label: "Custom garments designed", value: "9.6K/yr" },
      {
        label: "Measurement completion",
        value: "92%",
        helper: "before checkout",
      },
      { label: "Checkout conversion lift", value: "+27%" },
    ],
  },
  focusAreas: [
    {
      title: "Immersive storefront",
      description:
        "Stitched hero, sponsor reels, testimonials, and discount popups with Tailwind + Radix primitives so marketing can compose new drops quickly.",
      icon: "🧵",
      tags: ["Design systems", "Commerce"],
    },
    {
      title: "Customization studio",
      description:
        "Implemented the layered shirt designer, measurement flows, and PDF spec export so stylists capture every detail before production.",
      icon: "🏪",
      tags: ["Product", "DX"],
    },
    {
      title: "Commerce ops",
      description:
        "Orchestrated cart persistence, coupons, PayPal + COD payments, and notification rails so CX, logistics, and finance stay in sync.",
      icon: "🚚",
      tags: ["Logistics", "Automation"],
    },
  ],
  responsibilities: [
    {
      title: "Commerce product leadership",
      description:
        "Ran vision to launch for storefront, studio, and checkout, keeping discovery artifacts and release cadences visible to merch, ops, and leadership.",
      bullets: [
        "Maintained story maps for landing, customization, and measurement funnels",
        "Facilitated weekly design + ops reviews to unblock boutique readiness",
        "Partnered with QA on mobile, PDF, and PayPal regression suites",
      ],
    },
    {
      title: "Platform engineering",
      description:
        "Owned the Next.js App Router stack, Clerk auth, Mongo models, and Cloudinary assets powering garments, carts, and orders.",
      bullets: [
        "Implemented layered garment rendering + asset management",
        "Designed Mongoose schemas for shirts, carts, orders, coupons, and measurements",
        "Built action modules + route handlers for carts, shirts, and webhooks",
      ],
    },
    {
      title: "Payments & lifecycle",
      description:
        "Linked CX, logistics, and finance through notifications, courier integrations, and PayPal/COD flows.",
      bullets: [
        "Unified courier + payment webhooks into reconciled audit logs",
        "Added SLA alerting and escalation policies for fittings + deliveries",
        "Documented contingency playbooks and messaging templates for CX",
      ],
    },
  ],
  achievements: [
    {
      title: "Studio adoption",
      value: "88% completion",
      description:
        "Measurement-first journeys plus PDF exports kept shoppers finishing the customization studio.",
    },
    {
      title: "Cart persistence",
      value: "+32% retained",
      description:
        "Local storage syncing and selective checkout features stopped drop-offs between sessions.",
    },
    {
      title: "Vendor ramp",
      value: "< 5 days",
      description:
        "Checklists, microsites, and reconciled payouts kept boutiques production-ready within a week.",
    },
  ],
  milestones: [
    {
      title: "Blueprint + alpha",
      period: "Q3 2022",
      description:
        "Mapped journeys, stood up Clerk, and launched the concierge alpha for curated fittings.",
      highlight: true,
    },
    {
      title: "Measurement-first launch",
      period: "Q4 2022",
      description:
        "Opened self-serve bookings, layered shirt designer, and gender-specific measurement flows.",
    },
    {
      title: "Commerce + payments",
      period: "Q1 2023",
      description:
        "Delivered smart cart, coupon validation, PayPal integration, and COD orchestration.",
    },
    {
      title: "Ops + scale",
      period: "Q3 2023",
      description:
        "Rolled out cart analytics, courier SLA dashboards, and retention campaigns for repeat orders.",
    },
  ],
  documentation: [
    {
      title: "Commerce architecture brief",
      description:
        "Captures storefront composition, App Router layout, and Clerk/Mongo boundaries.",
      href: "https://docs.example.com/clouth-architecture",
      format: "Notion",
    },
    {
      title: "Measurement studio spec",
      description:
        "Details garment layers, PDF exports, and data captured per form.",
      href: "https://docs.example.com/clouth-measurement",
      format: "PDF",
    },
    {
      title: "Commerce + ops runbook",
      description:
        "SLA policies, courier integrations, and notification templates for CX + ops.",
      href: "https://docs.example.com/clouth-ops",
      format: "Slides",
    },
  ],
  gallery: stitchMyClothesImages.gallery,
};
