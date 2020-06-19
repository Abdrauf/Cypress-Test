/// <reference types="Cypress" />

describe ('Total BI Test web', function () {
    this.beforeAll('Login BI test web' , function () {
 
        cy.visit("http://ekedc-bi-web.staging.vggdev.com")
    }) 
    this.beforeEach('Login to BI test web', function() {
 
        cy.visit('http://ekedc-bi-web.staging.vggdev.com')
        cy.wait(3000)
        cy.get('#Email').type('clientadmin@powertechnigeria.com');
     cy.get('#Password').type('password1');   
     cy.get(':nth-child(4) > button').click({multiple:true}); 
         cy.wait(2000)
        
        })
//Create New User
        it('Create a new User',function() {
            cy.get('.subnav-list > :nth-child(3) > .subnav-item').click({multiple:true});
            cy.get('.navbar-header > div').click({multiple:true});
            cy.get('.subnav-list > :nth-child(3) > .subnav-item').click({multiple:true});
            cy.get(':nth-child(1) > .sidenav-item').click({force: true}); 
            cy.wait(800)
            cy.get('#createUser').click({force:true})
            cy,wait (4000)
        
            cy.get('#userMgtModal').cick()
      
           cy.get('#FirstName').type('oky')
           cy.get('#LastName').type('Training')
     
           cy.get('#Email').type('okay@mailinator.com')
     
           cy.get('#Password').type('password1')
     
           cy.get('#ConfirmPassword').type('password1')
     
           cy.get('#Mobile').type('08062741123')
   
           cy.wait(5000)
    
           cy.get("#SelectedUserRoleName").select("Disco Operative").should('have.value','114')
      
           cy.wait(5000)
     
           cy.contains('Check All')
    
           cy.get('#checkAll').click({force:true})
   
           cy.wait(5000)
           cy.get('#selectedAdminScope').select('National').should('have.value','2')
 
      
           cy.get('#submitForm').click({force:true})
 
        })
 
it('Edit User',function(){
    cy.contains('Existing Users')
    cy.get(':nth-child(5) > :nth-child(1) > .panel > .panel-body')
 
    cy.get(':nth-child(1) > :nth-child(6) > #editUser').click()
 
cy.get('#FirstName').type('okychi')
 
         cy.get('#LastName').type('best')
 
         cy.get('#Email').type('okay@mailinator.com')
 
         cy.get('#Mobile').type('08092751420')
         cy.wait(5000)
 
         cy.contains('Check All')
        
      cy.get('#checkAll').click({force:true})
       
       cy.wait(5000)
 
    })
 
    this.afterEach('Logout', function(){
        cy.get('dropdown user-box open').click({force:true})
        cy.get('.dropdown-menu > :nth-child(4) > .text-danger').click()
    })
})