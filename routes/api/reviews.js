const reviewsController = require("../../controllers/reviewsController");

// @route    POST /reviews
// @desc     Adds reviews
// @access   PUBLIC
const post = {
    method: 'POST',
     path: '/reviews',
    handler: (request, h) => {
        const review = JSON.parse(request.payload);
        return reviewsController.create(review);
    }
};
// @route    GET /reviews
// @desc     List of all Reviews
// @access   PUBLIC
const get = {
    method: 'GET',
     path: '/reviews',
    handler: (request, h) => {
        return reviewsController.index();
    }
};

module.exports = [post, get];