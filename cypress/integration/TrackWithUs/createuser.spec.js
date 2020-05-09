describe("Testing of TRACKWITHUS WEB", ()=>{

    it("Click Admin and create User", ()=>{


        cy.visit("http://trackwithus.test.vggdev.com/");
        cy.url().should("include","/account/login");

        cy.get('#Email').type('blip@mailinator.com');
        cy.get('#Password').type('P@ssword1');

        cy.get(':nth-child(4) > button').click({force:true}); 
        cy.wait(9000)

        cy.contains('Admin')
        cy.get('#userAdmin > .subnav-item').click({force:true});

        cy.contains('Manage Users')
        cy.get(':nth-child(2) > .sidenav-item').click({force:true});


        cy.wait(800)
        cy.contains('Add User')
        cy.get('#createUser').click({force:true})
        cy.wait(800)
        cy.get('#FirstName').type('QAT')
        cy.wait(50)
        cy.get('#LastName').type('Train')
        cy.get('#Email').type('cypt31@qa.com')
        cy.get('#Password').type('P@ssword1')
        cy.get('#ConfirmPassword').type('P@ssword1')
        cy.get('#Mobile').type('08022741823')
        cy.wait(5000)
        cy.get('#selectedUserRoleName').select("GSV ME").should('have.value','59')
       
        cy.wait(5000)
        cy.contains('Check All')
        cy.get('#checkAll').click({force:true})
        cy.wait(500)

        cy.get('#SelectedState').select('Adamawa State').should('have.value','3')
        cy.contains('Required Submissions Frequency')
        cy.get('#required_submissions_frequency').select('Monthly').should('have.value','3')
        cy.get('#submitForm').click({force:true})
        cy.contains('Existing Users')

        
    })

    
})    
