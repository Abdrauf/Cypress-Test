/// <reference types="Cypress" />

describe("Testing of SSR WEB", ()=>{

    it("Log Out of the  Application", ()=>{

        cy.visit("http://trackwithus.test.vggdev.com/");


        cy.url().should("include","/account/login");

        cy.get('#Email').type("rotimiriley@qa.team");
        cy.get('#Password').type("oluwaseun2019");

        cy.get(':nth-child(4) > button').click({force:true});

        cy.get('#user').click();

        cy.get(':nth-child(4) > .text-danger').click({force:true});

        
        
        
        

    })
    
})    
