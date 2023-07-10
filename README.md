# Issue Tracker application 

## About
A web application to track issues/bugs for a project.This application allows users to manage and track issues/bugs related to different projects. It provides functionalities to create projects, add issues to projects, and filter/search issues based on labels, author, title, and description.

## Technology Used
- Node.js
- Express.js
- MongoDB
- EJS (Embedded JavaScript) templating engine


## Local Setup
To set up the project locally, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/arpitjain310/issue-tracker-system.git
   cd issue-tracker-system
   ```
2. Install the dependencies:

    ```
    npm install
    ```

3. Create a .env file in the root directory and add the following environment variables:

    ```
    PORT=<port-number>
    MONGODB_URI=<mongodb-uri>
    ```
Replace <port-number> with the desired port number for the server, and <mongodb-uri> with the URI to your MongoDB database.

4. Start the application:

    ```
    npm start
    ```

Open your web browser and visit http://localhost:< port-number > to access the application.

## Directory Structure

* config: Contains the configuration files, including the MongoDB connection setup.
* controllers: Handles the business logic for each route.
* models: Defines the database models and schemas.
* routes: Defines the API routes and their corresponding controller actions.
* views: Contains the EJS templates for rendering views.