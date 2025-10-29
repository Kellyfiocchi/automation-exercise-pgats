// cypress/e2e/modules/products/index.js

export const selectors = {
  productsBtn: 'a[href="/products"]',
  allProductsTitle: "div.features_items h2",
  productList: ".features_items .col-sm-4",
  viewProductBtn: '.choose a[href*="/product_details"]',
  productDetail: ".product-information",
  searchInput: "#search_product",
  searchBtn: "#submit_search",
  searchedProductsTitle: "div.features_items h2",
};

export const actions = {
  // 1–3: abrir site e verificar home
  openHome() {
    cy.visit("/");
    cy.get("body").should("contain.text", "Home");
  },

  // 4–5: acessar página de produtos
  goToAllProducts() {
    cy.get(selectors.productsBtn).click();
    cy.url().should("include", "/products");
    cy.get(selectors.allProductsTitle)
      .should("be.visible")
      .and("contain.text", "All Products");
  },

  // 6–8: visualizar detalhes do primeiro produto
  viewFirstProductDetails() {
    cy.get(selectors.productList, { timeout: 15000 }).should(
      "have.length.greaterThan",
      0
    );
    cy.get(selectors.viewProductBtn).first().click({ force: true });
    cy.url().should("include", "/product_details");
    cy.get(selectors.productDetail, { timeout: 10000 }).should("be.visible");
  },

  // 6–8 (TC09): pesquisar produto
  searchProduct(productName) {
    cy.get(selectors.searchInput).type(productName);
    cy.get(selectors.searchBtn).click();

    cy.get(selectors.searchedProductsTitle, { timeout: 10000 })
      .should("be.visible")
      .and("contain.text", "Searched Products");

    cy.get(selectors.productList, { timeout: 10000 })
      .should("be.visible")
      .and("have.length.greaterThan", 0);
  },
};
