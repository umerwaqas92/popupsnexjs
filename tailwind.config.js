/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#eab308",
        
"secondary": "#111827",
        
"accent": "#111827",
        
"neutral": "#000e14",
        
"base-100": "#f5f5f4",
        
"info": "#00f1ff",
        
"success": "#178c00",
        
"warning": "#ff9100",
        
"error": "#ff5c6e",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),

  ],
};
