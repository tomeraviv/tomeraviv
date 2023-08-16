import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "light": "url('/images/denim-light.png')",
        "dark": "url('/images/denim-dark2.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
