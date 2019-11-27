/// <reference types="Cypress" />

describe("Testing of TRACK WITH US WEB", ()=>{

    it("Login Application", ()=>{

        cy.visit("http://trackwithus.test.vggdev.com/");


        cy.url().should("include","/account/login");

        cy.get('#Email').type("tom@qa.team");
        cy.get('#Password').type("P@ssword1");

        cy.get(':nth-child(4) > button').click({force:true});
        cy.get('body')
        cy.get('.logo-img')

        cy.get("//a[contains(@class,'subnav-item')][contains(text(),'Field Reports')]").click();
        cy.get("//h4[@class='panel-title']");

    })
    
})    
