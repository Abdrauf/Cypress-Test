/// <reference types="Cypress" />

describe("Testing of BIR WEB", ()=>{

    it("Login Application", ()=>{

        cy.visit("https://nsioreporting2.test.vggdev.com/");


        cy.url().should("include","/Account/Login");

        cy.get('#Email').type("troy@mailinator.com");
        cy.get('#Password').type("P@ssword1");

        cy.get('#loginForm > div:nth-child(4) > button').click({force:true}); 

        cy.wait(7000)

        cy.get('img')
        cy.contains('Business Intelligence & Reporting Tool')
        cy.contains('Dashboard')

        cy.wait(2000)
        cy.contains('Welcome, Troy')

        // User LogOut
        cy.wait(2000)
        cy.get('#user').click()
        cy.contains('Log Out')
        cy.get('.dropdown-menu > :nth-child(4) > .text-danger').click()
        cy.wait(3000)
        //Log Out Confirmation
        cy.contains('Forgot your password')

    })
    
})    