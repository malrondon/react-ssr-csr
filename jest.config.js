module.exports = {
  testURL: 'http://localhost',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      './internals/file-transformer.js',
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
    '\\.(css|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/source/**/*.spec.js'],
  setupTestFrameworkScriptFile: './internals/test/setup.js',
  coverageDirectory: '.reports/coverage',
  verbose: false,
  cacheDirectory: './tmp/',
  rootDir: './',
};
