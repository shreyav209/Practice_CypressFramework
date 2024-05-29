describe('Login Test Suite',function()
{
    // it('Valid Credentials', function()
    // {
    //     cy.visit('https://automationexercise.com/login')
    //     cy.get('input[data-qa="signup-name"]').type('Test User')
    //     cy.get('input[data-qa="signup-email"]').type('testuser4@gamil.com')
    //     cy.get('button[data-qa="signup-button"]').click()
    //     cy.get('#id_gender2').click()
    //     cy.get('[data-qa="password"]').type('TestUser')        
    //     cy.get('[data-qa="days"]').select('20')
    //     cy.get('[data-qa="months"]').select('June')
    //     cy.get('[data-qa="years"]').select('1999')

    //     cy.get('[data-qa="first_name"]').type('Test')
    //     cy.get('[data-qa="last_name"]').type('User')
    //     cy.get('[data-qa="address"]').type('ABC Building')
    //     cy.get('[data-qa="country"]').select('India')
    //     cy.get('[data-qa="state"]').type('Maharashtra')
    //     cy.get('[data-qa="city"]').type('Mumbai')
    //     cy.get('[data-qa="zipcode"]').type('400893')
    //     cy.get('[data-qa="mobile_number"]').type('9830380009')
    //     cy.get('[data-qa="create-account"]').click()

    //     cy.get('b').should('have.text','Account Created!')
    //     cy.get('[data-qa="continue-button"]').click()
    //     cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

    // })
    it('Email id already exists', function()
    {
        cy.visit('https://automationexercise.com/login')
        cy.get('input[data-qa="signup-name"]').type('Test User')
        cy.get('input[data-qa="signup-email"]').type('testuser4@gamil.com')
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should('have.text','Email Address already exist!')
    })
    it('Username already exists', function()
    {
        cy.visit('https://automationexercise.com/login')
        cy.get('input[data-qa="signup-name"]').type('Test User')
        cy.get('input[data-qa="signup-email"]').type('testuser@gamil.com')
        cy.get('button[data-qa="signup-button"]').click()
        cy.get('.signup-form > form > p').should('have.text','Email Address already exist!')
    })


})