// cypress/e2e/modules/checkout/checkout.spec.js

import { actions } from "./index";

describe("Test Case 15 - Place Order: Register before Checkout", () => {
  const user = {
    name: "Kelly",
    email: `kelly${Date.now()}@mail.com`, // email único por execução
    password: "123456",
  };

  it("TC15 - Executa o fluxo completo de compra e exclusão de conta", () => {

    actions.openHome();
    actions.createAccount(user);
    actions.verifyLoggedIn(user);
    actions.addProductToCart();
    actions.proceedToCheckout();
    actions.fillPaymentDetails();
    actions.deleteAccount();
  });
});
