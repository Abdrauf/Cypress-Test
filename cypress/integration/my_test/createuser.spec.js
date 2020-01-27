describe("Testing of TRACKWITHUS WEB", ()=>{

    it("Click Admin and create User", ()=>{


        cy.visit("http://trackwithus.test.vggdev.com/");
        cy.url().should("include","/account/login");

        cy.get('#Email').type('tom@qa.team');
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
        cy.get('#FirstName').type('Cypress')
        cy.wait(50)
        cy.get('#LastName').type('Test')
        cy.get('#Email').type('cypt@qa.team')
        cy.get('#Password').type('123456')
        cy.get('#ConfirmPassword').type('123456')
        cy.get('#Mobile').type('09090912347')
        cy.get('#selectedUserRoleName').click({force:true})
        cy.wait(5000)
        cy.contains('Check All')
        cy.get('#checkAll').click({force:true})
        cy.wait(500)

        cy.get('#SelectedState > option:nth-child(1)').click({force:true})
        cy.contains('Required Submissions Frequency')
        cy.get('#required_submissions_frequency > option:nth-child(2)').click({force:true})
        cy.get('#submitForm').click({force:true})

        cy.contains('Existing Users')

        
    })

    
})    
