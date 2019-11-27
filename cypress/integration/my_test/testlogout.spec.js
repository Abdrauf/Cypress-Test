/// <reference types="Cypress" />

describe("Testing of TRACKWITHUS WEB", ()=>{

    it("Logout of Application", ()=>{

        cy.visit("http://trackwithus.test.vggdev.com/");


        cy.url().should("include","/account/login");

        cy.get('#Email').type("tom@qa.team");
        cy.get('#Password').type("P@ssword1");
        cy.contains('Login')
        cy.get(':nth-child(4) > button').click({force:true}); 

        cy.wait(1000)

        cy.get('img')

        cy.wait(500)

        cy.contains('TrackWithUs')
        cy.wait(500)
        cy.contains('Dashboard')
        cy.wait(800)
        
        cy.get('#user')
        cy.get(':nth-child(4) > .text-danger').click({force:true});


    })
    
})    
