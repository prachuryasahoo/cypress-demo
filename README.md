# Project description

This project demonstrates how a cypress.env.json file can be used to secure user login credentials in a web application (Demoblaze).

## Pre-requisites

User should have cypress and node.js installed in their system(s).

## Steps

1.Import the project directly to your desired IDE.

2.Create a copy of 'cypress.env.example.json' file and add your details as below:
  
test : Replace with your environment name/type

username : Add your username
  
password : Add your password

3.Run the below commands:
  
npm i
  
npm run cypress:open

## How to use the cypress.env.json file

The env file can be used to create multiple variables based on the environment used for execution.

NOTE: The cypress.env.json file is added to .gitignore to ensure the user credentials are secure.

References:
 
https://docs.cypress.io/guides/guides/environment-variables#Option-2-cypress-env-json

https://levelup.gitconnected.com/environment-variables-in-cypress-end-to-end-testing-e2f20acd6a86
