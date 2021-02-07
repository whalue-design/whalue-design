module.exports = {
  globals: {
    "ts-jest": {
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\.(t|j)sx?$": [
      "babel-jest",
      {
        presets: [
          [
            "@babel/preset-env",
            {
              targets: {
                node: true,
              },
            },
          ],
          "@babel/preset-typescript",
        ],
        plugins: [
          "@vue/babel-plugin-jsx",
          "@babel/plugin-proposal-class-properties",
        ],
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  roots: ["<rootDir>"],
};
