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

        cy.contains('Admin')
        cy.get('#userAdmin > .subnav-item').click({force:true});
      
        cy.wait(1000)
        cy.contains('Manage Users')
        cy.get('#sidenavManageUser > .sidenav-item').click({force:true})

    
        cy.wait(5000)
       
        cy.contains('Full Name')
        cy.get(':nth-child(1) > :nth-child(7) > #editUser').click({force:true})
        cy.wait(2000)
        cy.get('#MiddleName').clear().type('Gof')
        cy.wait(1000)
       // cy.get('#MiddleName').type('Parrot')
        cy.wait(2000)
        cy.get('#submitForm').click({force:true})
        cy.contains('Submit')

        cy.wait(5000)
        cy.contains('Add User')
    })
    
})    
