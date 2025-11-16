// src/styles/theme.ts

export const theme = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        background: "#f8f9fa",
        text: "#212529",
    },
    spacing: (factor: number) => `${0.25 * factor}rem`,
    borderRadius: "8px",
    fontFamily: "'Inter', sans-serif",
} as const;

export type Theme = typeof theme;
