module.exports = {
    testEnvironment: 'node',
    reporters: [
      'default',
      ['mocha-allure-reporter', { outputDir: 'allure-results' }]
    ],
  };