/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "rgba(0,0,0,0.1)",
        background: "#ffffff",
        foreground: "#232323",
        primary: "#030213",
        'primary-foreground': "#fff",
        secondary: "#ececf0",
        'secondary-foreground': "#030213",
        muted: "#ececf0",
        'muted-foreground': "#717182",
        accent: "#e9ebef",
        'accent-foreground': "#030213",
        destructive: "#d4183d",
        'destructive-foreground': "#fff",
        ring: "#b3b3b3",
      },
    },
  },
  plugins: [],
};

