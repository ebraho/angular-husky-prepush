import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,ts,jsx,tsx}"],
    rules: {},
  },
];
