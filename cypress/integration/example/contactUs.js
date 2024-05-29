describe('ContactUs Test Suite',function()
{
    it('Fill the Contact Us Form', function()
    {
        cy.visit('https://automationexercise.com/login')
        cy.get(':nth-child(8) > a').click()
        cy.get('[data-qa="name"]').type('Test User')
        cy.get('[data-qa="email"]').type('feedback@automationexercise.com')
        cy.get('[data-qa="subject"]').type('Contact Us')
        cy.get('[data-qa="message"]').type('Automation : Cypress')
        cy.get('[data-qa="submit-button"]').click()
        cy.get('.status').should('have.text','Success! Your details have been submitted successfully.')
    })
    
})
