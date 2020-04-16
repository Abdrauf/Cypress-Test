/// <reference types="Cypress" />

describe("Testing of TRACKWITHUS WEB", ()=>{

    it("Logout of Application", ()=>{

        cy.visit("http://trackwithus.test.vggdev.com/");


        cy.url().should("include","/account/login");

        cy.get('#Email').type("blip@mailinator.com");
        cy.get('#Password').type("P@ssword1");
        cy.contains('Login')
        cy.get(':nth-child(4) > button').click({force:true}); 

        cy.wait(5000)

        cy.get('img')

        cy.wait(500)

        cy.contains('TrackWithUs')
        cy.wait(500)
        cy.contains('Dashboard')
        cy.wait(2000)
        
        cy.get('#user').click()
        cy.wait(5000)
        cy.get(':nth-child(4) > .text-danger').click({force:true});


    })
    
})    
