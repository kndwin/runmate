/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/react/src/**/*.{ts,tsx}"],
  // @ts-ignore
  presets: [require("@runmate/tailwind-config")],
};

module.exports = config;
