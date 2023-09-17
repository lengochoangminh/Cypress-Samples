/// <reference types="cypress" />

describe('Visual testing login page', () => {
    it('visual testing- capturing base visual', () => {
        // cy.visit('/index_v2.html') // using this url when executing 'npm run test'
           cy.visit('/')
        cy.compareSnapshot('login', {
            capture: 'fullPage',
            errorThreshold: 0.0,
        });
    });
});