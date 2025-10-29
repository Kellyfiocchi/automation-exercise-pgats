// cypress/e2e/modules/contact/contact.spec.js

import { actions } from "./index";

describe("Test Case 6 - Contact Us Form", () => {
  it("TC06 - Enviar mensagem de contato com sucesso", () => {
 
    actions.openHome();
    actions.goToContactPage();
    actions.fillAndSubmitContactForm();
    actions.verifySuccessAndReturnHome();
  });
});
