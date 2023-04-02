const { defineConfig } = require("cypress");
require('dotenv/config')
//require('dotenv').config()


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseUrl: process.env.BASE_URL,
    //viewportWidth: 1920,
    //viewportHeight: 1280,
    excludeSpecPattern: ['cypress/e2e/examples/*'],
    video: false,
    screenshotOnRunFailure: false,
  },
});
