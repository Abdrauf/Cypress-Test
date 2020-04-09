/// <reference types="Cypress" />

describe("Testing of TRACKWITHUS WEB", ()=>{

    it("Login Application", ()=>{

        cy.visit("http://trackwithus.test.vggdev.com/");


        cy.url().should("include","/account/login");

        cy.get('#Email').type("blip@mailinator.com");
        cy.get('#Password').type("P@ssword1");

        cy.get('#loginForm > div:nth-child(4) > button').click(); 

        cy.wait(7000)

        cy.get('img')
        cy.contains('TrackWithUs')
        cy.contains('Dashboard')

        cy.wait(2000)
        cy.get('li.active > .text-primary').click();
    })
    
})    
