// cypress/e2e/modules/products/products.spec.js

import { actions } from "./index";

describe("Products - Test Cases 8 e 9", () => {
  it("TC08 - TC08 - Verificar produtos e detalhes", () => {
    
    actions.openHome();
    actions.goToAllProducts();
    actions.viewFirstProductDetails();
  });

  it("TC09 - Pesquisar produto", () => {

    actions.openHome();
    actions.goToAllProducts();
    actions.searchProduct("Tshirt");
  });
});
