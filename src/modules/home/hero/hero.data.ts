import type { HeroContent } from "./hero.types";

export const heroContent: HeroContent = {
  eyebrow: "One connected business ecosystem",

  title: {
    primary: "Build with clarity.",
    secondary: "Operate with confidence.",
    accent: "Scale with structure.",
  },

  description:
    "Business setup, legal protection, compliance and growth advisory connected through one structured support system.",

  primaryAction: {
    label: "Book a Consultation",
    href: "/contact",
  },

  secondaryAction: {
    label: "Explore Services",
    href: "/services",
  },

  reassurance: "Clear guidance. No unnecessary complexity.",

  railItems: [
    {
      label: "ROC",
      href: "/services/roc-compliance",
      description: "Company filings and compliance",
      enabled: true,
      order: 1,
    },
    {
      label: "GST",
      href: "/services/gst-registration",
      description: "Registration and returns",
      enabled: true,
      order: 2,
    },
    {
      label: "MSME",
      href: "/services/msme-registration",
      description: "Udyam registration",
      enabled: true,
      order: 3,
    },
    {
      label: "LLP",
      href: "/services/llp-registration",
      description: "LLP setup and filings",
      enabled: true,
      order: 4,
    },
    {
      label: "Trademark",
      href: "/services/trademark-registration",
      description: "Brand protection",
      enabled: true,
      order: 5,
    },
  ],

  image: {
    src: "/images/home/hero-advisory-office.png",
    alt: "Premium business advisory workspace",
  },
};
