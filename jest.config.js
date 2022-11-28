module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.js"],
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  testEnvironment: "node",
};
