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

        // Click And View  Programme
       
        cy.contains('Manage Metrics')
        cy.wait(5000)
        cy.get('.subnav-list > :nth-child(2) > .subnav-item').click({force:true})

        cy.wait(3000)
        cy.contains('Manage Social Programmes')

        cy.get(':nth-child(1) > :nth-child(5) > #editProgramme').click()
        cy.get(2000)
        cy.contains('Edit Programme')
        cy.get('#programmeName').clear().type('New Product')
        cy.wait(1000)
        cy.contains('Update')
        cy.get('#submitForm').click({force:true})
        cy.wait(2000)
        cy.contains('Existing Programmes')

        
    })
    
})    