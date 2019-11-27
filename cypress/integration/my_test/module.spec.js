/// <reference types="Cypress" />

describe("Testing of TRACKWITHUS WEB", ()=>{

    it("Login and View a module", ()=>{

        cy.visit("http://trackwithus.test.vggdev.com/");


        cy.url().should("include","/account/login");

        cy.get('#Email').type("tom@qa.team");
        cy.get('#Password').type("P@ssword1");

        cy.get(':nth-child(4) > button').click({force:true}); 

        cy.get('img')
        cy.wait(500)
        cy.contains('TrackWithUs')
        cy.contains('Dashboard')

        cy.contains('Admin')
        cy.get('#userAdmin > .subnav-item').click({force:true});

        cy.contains('Manage User Roles')
        cy.contains('Manage Users')
        cy.contains('Manage Devices')
        

        cy.contains('Coordinating State Officers')
        cy.get(':nth-child(1) > :nth-child(4) > #editRole').click({force:true})
        cy.wait(500)
        cy.contains('Close')
        cy.get('.container-fluid > .modal > .modal-dialog > .modal-content > .modal-footer > .btn-custom-red').click({force:true})
        
        cy.contains('Existing Role')

        cy.wait(1000)
        
        cy.contains('Independent Monitors')
        cy.get(':nth-child(2) > :nth-child(4) > #editRole').click({force:true})
        cy.wait(500)
        cy.contains('Close')
        cy.get('.container-fluid > .modal > .modal-dialog > .modal-content > .modal-footer > .btn-custom-red').click({force:true})
        
        cy.contains('Existing Role')
    })
    
})    
