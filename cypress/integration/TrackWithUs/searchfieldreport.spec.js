/// <reference types="Cypress" />

describe("Testing of TRACKWITHUS WEB", ()=>{

    it("Login and View a module", ()=>{

        cy.visit("http://trackwithus.test.vggdev.com/");


        cy.url().should("include","/account/login");

        cy.get('#Email').type("faraday@mailinator.com");
        cy.get('#Password').type("P@ssword1");

        cy.get(':nth-child(4) > button').click({force:true}); 
        cy.wait(2000)

        cy.get('img')
        cy.wait(2000)
        cy.contains('TrackWithUs')
        cy.contains('Dashboard')

        cy.contains('Field Reports')
        cy.get('#fieldReports > .subnav-item').click({force:true});
      
        cy.wait(5000)
        cy.contains('Existing Field Reports')

        cy.contains('Search')
        cy.get('.app-search > .form-control').type('National Home Grown School Feeding Programme')
       
        
        cy.wait(5000)
        cy.contains('Existing Field Reports')

    })
    
})    
