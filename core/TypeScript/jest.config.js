module.exports = {
    "testEnvironment": "jsdom",
    "moduleFileExtensions": ["js", "ts", "tsx"],
    "moduleNameMapper": {
        "\\.(svg|jpeg|jpg|png|ico)$": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/src/__mocks__/styleMock.js",
    },
    "moduleDirectories": ["node_modules", "src"],
    "setupFilesAfterEnv": ["<rootDir>/setupTests.js"],
    "collectCoverageFrom": ["src/**/*.{ts, tsx}"],
    "watchPathIgnorePatterns": ["node_modules", "tsconfig.json"]
}