/// <reference types="Cypress" />

describe("Testing CBR Web", ()=>{

    it("Login Application", ()=>{

        cy.visit("https://cbr.test.vggdev.com");


       
        cy.get('#exampleInputEmail').type("marky@mailinator.com");
        cy.get('#exampleInputPassword').type("P@ssword21");

        cy.get('#loginButton').click(); 

        cy.wait(9000)
        
        cy.url().should("include","/home/dashboard");
        cy.wait(3000)
        cy.contains('Dashboard')
        cy.contains('National Beneficiaries')
        cy.get('.navbar-collapse > .navbar-nav > .nav-item > .nav-link')
        cy.contains('Marky Tacky')


        cy.wait(5000)
        //User then Log Out
        cy.get('.navbar-collapse > .navbar-nav > .nav-item > .nav-link').click()
        cy.wait(1000)
        cy.contains('Logout')
        cy.get('.dropdown-user > :nth-child(5) > a').click({force:true})
        cy.wait(2000)
        cy.contains('Forgot Password')
        
    })
    
})    
