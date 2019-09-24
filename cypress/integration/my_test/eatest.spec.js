/// <reference types="Cypress" />

describe("Testing of SSR WEB", ()=>{

    it("Login Application", ()=>{

        cy.visit("http://ssr.test.vggdev.com/");

        
        cy.contains("Login").click();

        cy.url().should("include","/userlogin");
        
        cy.get('#defaultFormCardNameEx').type("sneak@qa.team");
        cy.get('#defaultFormCardEmailEx').type("YxfX7BuR");

        cy.get('span').click({force:true});

        cy.url().should("include","/home/dashboard");

// Click Manage Data Set-Up
        cy.get('.sidebar-menu > :nth-child(3) > :nth-child(1) > :nth-child(2)')

        cy.get('[style="display: block;"] > :nth-child(1) > [href="#"] > :nth-child(2)');
        cy.get(':nth-child(2) > .menu-open > .treeview-menu > :nth-child(1) > a');
        
// click create Assert
        cy.get('.panel-button > span')

        cy.get('#name').type("molue");

        cy.get('.button').click();






    })
})