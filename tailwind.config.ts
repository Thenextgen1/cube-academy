import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
        Anoymous_Pro: ["Anonymous Pro, monospace"],
      },
      backgroundColor: {
        gradientPrimary:
          "linear-gradient(81deg, #A0FF1F 13.17%, #00ED71 86.83%)",
      },
      colors: {
        primaryGreen: "#A0FF1F",
        primaryPink: "#F70087",
        primaryBlack: "#000",
        primaryWhite: "#fff",
        secondaryGreen: "",
        secondaryPink: "",
        greyDark: "",
        greyMid: "",
        greyLight: "",
        success: "",
        error: "",
      },
      boxShadow: {
        light: "0px 1px 10px 0px rgba(26, 26, 25, 0.08)",
        strong: "0px 2px 10px 0px rgba(26, 26, 25, 0.24)",
      },
    },
  },
  plugins: [],
};
export default config;
