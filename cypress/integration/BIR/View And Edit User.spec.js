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
        

        //View Admin
        cy.contains('Admin')
        cy.wait(5000)
        cy.get('.subnav-list > :nth-child(3) > .subnav-item').click({force:true})

        cy.wait(3000)
        cy.contains('User Management')

        cy.contains('Manage User')

        cy.get(':nth-child(1) > .sidenav-item').click({force:true})
        cy.get(2000)
        cy.get(':nth-child(1) > :nth-child(6) > #editUser').click({force:true})
        cy.contains('Edit User')
        cy.wait(500)
        cy.get('#FirstName').clear().type('Oshodi')
        cy.wait(1000)
        cy.contains('Submit')
        cy.get('#submitForm').click({force:true})
        cy.wait(2000)
        cy.contains('Existing Users')

        
    })
    
})    