export type SectionTransitionVariant =
  | "panel-to-canvas"
  | "canvas-to-canvas";

export type SectionTransitionAlign =
  | "center"
  | "left";

export type SectionTransitionProps = {
  label?: string;
  variant?: SectionTransitionVariant;
  align?: SectionTransitionAlign;
  className?: string;
};

