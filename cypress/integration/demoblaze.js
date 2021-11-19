describe('Test secured password', () => {
    it('Visits the demoblaze site and logs in', () => { 
      cy.visit('https://demoblaze.com/');
      cy.get('#login2').click();
      cy.wait(500)
      cy.get('#loginusername').type (Cypress.env("test").username);
      cy.get('#loginpassword').type (Cypress.env("test").password , { log: false });
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    })
  })