# Task Manager App

A simple task management application built with React, Node.js, and MongoDB. This app allows users to register, log in, create, update, and delete tasks. It also features a search bar to filter tasks and displays only the tasks associated with the logged-in user.

---

## Features

- **User Registration & Login**: Register new users and log in with their credentials.
- **Task Management**:
  - Create, update, and delete tasks.
  - Search tasks by title or description.
  - Display only tasks associated with the logged-in user.
  - Pagination to load tasks in chunks (3 tasks per page).

---

## Technologies Used

- **Frontend**: 
  - React, Material-UI, Axios, React Router, Cookie handling
- **Backend**: 
  - Node.js, Express, MongoDB, JWT Authentication
- **Database**: 
  - MongoDB
- **Authentication**: 
  - JWT (JSON Web Tokens)

---

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (>=14.x)
- **MongoDB** (local or MongoDB Atlas)

---

### Clone the Repository

To get started, clone the repository:

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
Frontend Setup
Navigate to the client directory:

bash
Copy
Edit
cd client
Install the dependencies:

bash
Copy
Edit
npm install
Start the React app:

bash
Copy
Edit
npm start
The app will be available at http://localhost:3000.

Backend Setup
Navigate to the server directory:

bash
Copy
Edit
cd server
Install the dependencies:

bash
Copy
Edit
npm install
Set up environment variables for MongoDB URI and JWT secret. You can create a .env file in the server directory:

bash
Copy
Edit
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=yourSecretKey
Start the backend server:

bash
Copy
Edit
npm start
The server will be available at http://localhost:5000.

MongoDB Setup
Ensure your MongoDB database is running locally or use MongoDB Atlas to create a cloud database. Update the MONGODB_URI in your .env file accordingly.

Usage
Sign Up: Navigate to the sign-up page and create an account by providing a user ID and password.
Login: After signing up, log in with your credentials.
Task Management: Once logged in, you can:
Create new tasks
Edit or delete existing tasks
Search for tasks by title or description
Task Display: Tasks are displayed in reverse order, showing the most recent tasks first. Pagination is implemented to load tasks in chunks (3 tasks per page).
API Endpoints
User Routes
POST /api/tasks/user/register: Register a new user.

Request Body: { "userid": "user123", "password": "password" }
Response: { "success": true }
POST /api/tasks/user/login: Login and receive a JWT token.

Request Body: { "userid": "user123", "password": "password" }
Response: { "token": "jwt-token" }
Task Routes
GET /api/tasks/:userid: Get all tasks for a specific user.

Response: An array of tasks.
POST /api/tasks: Create a new task.

Request Body: { "title": "Task title", "description": "Task description", "userid": "user123" }
Response: The created task.
GET /api/tasks/:id: Get a specific task by ID.

Response: The task object.
PUT /api/tasks/:id: Update a specific task.

Request Body: { "title": "Updated title", "description": "Updated description" }
Response: The updated task.
DELETE /api/tasks/:id: Delete a specific task.

Response: { "message": "Task deleted successfully" }
Contributing
If you'd like to contribute to this project, feel free to fork the repository, make your changes, and create a pull request. Please follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature/your-feature.
Make your changes.
Commit your changes: git commit -am 'Add new feature'.
Push to your branch: git push origin feature/your-feature.
Create a new pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Notes
Update yourusername in the repository URL to your GitHub username.
You can add any additional details such as deployment instructions or troubleshooting steps depending on your requirements.
Links to Deployed Application
Frontend: [Your Frontend URL]
Backend: [Your Backend URL]
markdown
Copy
Edit

---

### Key Features of This `README.md`:

- **Clear section divisions**: Easy to navigate with the use of headings and subheadings.
- **Code blocks**: Proper formatting for terminal commands, code snippets, and JSON data for better readability.
- **Instructions**: Step-by-step guidance for setup and usage.
- **Links**: Placeholder for your deployed application URLs.
- **Contributing section**: Instructions for contributing to the project with a clear workflow.

This `README.md` file will be much more professional and readable for anyone setting up or cont
