/// <reference types="cypress" />

export default {

    accessRegister(){
        cy.visit('/')
            .get('#top_header')

            cy.get('.fa-lock')
                .click()
    },   

    clicarBtnCadastrar(){
        cy.get('#btnRegister')
           // .should('be.visible')
            .click()
    },
// forma de validar uma mensagem
    //validarMensagemErro(){
       // cy.get('.errorLabel')
       //     .then((element) => {
       //         expect(element).to.be.visible
        //        expect(element.text()).eq('O campo nome deve ser prenchido')

       //     })
   // },

    //outra forma de validar mensagem
//     validarMensagemErro(){
//         cy.get('.errorLabel')
//             .should('be.visible')
//             .should('have.text', 'O campo nome deve ser prenchido')
        
//    },

 // aqui vamos chamar a mensagem por parâmetros (messagem) -> passei o parametro
 // que é  a mensagem na pasta e2e -> cadastro_usuario.cy.js
    validarMensagemErro(mensagem){
        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', mensagem)
  
   },

    preencheNome(nome){
        cy.get('#user')
            .type(nome)
    },

     preencheEmail(email){
        cy.get('#email')
            .type(email)

    },
    preencheSenha(senha){
        cy.get('#password')
            .type(senha)

    },
    
    validarMensagemSucesso(name){
        cy.get('#swal2-title')
            .should('be.visible')
            .should('have.text', 'Cadastro realizado!')
         
        cy.get('#swal2-html-container')
            .should('be.visible')
            .should('have.text', `Bem-vindo ${name}`)
    }

}


