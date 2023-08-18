describe('Alert or Confirmation Dialog', () => {
    it('Switch to Alert Example', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //Notice that Cypress will auto accept Alerts so we don't need to handle to click on OK button like Selenium
        cy.get('#alertbtn').click()

        //Similar for Confirmation dialog => Cypress will auto accept confirmations
        cy.get('[value="Confirm"]').click()

        //Cause Cypress will auto accept Alerts, therefore we need to use the event "window:alert" to assert the text displayed
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //Cause Cypress will auto accept Alerts, therefore we need to use the event "window:alert" to assert the text displayed
        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('include', 'qaclickacademy')
        cy.go('back')

    })
})