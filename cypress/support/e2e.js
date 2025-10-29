import "cypress-mochawesome-reporter/register";

Cypress.on("uncaught:exception", (err, runnable) => {
  // Ignora erros não capturados que não impactam o teste
  return false;
});
