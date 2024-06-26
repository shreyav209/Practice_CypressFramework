describe('Form Test Suite',function()
{
    it('Validate Form', function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get('.form-group input[name="name"]').type('Raha')
        cy.get(':nth-child(2) > .form-control').type('raha@gmail.com')
        cy.get('#exampleInputPassword1').type('Raha')
        cy.get('#exampleFormControlSelect1').select('Female')
        cy.get('#inlineRadio2').click()
        cy.get('input[name="bday"]').type('2001-05-24')
        cy.get('input[value="Submit"]').click()
        cy.get('.alert').contains('Success! The Form has been submitted successfully!.')
    })
})