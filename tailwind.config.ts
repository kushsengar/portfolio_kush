import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                bg: {
                    primary: "var(--bg-primary)",
                    surface: "var(--bg-surface)",
                    "surface-hover": "var(--bg-surface-hover)",
                },
                text: {
                    primary: "var(--text-primary)",
                    secondary: "var(--text-secondary)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    hover: "var(--accent-hover)",
                    glow: "var(--accent-glow)",
                },
                border: {
                    DEFAULT: "var(--border)",
                    hover: "var(--border-hover)",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            maxWidth: {
                content: "1200px",
            },
            animation: {
                "fade-in-up": "fadeInUp 0.6s ease-out forwards",
                "fade-in": "fadeIn 0.6s ease-out forwards",
                "aurora": "aurora 15s ease-in-out infinite",
                "float": "float 6s ease-in-out infinite",
                "shimmer": "shimmer 3s ease-in-out infinite",
                "pulse-glow": "pulse-glow 3s ease-in-out infinite",
                "gradient-shift": "gradient-shift 6s ease infinite",
            },
            keyframes: {
                fadeInUp: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
        },
    },
    plugins: [],
};

export default config;
