<h1 align="center">
    <br>
    <a href="live site url">
        <img src="logo" alt="VaxStackUrl" width="150">
    </a>
    <br>
    VaxStack
    <br>
</h1>

# VaxStack: A Simple Appointment Making WebApp for COVID-19 Boosters. 

This web app can be used by patients to signup and login using their credentials to schedule appointments for their COVID-19 Booster. This web app can also be used to edit or delete appointments.

## Motivation for Development

Patients have varying time availability, and waiting times for the pharmacy is a significant challenge. This interactive full stack application addresses this issue with an easy to use appointment management system for patients to schedule their Covid-19 Booster Shot. This project stamps our portfolio during a meaningful time, and is scalable to multiple pharmacies to accelerate the process of administering the booster shot. 
  
## User Story
This appointment should be viewable for both the patient and the pharmacy. 

- AS a patient looking to receive the Covid-19 Booster Shot I WANT to have the ability to schedule an appointment SO THAT my wait time is reduced as much as possible. 

- AS a pharmacy/clinic looking to administer Covid-19 Booster Shots, I WANT the ability to view our patients appointments SO THAT we can opperate effectively and efficiently. 


## Overiview of VaxStack:

The web app will have:
- Time Selections
- User Account Creation
- Appointment Confirmations
- Form data that will be authenticated by front-end before being sent to back-end. 
- Pharmacy Facing Appointment Viewing


## Time Selections/Account Creation

### New Users
- In order to have full functionality, new users are required to select an available time slot and create an account to schedule their appointment. 

### Existing Users
- Existing users are required to login and can edit or cancel their appointment. 


## Frontend:

- Reactjs
  - `npm install`
  - `npm start`
- Bootstrap

## Backend:

- Nodejs & Expressjs
  - `npm install`
  - `npm start`

## Database:

- MySQL (Workbench)
- AWS RDS MySQL

## Technologies Used
- Node.js and Express.js to create a RESTful API.
- Handlebars.js as the templating engine.
- MySQL and the Sequelize ORM for the database.
- Both GET and POST routes for retrieving and adding new data.
- Deployed using Heroku (with data).
- Used at least one new library, package, or technology that we haven’t discussed.
- Have a polished UI & responsive
- Be interactive (i.e., accept and respond to user input).
- Have a folder structure that meets the MVC paradigm.
- Include authentication (express-session and cookies).
- Protect API keys and sensitive information with environment variables.

## Deployed at:
`https://shrouded-ocean-95008.herokuapp.com/`
