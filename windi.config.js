import { defineConfig } from "windicss/helpers";
import colors from "windicss/colors";

export default defineConfig({
  attributify: false,
  extract: {
    include: ["./**/*.{svelte,ts,js,html}"],
    exclude: ["./node_modules/**"],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          //@ts-ignore
          ...colors.orange,
          DEFAULT: colors.orange[500],
          text: colors.white,
        },
      },
      fontFamily: {
        sans: ["'Kumbh Sans'", "sans-serif"],
        body: ["'Kumbh Sans'", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
    },
  },
});
