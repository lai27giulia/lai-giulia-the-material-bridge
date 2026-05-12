import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        steel: "#71717A",
        offwhite: "#F4F4F5",
        safety: "#F97316",
      },
      boxShadow: {
        hard: "6px 6px 0 #000",
      },
      borderWidth: {
        4: "4px",
      },
    },
  },
  plugins: [],
} satisfies Config;

