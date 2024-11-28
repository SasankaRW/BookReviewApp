# Book Review App

This is a basic Book Review App that allows users to view and submit reviews for books. The app is divided into two parts: the Frontend and the Backend. The Frontend is built using React, and the Backend is powered by Node.js with Express, using MongoDB for storing data.

# Project Structure
The project is divided into two main directories:

/bookreviewapp
  /frontend        # React frontend code
  /backend         # Node.js/Express backend code
  /README.md       # Project documentation (this file)
  
# Features
Book Reviews: Users can add, update, and delete reviews for books.
Reviews List: View Reviews and their associated reviews.
User Ratings: Users can rate books from 1 to 5 stars.
Book Information: Display book title, author, and review details.

# Prerequisites
Before running this project, make sure you have the following installed:

Node.js (for both frontend and backend)
MongoDB (MongoDB Atlas for cloud-based database)

# Installation

1. Backend (Node.js/Express API)
Navigate to the backend directory:

cd backend
Install dependencies:
npm install
configure the MONGODB_URI environment variable for MongoDB Atlas.

Run the backend server:
npm run serve

This will start the backend API at http://localhost:8080.

2. Frontend (React)
Navigate to the frontend directory:

cd frontend\book-review-app
Install dependencies:
npm install

Run the frontend server:
npm start
This will start the frontend React app at http://localhost:3000.

Running Both Frontend and Backend
To run both the frontend and backend simultaneously:

Backend:
Open a terminal window and navigate to the backend folder.
Run the command npm start to start the backend server.
Frontend:
Open another terminal window and navigate to the book-review-app folder.
Run the command npm start to start the React frontend.
Now, you can access the app:

The Frontend will be available at http://localhost:3000.
The Backend will be available at http://localhost:8080.

# Technologies Used
Frontend: React, Axios
Backend: Node.js, Express, MongoDB, Mongoose
