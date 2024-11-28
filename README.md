

# Book Review App

This is a basic **Book Review App** that allows users to view and submit reviews for books. The app is divided into two parts: the **Frontend** and the **Backend**. The **Frontend** is built using React and styled with **Tailwind CSS**, while the **Backend** is powered by Node.js with Express, using MongoDB for storing data.

---

## Project Structure

The project is divided into two main directories:

```
/bookreviewapp
  /frontend        # React frontend code
  /backend         # Node.js/Express backend code
  /README.md       # Project documentation (this file)
```

---

## Features

- **Book Reviews**: Users can add, update, and delete reviews for books.
- **Reviews List**: View books and their associated reviews.
- **User Ratings**: Users can rate books from 1 to 5 stars.
- **Book Information**: Display book title, author, and review details.

---

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (for both frontend and backend)
- **MongoDB** (MongoDB Atlas for cloud-based database)

---

## Installation

### 1. **Backend (Node.js/Express API)**

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure MongoDB**:
   - Set up the `MONGODB_URI` environment variable for MongoDB Atlas or use your local MongoDB setup.

4. **Run the backend server:**
   ```bash
   npm run server
   ```
   This will start the backend API at `http://localhost:8080`.

---

### 2. **Frontend (React + Tailwind CSS)**

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend/book-review-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the frontend server:**
   ```bash
   npm start
   ```
   This will start the React frontend at `http://localhost:3000`.

---

## Running Both Frontend and Backend

To run both the frontend and backend simultaneously:

1. **Backend:**
   - Open a terminal window and navigate to the `backend` folder.
   - Run the command `npm run serve` to start the backend server.

2. **Frontend:**
   - Open another terminal window and navigate to the `frontend/book-review-app` folder.
   - Run the command `npm start` to start the React frontend.

---

Now, you can access the app:

- The **Frontend** will be available at [http://localhost:3000](http://localhost:3000).
- The **Backend** will be available at [http://localhost:8080](http://localhost:8080).

---

## Technologies Used

- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose

---

