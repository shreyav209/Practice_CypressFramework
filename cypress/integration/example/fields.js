describe('Name Field Test cases', () => {
    
    it('Check if Name field exists', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.form-group input[name="name"]').should('exist')

    })

    it('Validate the length of the Name', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.form-group input[name="name"]').type('X')
        cy.get(':nth-child(2) > .form-control').type('raha@gmail.com')
        cy.get('#exampleInputPassword1').type('Raha')
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('#inlineRadio2').click()
        cy.get('input[name="bday"]').type('2001-05-24')
        cy.get('input[value="Submit"]').click()
        cy.get(':nth-child(1) > .alert').contains('Name should be at least 2 characters')
    })
    it('Validate Name field is empty', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.form-group input[name="name"]').click()  //without going inside name field,it was considering the locator
        cy.get(':nth-child(2) > .form-control').type('raha@gmail.com')
        cy.get('#exampleInputPassword1').type('Raha')
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('#inlineRadio2').click()
        cy.get('input[name="bday"]').type('2001-05-24')
        cy.get('input[value="Submit"]').click()
        // cy.wait(2000)
        // cy.get('input[value="Submit"]').click()
        cy.get('.alert.alert-danger').contains('Name is required')
    })
    it('Enter Name with Speical Characters', function()
    {
        //Name field  accepts the special characters

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.form-group input[name="name"]').type('John@Doe')
        cy.get(':nth-child(2) > .form-control').type('raha@gmail.com')
        cy.get('#exampleInputPassword1').type('Raha')
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('#inlineRadio2').click()
        cy.get('input[name="bday"]').type('2001-05-24')
        cy.get('input[value="Submit"]').click()
        //cy.get(':nth-child(1) > .alert').contains('Name should be at least 2 characters')
    })
    it('Check spaces',function ()
    {
        //spaces is accepted
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.form-group input[name="name"]').type('       ')
        cy.get(':nth-child(2) > .form-control').type('raha@gmail.com')
        cy.get('#exampleInputPassword1').type('Raha')
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('#inlineRadio2').click()
        cy.get('input[name="bday"]').type('2001-05-24')
        cy.get('input[value="Submit"]').click()
        //cy.get(':nth-child(1) > .alert').contains('Name should be at least 2 characters')
    })
    it('Enter the Name with Number',function()
    {
        //Number with letter is accepted
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.form-group input[name="name"]').type('John123')
        cy.get(':nth-child(2) > .form-control').type('raha@gmail.com')
        cy.get('#exampleInputPassword1').type('Raha')
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('#inlineRadio2').click()
        cy.get('input[name="bday"]').type('2001-05-24')
        cy.get('input[value="Submit"]').click()
        //cy.get(':nth-child(1) > .alert').contains('Name should be at least 2 characters')
    })
})

describe('Email Test Cases', () => {
    it('Check if email field exists',function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .form-control').should('exist')
    })
    it('Email Field is empty', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.form-group input[name="name"]').type('John')
        cy.get(':nth-child(2) > .form-control').click()
        cy.get('#exampleInputPassword1').type('Raha')
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('#inlineRadio2').click()
        cy.get('input[name="bday"]').type('2001-05-24')
        cy.get('input[value="Submit"]').click()
        cy.get('.ng-invalid.ng-dirty > :nth-child(2) > .alert').contains('Email is required')
    })
})

