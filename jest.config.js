module.exports = {
    "moduleFileExtensions": ["js", "jsx"],
    "moduleNameMapper": {
        "\\.(svg|jpeg|jpg|png|ico)$": "<rootDir>/app/__mocks__/fileMock.js",
        "\\.(css|less|scss)$": "<rootDir>/app/__mocks__/styleMock.js"
    },
    "setupFilesAfterEnv": ["<rootDir>/setupTests.js"],
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "collectCoverageFrom": ["app/**/*.{js, jsx}"],
    "watchPathIgnorePatterns": ["node_modules"]
}