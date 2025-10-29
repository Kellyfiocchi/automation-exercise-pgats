export const selectors = {
  emailInput: '[data-qa="login-email"]',
  passwordInput: '[data-qa="login-password"]',
  loginButton: '[data-qa="login-button"]',
  logoutButton: 'a[href="/logout"]',
  errorMessage: 'p:contains("Your email or password is incorrect!")',
};

export const actions = {
  visitLogin() {
    cy.visit("/login");
  },
  login(email, password) {
    cy.get(selectors.emailInput).clear().type(email);
    cy.get(selectors.passwordInput).clear().type(password);
    cy.get(selectors.loginButton).click();
  },
  logout() {
    cy.get(selectors.logoutButton).click();
  },
};

export const data = {
  valid: { email: "kellypgats@test.com", password: "12345" },
  invalid: { email: "fake@mail.com", password: "wrong" },
};
