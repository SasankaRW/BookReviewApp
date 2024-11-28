const mongoose = require('mongoose');
const Review = require('../models/review');


// Add a new review
exports.addReview = async (req, res) => {
    try {
        const { bookTitle, author, user, rating, reviewText } = req.body;

        // Validate required fields
        if (!bookTitle || !author || !user || !rating || !reviewText) {
            return res.status(400).json({ message: 'All fields are required: bookTitle, author, user, rating, reviewText.' });
        }

        // Create a new review
        const review = new Review({
            bookTitle,
            author,
            user,
            rating,
            reviewText,
        });

        const savedReview = await review.save();
        res.status(201).json(savedReview);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all reviews
exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get reviews for a specific book
exports.getBookReviews = async (req, res) => {
    try {
        const { bookTitle } = req.params;

        if (!bookTitle) {
            return res.status(400).json({ message: 'Book title is required.' });
        }

        const reviews = await Review.find({ bookTitle });
        if (reviews.length === 0) {
            return res.status(404).json({ message: 'No reviews found for this book.' });
        }

        res.status(200).json(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update a review
exports.updateReview = async (req, res) => {
    try {
        const { reviewId } = req.params;
        const { rating, reviewText } = req.body;

        if (!mongoose.Types.ObjectId.isValid(reviewId)) {
            return res.status(400).json({ message: 'Invalid Review ID format.' });
        }

        const review = await Review.findById(reviewId);
        if (!review) {
            return res.status(404).json({ message: 'Review not found.' });
        }

        // Update the fields
        if (rating) review.rating = rating;
        if (reviewText) review.reviewText = reviewText;

        const updatedReview = await review.save();
        res.status(200).json(updatedReview);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Delete a review
exports.deleteReview = async (req, res) => {
    try {
        const { reviewId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(reviewId)) {
            return res.status(400).json({ message: 'Invalid Review ID format.' });
        }

        const review = await Review.findByIdAndDelete(reviewId);
        if (!review) {
            return res.status(404).json({ message: 'Review not found.' });
        }

        res.status(200).json({ message: 'Review deleted successfully.' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};
