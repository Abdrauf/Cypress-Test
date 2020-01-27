/// <reference types="Cypress" />

describe("Testing of TRACKWITHUS WEB", ()=>{

    it("Login Application", ()=>{

        cy.visit("http://trackwithus.test.vggdev.com/");


        cy.url().should("include","/account/login");

        cy.get('#Email').type("test123@qa.team");
        cy.get('#Password').type("P@ssword1");

        cy.get('#loginForm > div:nth-child(4) > button').click(); 

        cy.wait(5000)

        cy.get('img')
        cy.contains('TrackWithUs')
        cy.contains('Dashboard')
    })
    
})    
