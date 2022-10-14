import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      brand1: "hsl(230, 57, 50)",
      brand2: "hsl(230, 68, 54)",
      gray100: "hsl(210, 11, 15)",
      gray200: "hsl(210, 10, 23)",
      gray300: "hsl(210, 9, 31)",
      gray400: "hsl(210, 7, 56)",
      gray500: "hsl(210, 11, 71)",
      gray600: "hsl(210, 16, 93)",
      gray700: "hsl(210, 17, 95)",
      gray800: "hsl(210, 17, 98)",
      gray900: "hsl(200, 100, 99)",
      alert1: "hsl(349, 57, 50)",
      alert2: "hsl(349, 69, 55)",
      sucess: "hsl(162, 88, 26)",
    },
    fontSizes: {
      1: "2rem",
      2: "1.5rem",
      3: "1.25rem",
      4: "1rem",
      5: "0.875rem",
    },
    fontWeights: {
      1: 600,
      2: 500,
      3: 400,
    },
    radii: {
      1: "0.25rem",
    },
    lineHeights: {
      1: "150%",
    },
  },
  media: {
    bp1: "(max-width: 700px)",
    bp2: "(max-width: 500px)",
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, fontFamily: "'Inter', sans-serif" },
});
