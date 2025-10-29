import { actions, selectors, data } from "./index";

describe("Login Tests (TC02, TC03, TC04)", () => {
  it("TC02 - Login com credenciais válidas", () => {

    actions.visitLogin();
    actions.login(data.valid.email, data.valid.password);
    cy.contains("Logged in as").should("be.visible");
  });

  it("TC03 - Login com credenciais inválidas", () => {

    actions.visitLogin();
    actions.login(data.invalid.email, data.invalid.password);
    cy.get(selectors.errorMessage).should("be.visible");
  });

  it("TC04 - Logout do usuário", () => {
    
    actions.visitLogin();
    actions.login(data.valid.email, data.valid.password);
    actions.logout();
    cy.url().should("include", "/login");
  });
});
