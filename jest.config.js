/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transformIgnorePatterns: ["/node_modules/"],
};