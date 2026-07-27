import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                accent: "hsl(var(--accent))",
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                graphite: "#1F1F1F",
                midnight: "#0A0A0A",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "Inter", "sans-serif"],
                heading: ["var(--font-sora)", "Sora", "sans-serif"],
            },
            letterSpacing: {
                tightest: "-0.06em",
                tighter: "-0.04em",
                tight: "-0.02em",
                editorial: "-0.05em",
            },
            borderRadius: {
                "3xl": "1.5rem",
                "4xl": "2rem",
                "5xl": "3rem",
            },
            boxShadow: {
                luxury: "0 20px 50px rgba(0, 102, 255, 0.1)",
                "primary-glow": "0 10px 30px rgba(0, 102, 255, 0.3)",
            },
            keyframes: {
                ripple: {
                    "0%": { transform: "scale(0)", opacity: "1" },
                    "100%": { transform: "scale(4)", opacity: "0" },
                },
            },
            animation: {
                ripple: "ripple 0.6s linear",
            },
        },
    },
    plugins: [],
};
export default config;
