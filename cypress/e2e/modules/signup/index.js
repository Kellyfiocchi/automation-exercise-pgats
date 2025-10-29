// cypress/e2e/modules/signup/index.js

import { faker } from "@faker-js/faker";

export const selectors = {
  signupLoginBtn: 'a[href="/login"]',
  newUserHeader: "div.signup-form h2",
  signupNameInput: '[data-qa="signup-name"]',
  signupEmailInput: '[data-qa="signup-email"]',
  signupButton: '[data-qa="signup-button"]',
  enterAccountInfoHeader: "div.login-form h2 b",
  titleMr: "#id_gender1",
  passwordInput: '[data-qa="password"]',
  daysSelect: '[data-qa="days"]',
  monthsSelect: '[data-qa="months"]',
  yearsSelect: '[data-qa="years"]',
  newsletterCheckbox: "#newsletter",
  offersCheckbox: "#optin",
  firstNameInput: '[data-qa="first_name"]',
  lastNameInput: '[data-qa="last_name"]',
  companyInput: '[data-qa="company"]',
  addressInput: '[data-qa="address"]',
  address2Input: '[data-qa="address2"]',
  countrySelect: '[data-qa="country"]',
  stateInput: '[data-qa="state"]',
  cityInput: '[data-qa="city"]',
  zipcodeInput: '[data-qa="zipcode"]',
  mobileInput: '[data-qa="mobile_number"]',
  createAccountBtn: '[data-qa="create-account"]',
  accountCreatedHeader: '[data-qa="account-created"]',
  continueBtn: '[data-qa="continue-button"]',
  loggedAs: 'li a:contains("Logged in as")',
  deleteAccountBtn: 'a[href="/delete_account"]',
  accountDeletedHeader: '[data-qa="account-deleted"]',
  emailAlreadyExistsMsg: 'p[style="color: red;"]',
};

export const actions = {
  // 1–3: abrir site e verificar home
  openHome() {
    cy.visit("/");
    cy.get("body").should("contain.text", "Home");
  },

  // 4–5: clicar no botão de signup/login e verificar título
  goToSignup() {
    cy.get(selectors.signupLoginBtn).click();
    cy.get(selectors.newUserHeader)
      .should("be.visible")
      .and("contain.text", "New User Signup!");
  },

  // 6–7: preencher nome e email e clicar em Signup (usado no TC05)
  startSignup(name, email) {
    cy.log(`📧 Tentando cadastrar com e-mail: ${email}`);
    cy.get(selectors.signupNameInput).type(name);
    cy.get(selectors.signupEmailInput).type(email);
    cy.get(selectors.signupButton).click();
  },

  // 6–7: gerar usuário automático com Faker e iniciar cadastro (usado no TC01)
  startSignupWithFaker() {
    const fakeName = faker.person.firstName();
    const fakeEmail = faker.internet.email();

    cy.log(`🧠 Novo usuário gerado -> Nome: ${fakeName}, Email: ${fakeEmail}`);

    cy.get(selectors.signupNameInput).type(fakeName);
    cy.get(selectors.signupEmailInput).type(fakeEmail);
    cy.get(selectors.signupButton).click();

    // Armazena o usuário gerado no contexto do Cypress
    cy.wrap({ name: fakeName, email: fakeEmail }).as("fakeUser");
  },

  // 8–15: preencher formulário de criação e confirmar (também com Faker)
  completeRegistration(user) {
    cy.contains("Enter Account Information").should("be.visible");

    // Se não foi passado um objeto de usuário, gera um novo automaticamente
    const fakeUser = user || {
      password: faker.internet.password({ length: 8 }),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      company: faker.company.name(),
      address: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      state: faker.location.state(),
      city: faker.location.city(),
      zip: faker.location.zipCode(),
      mobile: faker.phone.number("119########"),
    };

    cy.log(
      `🏠 Endereço: ${fakeUser.address}, ${fakeUser.city}/${fakeUser.state}`
    );

    cy.get(selectors.titleMr).click();
    cy.get(selectors.passwordInput).type(fakeUser.password);
    cy.get(selectors.daysSelect).select("10");
    cy.get(selectors.monthsSelect).select("May");
    cy.get(selectors.yearsSelect).select("1995");
    cy.get(selectors.newsletterCheckbox).check();
    cy.get(selectors.offersCheckbox).check();

    cy.get(selectors.firstNameInput).type(fakeUser.firstName);
    cy.get(selectors.lastNameInput).type(fakeUser.lastName);
    cy.get(selectors.companyInput).type(fakeUser.company);
    cy.get(selectors.addressInput).type(fakeUser.address);
    cy.get(selectors.address2Input).type(fakeUser.address2);
    cy.get(selectors.countrySelect).select("Canada");
    cy.get(selectors.stateInput).type(fakeUser.state);
    cy.get(selectors.cityInput).type(fakeUser.city);
    cy.get(selectors.zipcodeInput).type(fakeUser.zip);
    cy.get(selectors.mobileInput).type(fakeUser.mobile);

    cy.get(selectors.createAccountBtn).click();

    cy.get(selectors.accountCreatedHeader)
      .should("be.visible")
      .and("contain.text", "Account Created!");

    cy.get(selectors.continueBtn).click();
    cy.contains("Logged in as").should("be.visible");
  },

  // 17–18: excluir conta
  deleteAccount() {
    cy.get(selectors.deleteAccountBtn).click({ force: true });
    cy.get(selectors.accountDeletedHeader, { timeout: 10000 }).should(
      "be.visible"
    );
    cy.get(selectors.continueBtn).click();
  },

  // TC05: verificar mensagem de email existente
  verifyExistingEmailError() {
    cy.get(selectors.emailAlreadyExistsMsg)
      .should("be.visible")
      .and("contain.text", "Email Address already exist!");
  },
};
