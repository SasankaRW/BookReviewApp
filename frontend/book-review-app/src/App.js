import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import BookReviewApp from './components/BookReviewApp';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-gray-800 hover:text-blue-600"
            >
              Book Review App
            </Link>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<BookReviewApp />} />
          </Routes>
        </main>

        <footer className="bg-white shadow-md mt-6">
          <div className="container mx-auto px-4 py-4 text-center">
            <p className="text-gray-600">
              © 2024 Book Review App. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;