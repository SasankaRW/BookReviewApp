import React, { useState, useEffect } from 'react';
import reviewService from '../services/api';

const StarRating = ({ rating, onRatingChange }) => {
  return (
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`text-2xl ${
            star <= rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
          onClick={() => onRatingChange(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
};

const BookReviewApp = () => {
  const [reviews, setReviews] = useState([]);
  const [currentReview, setCurrentReview] = useState({
    bookTitle: '',
    author: '',
    user: 'Me',
    rating: 1,
    reviewText: ''
  });
  const [editingReview, setEditingReview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const data = await reviewService.getAllReviews();
      const sortedReviews = data.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      setReviews(sortedReviews);
    } catch (error) {
      alert('Failed to fetch reviews');
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentReview((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setCurrentReview((prev) => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingReview) {
        await reviewService.updateReview(editingReview._id, currentReview);
      } else {
        await reviewService.createReview(currentReview);
      }
      fetchReviews();
      resetForm();
      closeModal();
    } catch (error) {
      alert('Failed to submit review');
    }
  };

  const resetForm = () => {
    setCurrentReview({
      bookTitle: '',
      author: '',
      user: 'Me',
      rating: 1,
      reviewText: ''
    });
    setEditingReview(null);
  };

  const openEditModal = (review) => {
    setEditingReview(review);
    setCurrentReview({
      bookTitle: review.bookTitle,
      author: review.author,
      user: review.user,
      rating: review.rating,
      reviewText: review.reviewText
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const handleDelete = async (review) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      try {
        await reviewService.deleteReview(review._id);
        fetchReviews();
      } catch (error) {
        alert('Failed to delete review');
      }
    }
  };

  const EditModal = () => {
    if (!isModalOpen) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-2xl font-bold mb-4">Edit Review</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="bookTitle"
              value={currentReview.bookTitle}
              onChange={handleInputChange}
              placeholder="Book Title"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="author"
              value={currentReview.author}
              onChange={handleInputChange}
              placeholder="Author"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="user"
              value={currentReview.user}
              onChange={handleInputChange}
              placeholder="Reviewer"
              className="w-full p-2 border rounded"
              required
            />
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Rating
              </label>
              <StarRating
                rating={currentReview.rating}
                onRatingChange={handleRatingChange}
              />
            </div>
            <textarea
              name="reviewText"
              value={currentReview.reviewText}
              onChange={handleInputChange}
              placeholder="Write your review here..."
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
            <div className="flex space-x-2">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >
                Update Review
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="w-full bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Add New Book Review</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="bookTitle"
            value={currentReview.bookTitle}
            onChange={handleInputChange}
            placeholder="Book Title"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="author"
            value={currentReview.author}
            onChange={handleInputChange}
            placeholder="Author"
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="user"
            value={currentReview.user}
            onChange={handleInputChange}
            placeholder="Reviewer"
            className="w-full p-2 border rounded"
            required
          />
          
          <StarRating
                rating={currentReview.rating}
                onRatingChange={handleRatingChange}
          />
          <textarea
            name="reviewText"
            value={currentReview.reviewText}
            onChange={handleInputChange}
            placeholder="Write your review here..."
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit Review
          </button>
        </form>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Book Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-center text-gray-500">No reviews yet. Add your first review!</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div 
                key={review._id.$oid} 
                className="border p-4 rounded-lg flex justify-between items-start"
              >
                <div>
                  <h3 className="font-bold text-lg">{review.bookTitle}</h3>
                  <p className="text-gray-600">by {review.author}</p>
                  <p className="text-gray-600">Reviewer: {review.user}</p>
                  <p className="text-yellow-500">
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </p>
                  <p className="mt-2">{review.reviewText}</p>
                  {review.dateAdded && (
                     <p className="text-sm text-gray-500 mt-1">
                     Added on: {new Date(review.dateAdded).toLocaleString()}
                   </p>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => openEditModal(review)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(review)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <EditModal />
    </div>
  );
};

export default BookReviewApp;