# Flexmoney Assignment

This is a  web application that works as a form for enrollment os students for a Yoga Class.

- Users are supposed to fill in the details - name, age and their preferreed batch.
- If the data is valid, they will be promoted of the successful enrollment.
- If the data is invalid, i.e no name or age is provided, then the user is prompted to fill in the proper details.
- The users can view all of the enrolled users and their batches.

Hosted URL: https://flexmoney-assign-akshith.netlify.app


## Screenshots

**Dashboard**
![Screenshot 1](https://i.imgur.com/TJrjcAQ.png)

## ER Diagram


![Screenshot 2](https://i.imgur.com/JUHgru0.png)




## Features Implemented

### Frontend Features

- Users can fill out the Yoga Class Admission Form to enroll in monthly classes.
- The form includes fields for the participant's full name, age, and choice of batch.
- Validation ensures that all required fields are filled out before submission.
- Upon successful form submission, a Snackbar displays either an "Enrolled successfully" message or an error message.
- A list of enrolled users, including their name, age, and batch, is displayed at the bottom of the form.
- Users can view the enrollment status and details in a visually appealing and well-aligned design.

### Backend Features

- An Express server is set up to handle backend functionalities.
- MongoDB is used as the database to store information about enrolled participants.
- The MongoDB schema includes the following fields:
     - `name`: The full name of the participant.
     - `age`: The age of the participant.
     - `selectedBatch`: The chosen batch for the participant.
- A RESTful API is implemented to handle form submissions, database operations, and fetching enrolled users.
- Basic validation ensures that all required data is provided before storing it in the database.
- Assumed payment function CompletePayment() is called upon form submission (mocked for demonstration purposes).


## Technologies, Libraries, and Packages Used

The project utilizes the following technologies, libraries, and packages:

- **React.js**: A JavaScript library for building user interfaces.
- **Material-UI**: A React UI framework that follows Material Design principles, used for styling the frontend in a visually appealing manner.
- **Node.js**: A JavaScript runtime environment.
- **Express.js**: A flexible and minimal web application framework for Node.js, used to set up the backend server.
- **MongoDB**: A NoSQL database used to store information about enrolled participants.
- **React Router**: A declarative routing library for React applications, facilitating navigation in the frontend.
- **Axios**: A promise-based HTTP client for the browser and Node.js, used for making efficient HTTP requests to the backend.
- **CORS**: A package that enables Cross-Origin Resource Sharing support for the server, allowing the frontend to communicate with the backend.
- **dotenv**: A package used for managing environment variables, ensuring sensitive information is kept secure.
- **Mongoose**: A MongoDB object modeling library for Node.js, used for database modeling and management.
- **Nodemon**: A development utility that automatically restarts the server on code changes, improving the development workflow.
- **Snackbar Component (Material-UI)**: Used to display messages to the user based on the outcome of form submission.
- **Container Component (Material-UI)**: Used for structuring and organizing the layout in a visually appealing manner.
