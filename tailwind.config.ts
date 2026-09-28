import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0E1420",
        paper: "#F6F7F9",
        line: "#E3E6EB",
        muted: "#5B6472",
        indigo: {
          DEFAULT: "#3E63DD",
          dark: "#2E4AB0",
          light: "#EEF1FD",
        },
        amber: {
          DEFAULT: "#F2A93B",
          dark: "#C6811C",
          light: "#FDF3E1",
        },
        success: "#1FAE7A",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      fontWeight: {
        "600": "600",
        "700": "700",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
