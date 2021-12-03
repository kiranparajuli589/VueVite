module.exports = {
  root: true,
  env: { node: true },
  parser: "vue-eslint-parser",
  extends: [
    "plugin:vue/vue3-recommended",
  ],
  rules: {
    "quotes": ["error", "double"],
    "semi": ["error", "never"],
    "indent": ["error", 2],
    "no-multi-spaces": ["error"],
    "no-console": ["error", { allow: ["warn", "error"] }],
  }
}
