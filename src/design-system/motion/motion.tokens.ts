export const motionTokens = {
  duration: {
    instant: 120,
    fast: 180,
    normal: 280,
    reveal: 560,
    narrative: 720,
    ambient: 6800,
  },

  easing: {
    standard: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    expressive: "cubic-bezier(0.16, 1, 0.3, 1)",
    ambient: "cubic-bezier(0.42, 0, 0.2, 1)",
  },
} as const;

