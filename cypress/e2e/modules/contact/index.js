// cypress/e2e/modules/contact/index.js

export const selectors = {
  contactUsBtn: 'a[href="/contact_us"]',
  getInTouchTitle: "div.contact-form h2",
  nameInput: '[data-qa="name"]',
  emailInput: '[data-qa="email"]',
  subjectInput: '[data-qa="subject"]',
  messageTextarea: '[data-qa="message"]',
  uploadFileInput: 'input[name="upload_file"]',
  submitBtn: '[data-qa="submit-button"]',
  successMsg: ".status.alert.alert-success",
  homeBtn: "a.btn.btn-success",
};

export const actions = {
  // 1–3: abrir o site e verificar a home
  openHome() {
    cy.visit("/");
    cy.get("body").should("contain.text", "Home");
  },

  // 4–5: abrir a página de contato
  goToContactPage() {
    cy.get(selectors.contactUsBtn).click();
    cy.get(selectors.getInTouchTitle)
      .should("be.visible")
      .and("contain.text", "Get In Touch");
  },

  // 6–8: preencher e enviar o formulário
  fillAndSubmitContactForm() {
    cy.get(selectors.nameInput).type("Kelly Fiochi");
    cy.get(selectors.emailInput).type("kelly@example.com");
    cy.get(selectors.subjectInput).type("Dúvida sobre o site");
    cy.get(selectors.messageTextarea).type(
      "Mensagem automática de teste - Cypress."
    );

    // Faz upload de um arquivo de exemplo (pode ser qualquer arquivo pequeno)
    cy.get(selectors.uploadFileInput).selectFile(
      "cypress/fixtures/example.json"
    );

    // Clica em "Submit"
    cy.get(selectors.submitBtn).click();

    // Confirma o alerta JS
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.include("Press OK to proceed");
    });
  },

  // 10–11: verificar mensagem e voltar para home
  verifySuccessAndReturnHome() {
    cy.get(selectors.successMsg, { timeout: 10000 })
      .should("be.visible")
      .and(
        "contain.text",
        "Success! Your details have been submitted successfully."
      );
    cy.get(selectors.homeBtn).click();
    cy.url().should("eq", "https://automationexercise.com/");
  },
};
