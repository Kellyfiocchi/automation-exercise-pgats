const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com",
    video: false,
    reporter: "cypress-mochawesome-reporter", // 👈 troca aqui
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Automation Exercise - Relatório de Testes",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
  },
});
