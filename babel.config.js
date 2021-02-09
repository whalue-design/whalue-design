module.exports = {
  presets: [
    [
      "@babel/env",
      {
        loose: true,
        modules: false,
      },
    ],
    "@babel/typescript",
  ],
  plugins: [
    "@vue/babel-plugin-jsx",
    "@babel/proposal-class-properties",
    "@babel/transform-runtime",
    "lodash",
  ],
  overrides: [
    {
      test: /\.vue$/,
      plugins: ["@babel/transform-typescript"],
    },
  ],
  env: {
    utils: {
      ignore: ["**/*.test.ts", "**/*.spec.ts"],
      presets: [
        [
          "@babel/env",
          {
            loose: true,
            modules: false,
          },
        ],
      ],
      plugins: [
        [
          "babel-plugin-module-resolver",
          {
            root: ["whalue-design"],
            alias: {
              "@whalue-design": "whalue-design/lib",
            },
          },
        ],
      ],
    },
  },
};
