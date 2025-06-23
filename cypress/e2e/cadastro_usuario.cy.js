/// <reference types="cypress" />

import { faker, Faker } from '@faker-js/faker';
import commun_page from '../support/pages/commun_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'


describe('Login', () => {

beforeEach('Acessar cadastro usuario', () => {
    commun_page.acessarCadastroUsuario()   
    })

    it('Campo nome vazio', () => {
        cadastro_page.clicarBtnCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')        
                
    })

     it('Campo e-mail vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.clicarBtnCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
                  
    })

     it('Campo e-mail inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.person.fullName())
        cadastro_page.clicarBtnCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
                  
        
    })

    it('Campo senha vazia', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.clicarBtnCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
               
    })

    it('Campo senha inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha('235')
        cadastro_page.clicarBtnCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
        
        
    })

    it('Cadastro com sucesso', async () => {

        const name = await faker.person.fullName()

        cadastro_page.preencheNome(name)
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha('235123456')
        cadastro_page.clicarBtnCadastrar()
        cadastro_page.validarMensagemSucesso(name)   
       
    })        
        
})




