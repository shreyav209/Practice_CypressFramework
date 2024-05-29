describe('Login Test Suite',function()
{
    const veg ='Brocolli - 1 Kg'
    const password ='secret_sauce'
    const product =['Winter Top','Full Sleeves Top Cherry - Pink']
    it('Valid Credentials', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.wait(2000)

        cy.get('.products').find('.product').each(($el, index, $list) => {
 
            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            {
            $el.find('button').click()
            }
            })
     })
})
