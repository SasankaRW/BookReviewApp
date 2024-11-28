import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/reviews';

const reviewService = {
    getAllReviews: async () => {
        try {
          const response = await axios.get(BASE_URL);
          return response.data.map(review => ({
            ...review,
            _id: review._id 
          }));
        } catch (error) {
          console.error('Error fetching reviews:', error);
          throw error;
        }
      },
    

  createReview: async (review) => {
    try {
      const response = await axios.post(BASE_URL, review);
      return response.data;
    } catch (error) {
      console.error('Error creating review:', error);
      throw error;
    }
  },

  updateReview: async (id, review) => {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, review);
      return response.data;
    } catch (error) {
      console.error('Error updating review:', error.response?.data || error.message);
      throw error;
    }
  },

  deleteReview: async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
      console.error('Error deleting review:', error.response?.data || error.message);
      throw error;
    }
  }

};

export default reviewService;