// tailwind.config.mjs

/** @type {import('tailwindcss').Config} */
export default {
  /**
   * TOTO JE NAJDÔLEŽITEJŠIA ČASŤ.
   * Hovorí Tailwindu: "Skenuj VŠETKY súbory s týmito koncovkami
   * v priečinku `src` a všetkých jeho pod-priečinkoch."
   * Táto cesta by mala pokryť 99% projektov.
   */
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      fontFamily: {
        // Táto časť je podľa vášho kódu správne.
        display: ['Clash Display', 'sans-serif'],
      },
    },
  },

  plugins: [],
}