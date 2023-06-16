module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    "valid-jsdoc": "off",
    "no-debugger": "warn",
    "arrow-body-style": "off",
    "no-magic-numbers": [
      "error",
      {
        ignore: [1, 0, "0n", -1]
      }
    ],
    "react/jsx-no-bind": "off",
    "func-name-matching": "off",
  },
};
