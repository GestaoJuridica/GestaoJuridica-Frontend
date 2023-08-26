module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    "plugin:vue/recommended",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": "error",
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/multi-word-component-names": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  globals: {
    $nuxt: true,
    definePageMeta: "readonly",
    defineNuxtConfig: "readonly",
    defineNuxtRouteMiddleware: "readonly",
    navigateTo: "readonly",
    useHead: "readonly",
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false,
  },
};
