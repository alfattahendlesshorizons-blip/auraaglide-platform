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

  trustItems: [
    {
      title: "Business-first guidance",
      description: "Strategic foundation",
      icon: "foundation",
    },
    {
      title: "Connected specialists",
      description: "Legal • Tax • Compliance",
      icon: "network",
    },
    {
      title: "Clear execution",
      description: "Structured delivery",
      icon: "execution",
    },
  ],

  primaryAction: {
    label: "Book a Consultation",
    href: "/contact",
  },

  secondaryAction: {
    label: "Explore Services",
    href: "/services",
  },

  reassurance: "Clear guidance. No unnecessary complexity.",

  image: {
    src: "/images/home/hero-advisory-office.png",
    alt: "Premium business advisory workspace",
  },
};
