import { actions, selectors } from "./index";

describe("Subscription Test (TC10)", () => {
  it("TC10 - Verificar assinatura na página inicial", () => {
    actions.verifySubscription("kelly@example.com");
    cy.get(selectors.successMsg).should("be.visible");
  });
});
