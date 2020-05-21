/// <reference types="Cypress" />

describe("Testing of TRACKWITHUS WEB", ()=>{
    
    beforeEach("Testing this particular it", ()=>{

        cy.visit("http://trackwithus.test.vggdev.com/");


        cy.url().should("include","/account/login");

        cy.get('#Email').type("blip@mailinator.com");
        cy.get('#Password').type("P@ssword21");

        cy.get('#loginForm > div:nth-child(4) > button').click({force:true}); 
        cy.wait(7000)

        cy.on('window:confirm', (str) => {
            expect(str).to.eq('Login was Successful')
            return false;
        })

        cy.on('window:confirm', (message) => {
            expect(message).to.equal('Login was Successful')
            called = true
        })

    }) 



    it("Login to the Application", ()=>{

        
        cy.wait(7000)

        cy.get('img')
        cy.contains('TrackWithUs')
        cy.contains('Dashboard')

        cy.wait(2000)
        cy.get('li.active > .text-primary').click();
    })


    it(" View Report Field Module", ()=>{

        cy.contains('Field Reports')
        cy.get('#fieldReports > .subnav-item').click({force:true});
      
        cy.wait(5000)
        cy.contains('Existing Field Reports')

        cy.wait(4000)
        cy.get(':nth-child(1) > :nth-child(7) > #editReport').click({force:true})
        cy.wait(5000)

        cy.contains('View Report')
       
        
        cy.wait(5000)
        cy.contains('Close')
        cy.get('#processFormModal > .modal-dialog > .modal-content > .modal-footer > .btn-custom-red').click({force:true})
        cy.wait(2000)
        cy.contains('Existing Field Reports')

    })

    it("Search Field Report", ()=>{

       
        cy.wait(2000)

        cy.contains('Field Reports')
        cy.get('#fieldReports > .subnav-item').click({force:true});
      
        cy.wait(5000)
        cy.contains('Existing Field Reports')

        cy.contains('Search')
        cy.get('.app-search > .form-control').type('National Home Grown School Feeding Programme')
       
        
        cy.wait(5000)
        cy.contains('Existing Field Reports')

    })

    it("View Field Report Template", ()=>{

       
        cy.wait(2000)


        cy.contains('Field Report Template')
        cy.get('#fieldReportTemplates > .subnav-item').click({force:true});
      
        cy.wait(5000)
        cy.contains('Existing Report Templates')

        cy.get('#cloneAuthoredForm22').click({force:true})
        cy.wait(5000)

        cy.contains('Field Report Template')
       
        cy.wait(5000)
        cy.contains('Save')
        cy.get('#saveFieldReport').click({force:true})
        cy.wait(2000)
        cy.contains('Existing Report Templates')

    })
    
    it("View and Search Social Programs Admin", ()=>{

       
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

    it("View Issues Management", ()=>{

        

        cy.contains('Issue Management')
        cy.get('#issuesManagement > .subnav-item').click({force:true});
      
        cy.wait(5000)
        cy.contains('Reported Issues')

        cy.get(':nth-child(1) > .subnav-item').click()

    })

    it("View People Performance And Search", ()=>{


        cy.contains('People Performance')
        cy.get('#peoplePerformance > .subnav-item').click({force:true});

        cy.wait(5000)
        cy.contains('Performance Analysis')

        cy.get('.app-search > .form-control').type("NSIP-MONITOR-1603")

        cy.contains('Showing 1 to 1 of 1 entries')


    })

    it("Filter Report Comparison", ()=>{

        
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


      

    })
    it("Edit User role", ()=>{

        cy.contains('Admin')
        cy.get('#userAdmin > .subnav-item').click({force:true});
        cy.wait(2000)

        cy.contains('Manage User Roles')
        cy.contains('Manage Users')
        cy.contains('Manage Devices')
        
        cy.wait(1000)
        cy.contains('Existing Roles')
        cy.get(':nth-child(1) > :nth-child(4) > #editRole').click({force:true})

        cy.wait(2000)
        cy.contains('Close')
        cy.get('.container-fluid > .modal > .modal-dialog > .modal-content > .modal-footer > .btn-custom-red').click({force:true})
        
        cy.contains('Existing Role')

        cy.wait(1000)
        cy.contains('Role Name')
        cy.get(':nth-child(1) > :nth-child(4) > #editRole').click({force:true})
        cy.wait(2000)
        cy.contains('Close')
        cy.get('.container-fluid > .modal > .modal-dialog > .modal-content > .modal-footer > .btn-custom-red').click({force:true})
        
        cy.contains('Existing Role')
    })

    it("Edit A user", ()=>{

        
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
    
        cy.wait(2000)
        cy.get('#submitForm').click({force:true})
        cy.contains('Submit')

        cy.wait(5000)
        cy.contains('Add User')

        cy.wait(2000)
        
        cy.get('#user').click()
        cy.wait(5000)
        cy.get(':nth-child(4) > .text-danger').click({force:true});
    })
   
})    
