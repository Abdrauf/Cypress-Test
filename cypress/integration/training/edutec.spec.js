// <reference types="Cypress" />
describe("Testing of CARGO WEB", ()=>{
    it("Login Application", ()=>{
        cy.visit("http://cargoweb.test.vggdev.com/");
        cy.get(3000)
        cy.get('#UserName').type("kemibaby@qa.team");
        cy.get('#Password').type("Password1@");
        cy.get('body > div > div > div.app-login-box > div.app-login-box-container > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > input').click(); 
        cy.wait(7000)
        cy.get('img')
     
    })