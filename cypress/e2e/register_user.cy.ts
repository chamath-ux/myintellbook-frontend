describe('register user', () => {
  it('should register new user successfully', () => {
    cy.visit('/register'); // Visit the registration page

    // Fill in the registration form
    cy.get('#userEmail').type('chamath.rmc11@gmail.com');
    cy.get('#userPassword').type('password123');
    cy.get('#userConfirmPassword').type('password123');
    cy.get('#showPassword').click();
    cy.wait(1500);
    cy.get('#showPassword').click();
    cy.get('#showConfirmPassword').click();
    cy.wait(1500);
    cy.get('#showConfirmPassword').click();
   

    // Submit the form
    cy.get('#register').click();
    cy.wait(3000);
    cy.get('.swal2-confirm').click();
});
});