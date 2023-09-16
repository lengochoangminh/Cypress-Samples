# Cypress - Project Samples

## Branch 0 -  Init the new project with examples from Cypress

## Cypress E2E Template With Typescript 
 - The template is used for launching a new project 
 - Part #1: A global variable QE from QELibrary + UI Utils defined the common UI interactions
 - Part #2: A11y Accessibility Test with AXE
   + Require to install 2 dependencies: $ npm install --save-dev cypress-axe axe-core
 - Part #3: Visual test with Applitools
   + Register an Applitool account, then get apiKey
   + Open Terminal, then install the dependencies
      $npm install @applitools/eyes-cypress
      $npx eyes-setup
 - Part #4: Analytics test

## Docker Tutorial
 - Prerequisite: Installed the Docker Desktop + Account to login

### Run the test on multiple browsers using Docker Compose: "docker-compose.yml"
 - Just run one CLI to setup + run all tests under e2e: $docker compose up
 - Using **cypress/included** - This Docker image comes with all operating system dependencies, Cypress, and browsers like Chrome and Firefox installed globally

 ### Running headless Cypress tests locally using Docker Image
  - docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.8.1 --browser electron
  - docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.8.1 --browser electron --spec cypress/e2e/DemoQELibrary.cy.ts
    + Option "it": specifies that the container should be run in interactive mode.
    + Option "-v": argumentsto Docker run are for creating storage space inside a container.
    + Option "$PWD": mounts the current working directory (represented by the "$PWD" variable).