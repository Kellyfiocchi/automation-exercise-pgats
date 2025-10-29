// cypress/e2e/modules/signup/signup.spec.js

import { faker } from "@faker-js/faker";
import { actions } from "./index";

describe("Signup Tests (TC01, TC05)", () => {
  it("TC01 - Registrar novo usuário com sucesso (dados Faker automáticos)", () => {
    actions.openHome();


    actions.goToSignup();

 
    actions.startSignupWithFaker();

 
    actions.completeRegistration();


    actions.deleteAccount();
  });

  it("TC05 - Registrar usuário com e-mail existente", () => {
    const existingEmail = "test@test.com"; // já cadastrado

    actions.openHome();
    actions.goToSignup();
    actions.startSignup("Kelly", existingEmail);
    // Verifica mensagem de erro esperada
    actions.verifyExistingEmailError();
  });
});
