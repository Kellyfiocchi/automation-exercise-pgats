export const selectors = {
  subscribeEmail: "#susbscribe_email",
  subscribeBtn: "#subscribe",
  successMsg: 'div:contains("You have been successfully subscribed!")',
};

export const actions = {
  verifySubscription(email) {
    cy.visit("/");
    cy.scrollTo("bottom");
    cy.get(selectors.subscribeEmail).type(email);
    cy.get(selectors.subscribeBtn).click();
  },
};
