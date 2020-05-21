/// <reference types="Cypress" />

describe("Testing Free Website", ()=>{

    it("Search a website on Google", ()=>{

        cy.visit("https://www.amazon.com/");

        cy.contains('amazon')
        cy.get('#nav-link-accountList > .nav-line-2').click()
        cy.contains('Account & Lists')

        cy.wait(1000)

        //Register A new User
        cy.get('.nav-signin-tooltip-footer > .nav-a').click()

    




       

        
    })
    
})    