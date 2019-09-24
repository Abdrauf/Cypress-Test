/// <reference types="Cypress" />

describe("Testing of SSR WEB", ()=>{

    it("Login Application", ()=>{

        cy.visit("http://trackwithus.test.vggdev.com/");


        cy.url().should("include","/account/login");

        cy.get('#Email').type("rotimiriley@qa.team");
        cy.get('#Password').type("oluwaseun2019");

        cy.get(':nth-child(4) > button').click({force:true});

        cy.get('[style="border-left:2px solid gold; margin:10px;"] > .card > h3.text-primary');

        cy.get('#fieldReports > .subnav-item').click();

        cy.get(':nth-child(1) > :nth-child(7) > #editReport').click();

        cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > .row > :nth-child(2) > div > .read-only');

        cy.get('#processFormModal > .modal-dialog > .modal-content > .modal-footer > .btn-custom-red').click();

    })
    
})    
