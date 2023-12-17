import { useState } from "react";

export type THEMES_VARIANTS = "LIGHT" | "DARK" | "CUPCAKE";

const themes = {
  LIGHT: {
    background: "#ffffff",

    primary: "#570df8",

    secondary: "#f000b8",

    accent: "#1dcdbc",

    neutral: "#2b3440",

    "base-100": "#ffffff",

    info: "#3abff8",

    success: "#36d399",

    warning: "#fbbd23",

    error: "#f87272",
  },
  DARK: {
    background: "#1e2127",

    primary: "#67e02f",

    secondary: "#f257c3",

    accent: "#2ec413",

    neutral: "#242c42",

    "base-100": "#433e4c",

    info: "#4787f5",

    success: "#128241",

    warning: "#8e6210",

    error: "#fa0f2e",
  },
  CUPCAKE: {
    background: "#f5f5f5",

    primary: "#26baff",

    secondary: "#ba7001",

    accent: "#955dc6",

    neutral: "#26252d",

    "base-100": "#e4e6e7",

    info: "#276ae7",

    success: "#64edab",

    warning: "#bca015",

    error: "#f44e4e",
  },
};

const useTheme = (variant: THEMES_VARIANTS) => {
  const [theme, setTheme] = useState(themes[variant]);
  const [themeName, setThemeName] = useState(variant);

  return { themeName, setThemeName, themes, theme, setTheme };
};

export default useTheme;
