/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./index.html",
  ],
  prefix: "",

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      gray: {
        100: "#333333",
        90: "#555555",
        80: "#808080",
        70: "#AAAAAA",
        60: "#D4D4D4",
        50: "#FFFFFF",
      },
      black: {
        100: "#242831",
        90: "#0C0D10",
        80: "#121419",
        70: "#181B21",
        60: "#1E2129",
        50: "#494C53",
        40: "#6D7076",
        30: "#919398",
        20: "#B6B7BA",
        10: "#D5D6D9",
        DEFAULT: "#000",
      },
      red: {
        100: "#FF204B",
        90: "#550B19",
        80: "#801026",
        70: "#D41B3F",
        60: "#D41B3F",
        50: "#FF4569",
        40: "#FF6A87",
        30: "#FF8FA5",
        20: "#FFB5C3",
        10: "#FFD2DB",
      },
      primary: "#171B29",
      secondary: {
        100: "#FD881F",
        90: "#FD9435",
        80: "#FDA04C",
        70: "#FEAC62",
        60: "#FEB879",
        50: "#FEC38F",
        40: "#FECFA5",
        30: "#FEDBBC",
        20: "#FFE7D2",
        10: "#FFF3E9",
      },
      green: {
        100: "#17C223",
        90: "#08410C",
        80: "#0C6112",
        70: "#0F8117",
        60: "#13A21D",
        50: "#3ECC48",
        40: "#64D66C",
        30: "#8BE091",
        20: "#B2EBB6",
        10: "#D1F3D3",
      },
      yellow: {
        100: "#FFD22A",
        90: "#55460E",
        80: "#806915",
        70: "#AA8C1C",
        60: "#D4AF23",
        50: "#FFD94E",
        40: "#FFE171",
        30: "#FFE894",
        20: "#FFF0B8",
        10: "#FFF6D4",
      },
      card: "#101622",
      cardBorder: "#242C3E",
    },
    extend: {
      backgroundImage: {
        loading: "url('/loadingScreen.webp')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        4.5: "1.125rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
