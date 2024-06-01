describe('Product', function()
{
    const desiredproduct = 'Samsung Note 8'
    it('Add a product to cart', function()
    {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('a[href="/angularpractice/shop"]').click();
        // cy.get('.card-body').find('.card-title').invoke('text').then((text) =>
        // {
        //     cy.log(text)
        //     if
        // })
        cy.get('.card-body').each(($el,index,$list)=>
        {
            //const product = $e1.text();
            const product =$el.find('.card-title').text()
            cy.log(product)
            if(product == 'Samsung Note 8')
                {
                    console.log('if condition')
                   // cy.get('.btn.btn-info').eq(index).click()
                   
                   $el.find('.card > .card-footer').eq(index).click()
                }

        })
    
    })
})

