/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
  reporters: ["default", "github-actions"],
  coverageReporters: [
    [
      "text",
      {
        file: "report.txt",
      },
    ],
  ],
};
