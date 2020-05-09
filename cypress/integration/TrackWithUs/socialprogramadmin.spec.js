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

        cy.contains('Social Programs Admin')
        cy.get('#socialProgramsAdmin > .subnav-item').click({force:true});
      
        cy.wait(5000)
        cy.contains('Manage Social Programmes')
        cy.contains('Manage Business Indicators')

        cy.contains('Add Social Programme')

        cy.get('#createProgramme').click({force:true});
      
        cy.contains('Add Programme & Cluster Form')
        cy.wait(2000)

        cy.get('.programme-form-modal > .modal-dialog > .modal-content > .modal-footer > .btn-custom-red').click({force:true})
        cy.wait(5000)

        cy.contains('Add Social Programme')
       
        cy.wait(5000)
        cy.get('.app-search > .form-control').type('Test VGG').click()
       
        

    })
    
})    
