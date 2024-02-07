/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "main": "#09389B",
        "bgray": "#666360",
        "main-black": "#3b3a39",
      }
    },
  },
  plugins: [],
});
