// cypress/e2e/modules/checkout/index.js

export const selectors = {
  // Navegação e login
  signupLoginBtn: 'a[href="/login"]',
  signupName: '[data-qa="signup-name"]',
  signupEmail: '[data-qa="signup-email"]',
  signupButton: '[data-qa="signup-button"]',
  titleMr: "#id_gender1",
  password: '[data-qa="password"]',
  days: '[data-qa="days"]',
  months: '[data-qa="months"]',
  years: '[data-qa="years"]',
  firstName: '[data-qa="first_name"]',
  lastName: '[data-qa="last_name"]',
  address: '[data-qa="address"]',
  country: '[data-qa="country"]',
  state: '[data-qa="state"]',
  city: '[data-qa="city"]',
  zipcode: '[data-qa="zipcode"]',
  mobile: '[data-qa="mobile_number"]',
  createAccountBtn: '[data-qa="create-account"]',
  continueBtn: '[data-qa="continue-button"]',
  loggedUser: 'li a:contains("Logged in as")',

  // Carrinho
  addToCartBtn: ".add-to-cart",
  modalViewCartBtn: '.modal-content a[href="/view_cart"]',
  cartInfo: "#cart_info_table",
  checkoutBtn: ".btn.btn-default.check_out",
  addressDetails: ".checkout-information",
  commentTextarea: 'textarea[name="message"]',
  placeOrderBtn: ".btn.btn-default.check_out",

  // Pagamento
  nameOnCard: '[data-qa="name-on-card"]',
  cardNumber: '[data-qa="card-number"]',
  cvc: '[data-qa="cvc"]',
  expiryMonth: '[data-qa="expiry-month"]',
  expiryYear: '[data-qa="expiry-year"]',
  payAndConfirmBtn: '[data-qa="pay-button"]',

  // Exclusão
  deleteAccountBtn: 'a[href="/delete_account"]',
  accountDeletedMsg: '[data-qa="account-deleted"]',
};

export const actions = {
  // 1–3: abrir e verificar home
  openHome() {
    cy.visit("/");
    cy.get("body").should("contain.text", "Home");
  },

  // 4–6: criar conta
  createAccount(user) {
    cy.get(selectors.signupLoginBtn).click();
    cy.get(selectors.signupName).type(user.name);
    cy.get(selectors.signupEmail).type(user.email);
    cy.get(selectors.signupButton).click();

    cy.get(selectors.titleMr).click();
    cy.get(selectors.password).type(user.password);
    cy.get(selectors.days).select("10");
    cy.get(selectors.months).select("May");
    cy.get(selectors.years).select("1995");
    cy.get(selectors.firstName).type("Kelly");
    cy.get(selectors.lastName).type("Fiochi");
    cy.get(selectors.address).type("Rua Exemplo 123");
    cy.get(selectors.country).select("Canada");
    cy.get(selectors.state).type("SP");
    cy.get(selectors.city).type("São Paulo");
    cy.get(selectors.zipcode).type("01000");
    cy.get(selectors.mobile).type("11999999999");
    cy.get(selectors.createAccountBtn).click();

    cy.contains("Account Created!").should("be.visible");
    cy.get(selectors.continueBtn).click();
  },

  // 7: verificar login
  verifyLoggedIn(user) {
    cy.contains(`Logged in as ${user.name}`).should("be.visible");
  },

  // 8–10: adicionar ao carrinho e abrir
  addProductToCart() {
    // Abre a página de produtos
    cy.visit("/products");

    // Adiciona o primeiro produto
    cy.get(selectors.addToCartBtn).first().click({ force: true });

    // Espera o modal aparecer com o botão "View Cart"
    cy.get(selectors.modalViewCartBtn, { timeout: 15000 })
      .should("be.visible")
      .click({ force: true });

    // Aguarda o redirecionamento para a página /view_cart
    cy.url({ timeout: 15000 }).should("include", "/view_cart");

    // Agora o carrinho deve estar visível
    cy.get(selectors.cartInfo, { timeout: 15000 }).should("be.visible");
  },

  // 11–13: checkout e comentários
  proceedToCheckout() {
    cy.get(selectors.checkoutBtn).click({ force: true });
    cy.get(selectors.addressDetails, { timeout: 10000 }).should("be.visible");
    cy.get(selectors.commentTextarea).type("Pedido de teste automatizado.");
    cy.get(selectors.placeOrderBtn).click({ force: true });
  },

  // 14–16: pagamento e confirmação (versão atualizada)
  fillPaymentDetails() {
    cy.get(selectors.nameOnCard).type("Kelly Fiochi");
    cy.get(selectors.cardNumber).type("4111111111111111");
    cy.get(selectors.cvc).type("123");
    cy.get(selectors.expiryMonth).type("12");
    cy.get(selectors.expiryYear).type("2030");

    // Clica em "Pay and Confirm Order"
    cy.get(selectors.payAndConfirmBtn).click();

    // Aguarda a mensagem de sucesso real da versão atual
    cy.contains("Congratulations! Your order has been confirmed!", {
      timeout: 15000,
    }).should("be.visible");

    // Valida também os botões que aparecem na tela de sucesso
    cy.contains("Download Invoice").should("be.visible");
    cy.contains("Continue").should("be.visible");
  },

  // 17–18: excluir conta
  deleteAccount() {
    cy.get(selectors.deleteAccountBtn).click({ force: true });
    cy.get(selectors.accountDeletedMsg, { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get(selectors.continueBtn).click();
  },
};
