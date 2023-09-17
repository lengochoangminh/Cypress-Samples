# Cypress - Project Samples

## Visual Test with the plugin "cypress-visual-regression"
 - Visual testing is a way to programmatically check your application’s visual aspects, such as layouts, responsive design, and more. In visual testing, you compare the appearance of each page in different browsers and at different screen resolutions, and capture the differences as image snapshots.
 - Step #1: Run CLI **npm run base** to generate the base images into cypress/snapshots/base
 - Step #2: Update the url to '/index_v2.html' in cypress/e2e/visualtest.cy.js to make the different points
 - Step #3: Run CLI **npm run test** to generate the actual & different images into cypress/snapshots/actual & cypress/snapshots/diff