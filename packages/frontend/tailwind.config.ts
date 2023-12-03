import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header: "url('src/img/header.svg')",
      },
      colors: {
        primary: "#A5D9C8",
        secondary: "#F6F0C6",
      },
    },
  },
  plugins: [],
} satisfies Config;
