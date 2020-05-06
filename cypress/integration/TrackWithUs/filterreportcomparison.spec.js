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

        cy.contains('Report Comparison')
        cy.get('#reportComparison > .subnav-item').click({force:true});
      
        cy.wait(5000)
        cy.contains('Report Comparison Data')

        cy.get('#filterGrid').click()
        cy.get('#program').select('National Home Grown School Feeding Programme').should('have.value','4')
        cy.get('#selected_month').select('March').should('have.value','3')
        cy.get('#selected_year').select('2020')
        cy.get('#filterForm').click()

        cy.wait(6000)
        
        cy.contains('Report Comparison Data')

        cy.contains('Showing 1 to 1 of 1 entries')


        cy.get(':nth-child(1) > .subnav-item').click()

    })
    
})    
