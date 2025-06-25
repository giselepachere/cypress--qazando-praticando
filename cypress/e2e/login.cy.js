
/// <reference types="cypress" />

import { faker, Faker } from "@faker-js/faker";
import login_page from "../support/pages/login_page";


describe('Login', () => {

    beforeEach('Acessar cadastro usuario', () => {
        login_page.accessRegister()
        
    });

     it('Campo e-mail vazio', () => {
        login_page.clickBtnLogin()
        login_page.checkErrorMessage('E-mail inválido.')
        
    });

     it('Campo e-mail inválido', () => {
        login_page.fillEmail(faker.person.firstName())
        login_page.clickBtnLogin()
        login_page.checkErrorMessage('E-mail inválido.')
             
        
    });

    it('Campo senha vazia', () => {
        login_page.fillEmail(faker.internet.email())
        login_page.clickBtnLogin()
        login_page.checkErrorMessage('Senha inválida.')
        
        
    });
    it('Campo senha inválido', () => {
        login_page.fillEmail(faker.internet.email())
        login_page.fillPassword('234')
        login_page.clickBtnLogin()
        login_page.checkErrorMessage('Senha inválida.')  
        
    });

    it('Login com sucesso', () => {

        const email = faker.internet.email()
        login_page.fillEmail(email)
        login_page.fillPassword('123456')
        login_page.clickBtnLogin()
        login_page.checkSuccessMessage(email)
                
    });


});

