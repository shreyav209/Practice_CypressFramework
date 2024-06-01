
describe('Product', function()
{
    const product = 'Brocolli - 1 Kg'
    const products = ['Cucumber - 1 Kg','Brocolli - 1 Kg','Tomato - 1 Kg']
    const country ='India'

    it('Add a one product to cart', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type(product)
        cy.wait(2000)
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes(product))
            {
            $el.find('button').click()
            }
            })

            cy.get('.cart-icon').click()
            cy.get('.action-block button[type=button]').contains('PROCEED TO CHECKOUT').click()
            cy.get('button').contains('Place Order').click()
            cy.get('select').select(country);
            cy.get('input[type="checkbox"]').check()
            cy.get('button').contains('Proceed').click()
            cy.pause()
            
    })



    it('Add multiple product to cart', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        products.forEach((desiredproduct) =>
        {
        cy.get('.search-keyword').clear().type(desiredproduct)
        cy.wait(2000)
        cy.get('.products').find('.product').each(($el, index, $list) => {

            const textVeg=$el.find('h4.product-name').text()
            if(textVeg.includes(desiredproduct))
            {
                cy.wrap($el).find('button').click()
            }
            })
        })

            cy.get('.cart-icon').click()
            cy.get('.action-block button[type=button]').contains('PROCEED TO CHECKOUT').click()
            cy.wait(2000)
            let totalPrice = 0
            cy.get('.product-name').each(($el,index,$list) =>
            {
                cy.log($el.text())
                const productadd = $el.text()
                cy.get('td:nth-child(4) p.amount').eq(index).then(function(price)
                {
                    const priceOfProduct = parseFloat(price.text())
                    cy.log(priceOfProduct)
                    totalPrice = totalPrice + priceOfProduct
                    cy.log(totalPrice)
                })
            //     cy.get('.discountAmt').invoke('text').then(function(discountAmtText)
            //     {
            //         const discountAmt = parseFloat(discountAmtText)
            //         cy.log(discountAmt)
            //         totalPrice.should.equal(discountAmt);

            //     })
            })
            //cy.get('tbody > :nth-child(1) > :nth-child(2)').contains()
            cy.get('button').contains('Place Order').click()
            cy.get('select').select(country);
            cy.get('input[type="checkbox"]').check()
            cy.get('button').contains('Proceed').click()
            //cy.pause()
            cy.get('div.wrapperTwo').contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!")
            //cy.get('[style="color:green;font-size:25px"]').should("have.text","Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!")
        
    })

})