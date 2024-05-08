const { compilerOptions } = require("./tsconfig.json");
const { pathsToModuleNameMapper } = require("ts-jest");
const nextJest = require("next/jest.js");

const createJestConfig = nextJest({
    dir: "./",
});

const config = {
    coverageProvider: "v8",
    testEnvironment: "jsdom",
    roots: ["<rootDir>"],
    modulePaths: ["<rootDir>"],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};

module.exports = createJestConfig(config);
