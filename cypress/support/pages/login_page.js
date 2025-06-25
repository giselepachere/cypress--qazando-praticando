// 3 - criar  as  ações da  page
/// <reference types="cypress" />

export default{
    accessRegister(){
        cy.visit('/')
            .get('#top_header')

            cy.get('.fa-user')
                .click()
    },

    clickBtnLogin(){
        cy.get('#btnLogin')
            .click()      
    },

    checkErrorMessage(message){
        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', message)

    },

   
    fillEmail(email){
        cy.get('#user')
            .type(email)

    },
    fillPassword(password){
        cy.get('#password')
            .type(password)

    },

    checkSuccessMessage(email) {
        cy.get('#swal2-title')
            .should('be.visible')
            .and('have.text', 'Login realizado');

        cy.get('#swal2-html-container')
            .should('be.visible')
            .and('have.text', `Olá, ${email}`);
    },

}

