/// <reference types="Cypress" />

describe("Testing of SSR WEB", ()=>{

    it("Log Out of the  Application", ()=>{

        cy.visit("http://trackwithus.test.vggdev.com/");


        cy.url().should("include","/account/login");

        cy.get('#Email').type("tom@qa.team");
        cy.get('#Password').type("P@ssword1");

        cy.get(':nth-child(4) > button').click({force:true});

        cy.get(':nth-child(4) > .text-danger').click({force:true});

        
        
        
        

    })
    
})    
