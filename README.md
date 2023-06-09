# Frontend for Funeral-services API with administrator authorization system. Work with the database of clients in the personal accounts who requested an application (deletion, editing data).

Repository for the frontend of the Funeral-services project.
The work of Ivan Hill.

## References
(Open link in a new window: ctrl + shift + link)
* [Link to server posted working frontend part of the application:
[https://](https://silent-hill.netlify.app/)
 If the link does not work, you can test the applications locally, deployment instructions [below](#Deployment Instructions)

## How to use the site
* To use a personal account, you need to enter your personal account by link "Login", which is located in the footer, and fill out an authorization form using email/password:
* Adding new customers through the Order form on the main page.

Technologies used in the project:

* Flexbox, Grid
* Nested BEM layout
* Responsive layout
* JS
* popup
* Form validation
* OOP
* JS Classes
* webpack
* React, useState, useEffect, useHistory


### Breakpoints in the project:
* 1200px
* 992px
* 768px
* 575px
* 320px

### Deployment instructions:
* Clone the project: git clone git@github.com:https://github.com/ivan-hill/silent-hills
* Go to the root directory and install dependencies: npm install
* Run frontend part of the application on port 3000: npm run start
* To run the application you must also clone the backend: git clone git@github.com:
* Go to the root directory and install dependencies: npm install
* Run backend part of the application on port 3001: npm run dev
* Because only the administrator can access the backend, there is no registration in the frontend interface for security reasons. In order to register a new user, it is necessary through Postman, to send a POST request with body: {"email": "your email", "password": "your password"} to http://localhost:3001/signup. * To use the personal account, you need to enter the personal account, and you need to enter password.
* 768px
* 575px
* 320px

#   s i l e n t - h i l l s 
 
 
