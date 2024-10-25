const { JasmineAllureReporter } = require('jest-allure/dist/JasmineAllureReporter');
const { AllureRuntime } = require('allure-js-commons');

const allureReporter = new JasmineAllureReporter(new AllureRuntime({ resultsDir: 'allure-results' }));
jasmine.getEnv().addReporter(allureReporter);
