/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      /* ============================================================
         BRAND PALETTE — inferred from the Santorini Instagram
         profile image + feed photography.
         Aegean blues, sun-bleached whites, linen sand, terracotta
         and golden-hour accents.
         ============================================================ */
      colors: {
        deepsea: '#08304B',   // deep Aegean night blue (primary bg)
        aegean: '#12557E',    // signature Santorini blue (brand)
        sea: '#2E86AB',       // bright Mediterranean sea blue
        sky: '#8FC1DE',       // light horizon blue
        ink: '#0A2540',       // text ink
        sand: '#F4EDE2',      // warm linen background
        cream: '#FFFAF2',     // sun-bleached white
        terra: '#C0703F',     // terracotta rooftops
        gold: '#D9A441',      // golden hour / olive oil
        olive: '#6E7B5B',     // olive grove accent
        slateblue: '#2C4A63',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        arabic: ['"Noto Kufi Arabic"', 'Jost', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.32em',
        wide2: '0.18em',
      },
      boxShadow: {
        soft: '0 24px 60px -28px rgba(8, 48, 75, 0.35)',
        lift: '0 40px 90px -40px rgba(8, 48, 75, 0.55)',
        glow: '0 18px 50px -18px rgba(217, 164, 65, 0.55)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
        floaty: {
          '0%,100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-14px,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        ripple: {
          '0%': { transform: 'scale(.6)', opacity: '.55' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        floaty: 'floaty 7s ease-in-out infinite',
        shimmer: 'shimmer 2.6s linear infinite',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};