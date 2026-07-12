import type { SVGProps } from "react";

import type { IndustryIconKey } from "./industries.types";

type IndustryIconProps = SVGProps<SVGSVGElement> & {
  iconKey: IndustryIconKey;
};

export function IndustryIcon({
  iconKey,
  ...props
}: IndustryIconProps) {
  const sharedProps = {
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
    ...props,
  };

  if (iconKey === "startup") {
    return (
      <svg {...sharedProps}>
        <path d="M11 21 8 24m13-13 3-3m-8 14c4-4 7-9 7-14-5 0-10 3-14 7l-2 5 4 4 5-2Z" />
        <path d="m10 17 5 5M8 24l-1 3 3-1" />
        <circle cx="18.5" cy="12.5" r="1.5" />
      </svg>
    );
  }

  if (iconKey === "manufacturing") {
    return (
      <svg {...sharedProps}>
        <path d="M5 26V15l7 4v-6l7 4V9h5v17H5Z" />
        <path d="M9 26v-4h4v4m4 0v-4h4v4M20 9V5h4v4" />
      </svg>
    );
  }

  if (iconKey === "healthcare") {
    return (
      <svg {...sharedProps}>
        <path d="M16 27S6 21 6 12a6 6 0 0 1 10-4 6 6 0 0 1 10 4c0 9-10 15-10 15Z" />
        <path d="M16 11v8m-4-4h8" />
      </svg>
    );
  }

  if (iconKey === "retail") {
    return (
      <svg {...sharedProps}>
        <path d="M7 12h18l-1 15H8L7 12Z" />
        <path d="M11 12a5 5 0 0 1 10 0M5 7h22" />
        <path d="M9 7 7 12m16-5 2 5" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <path d="M16 27V13" />
      <path d="M16 19c-6 0-10-4-10-10 6 0 10 4 10 10Z" />
      <path d="M16 15c6 0 10-4 10-10-6 0-10 4-10 10Z" />
      <path d="M10 27h12" />
    </svg>
  );
}
