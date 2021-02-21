module.exports = {
    "moduleFileExtensions": ["js", "jsx"],
    "moduleNameMapper": {
        "\\.(svg|jpeg|jpg|png|ico)$": "<rootDir>/src/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/src/__mocks__/styleMock.js"
    },
    "setupFilesAfterEnv": ["<rootDir>/setupTests.js"],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "collectCoverageFrom": ["src/**/*.{js, jsx}"],
    "watchPathIgnorePatterns": ["node_modules"]
}