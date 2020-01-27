/// <reference types="Cypress" />

describe("Testing CBR Web", ()=>{

    it("Login Application", ()=>{

        cy.visit("https://cbr.test.vggdev.com");


       
        cy.get('#exampleInputEmail').type("test123@qa.team");
        cy.get('#exampleInputPassword').type("P@ssword1");

        cy.get('#loginButton').click(); 

        cy.wait(5000)
        
        cy.url().should("include","/home/dashboard");

        
        cy.contains('document.querySelector("#pageName")')
        cy.contains('Dashboard')
    })
    
})    
