/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "app-background": "#F1F1F1",
        "cb-value": "#333333",
        "cb-normal": "#4F4F4F",
        "entrance-aigc": "#A43737",
        "entrance-github": "#3C3C3C",
        "entrance-discord": "#374FA6",
        "entrance-testnet": "#A45E37",
      },
      boxShadow: {
        cb: "inset 0 0 0 2px #828282",
      },
      lineHeight: {
        21: "21px",
        22: "22px",
        24: "24px",
      },
      borderRadius: {
        12: "12px",
        15: "15px",
      },
    },
  },
  plugins: [],
};
