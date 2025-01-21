Task Manager App
A simple task management application that allows users to create, manage, and organize tasks. Built using React, Node.js, MongoDB, and JWT authentication.

Features
User registration and login: Users can create accounts and log in with their credentials.
Task management: Create, edit, and delete tasks.
Search functionality: Filter tasks by title or description.
User-specific tasks: Tasks are associated with specific users and displayed only to them.
Pagination: Tasks are loaded in chunks, reducing the amount of data presented at once.
Technologies Used
Frontend: React, Material-UI, Axios, React Router, Cookie handling
Backend: Node.js, Express, MongoDB, JWT authentication
Database: MongoDB (local or MongoDB Atlas)
Authentication: JWT (JSON Web Tokens)
Setup Instructions
Prerequisites
Ensure that you have the following installed:

Node.js (>=14.x)
MongoDB (local or use MongoDB Atlas)
Frontend Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/task-manager.git
cd task-manager
Navigate to the frontend directory:

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
The frontend will be available at http://localhost:3000.

Backend Setup
Navigate to the backend directory:

bash
Copy
Edit
cd server
Install the dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

Create a .env file in the server directory and add the following:

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
The backend will be available at http://localhost:5000.

MongoDB Setup
Make sure that MongoDB is running locally, or use MongoDB Atlas to create a cloud database.

Explanation of Design Choices and Assumptions
JWT Authentication:

To ensure secure user sessions, JWT tokens are used to authenticate requests after login. This token is stored in cookies for easy management.
Task Management:

Tasks are designed to be user-specific. Each user can create, edit, and delete their own tasks, which are stored in the database with a reference to the userid.
MongoDB:

MongoDB was chosen as the database for its flexibility and scalability in handling JSON-like documents, making it a great fit for this application.
Material-UI:

The Material-UI library was chosen for UI components, offering a consistent and responsive design out-of-the-box.
State Management:

React's useState hook is used to manage form data and application states like error messages and task lists.
Additional Features Implemented
Search Bar: Allows users to filter tasks by title or description, making it easier to find specific tasks.
Task Pagination: Limits the number of tasks displayed at once and implements pagination, improving performance and user experience.
Responsive Design: The application is responsive, ensuring a good user experience on both desktop and mobile devices.
API Endpoints
User Routes
POST /api/tasks/user/register

Register a new user.
Request body: { "userid": "user123", "password": "password" }
Response: { "success": true }
POST /api/tasks/user/login

Login and receive a JWT token.
Request body: { "userid": "user123", "password": "password" }
Response: { "token": "jwt-token" }
Task Routes
GET /api/tasks/:userid

Get all tasks for a specific user.
Response: An array of tasks.
POST /api/tasks

Create a new task.
Request body: { "title": "Task title", "description": "Task description", "userid": "user123" }
Response: The created task.
GET /api/tasks/:id

Get a specific task by ID.
Response: The task object.
PUT /api/tasks/:id

Update a specific task.
Request body: { "title": "Updated title", "description": "Updated description" }
Response: The updated task.
DELETE /api/tasks/:id

Delete a specific task.
Response: { "message": "Task deleted successfully" }
Contributing
We welcome contributions! If you’d like to contribute, please follow these steps:

Fork the repository.

Create a new branch:

bash
Copy
Edit
git checkout -b feature/your-feature
Make your changes.

Commit your changes:

bash
Copy
Edit
git commit -am 'Add new feature'
Push to your branch:

bash
Copy
Edit
git push origin feature/your-feature
Create a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Links to Deployed Application
Frontend: https://taskmeneger-forntent.vercel.app/
Backend: https://taskmanager-backend-1-1mjl.onrender.com
