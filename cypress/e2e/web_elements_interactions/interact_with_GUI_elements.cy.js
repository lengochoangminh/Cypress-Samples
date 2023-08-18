describe('Interact with GUI elements', () => {

    beforeEach(function () {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    it('Radio button, Suggestion text box, Dropdown & Checkbox Example ', () => {

        // Radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')

        // Suggestion text box - Auto-complete text box
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) => {
            if ($e1.text() === "India") {
                cy.wrap($e1).click()
            }
        })

        // Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        // Check boxes
        cy.get('[type="checkbox"]').check(['option1', 'option3'])
        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value', 'option2')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    })

    it('Element Display Example - Visible invisible', () => {
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    });

    it('Mouse Hover Example', function () {
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({ force: true })
        // cy.url().should('include','top')
    })

})