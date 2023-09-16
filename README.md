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

### Running headless Cypress tests locally using Docker File 
  - Docker File Walkthrough
   + FROM cypress/included:12.8.1
   + WORKDIR /app: It sets the working directory for any subsequent commands to /app. This means that any following commands, such as "COPY", "RUN", or "CMD", will be performed within this directory.
   + COPY . .: It copies all the files from the current directory to the /app directory in the Docker image. The first “.” refers to the source directory on the host machine, and the second “.” refers to the destination directory within the container.
   + RUN npm install: It installs the dependencies for the project using npm.
   + CMD ["npm", "run", "npx cypress run"]: It specifies the command that will be executed when a container is started from this image. It runs the cypress run command using npm.
  - Building the Docker Image : docker build -t <image_name>
  - Run the Docker image after building and execute the tests: docker run imagename:tagname

### Running Cypress tests in Docker Container on CI/CD (GitHub Actions)
 - Create a workflow file at .github/workflows/main.yml
  + Trigger condition “on [push]”. Whenever there would be code push to the remote branch, this workflow would be executed.
  + The first step, would checkout the code from the GitHub repository using GitHub Actions “actions/checkout@v3”.
  + The second step would run the Cypress tests: “cypress-io/github-action@v5”. This action provides npm installation, custom caching, and additional configuration options and simplifies the setup of advanced workflows using Cypress with GitHub Actions platform.
- Commit & push your code to github
- Login github account > Select Actions to see the task will be executed