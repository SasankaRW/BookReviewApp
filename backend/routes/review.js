const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();


// Add a new review
router.post('/reviews/', reviewController.addReview);

// Get all reviews
router.get('/reviews/', reviewController.getReviews);

// // Get reviews for a specific book
// router.get('/reviews/:bookTitle', reviewController.getBookReviews);

// Update a review
router.put('/reviews/:reviewId', reviewController.updateReview);

// Delete a review
router.delete('/reviews/:reviewId', reviewController.deleteReview);

module.exports = router;
