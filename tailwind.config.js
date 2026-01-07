/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
            fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Apple SD Gothic Neo", "Segoe UI", "Roboto", "Helvetica", "Arial"],
          },
      },
  },
  plugins: [],
}

