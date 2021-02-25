const reviewsController = require("../../controllers/reviewsController");
const post = ({
    method: 'POST',
     path: '/reviews',
    handler: (request, h) => {
        const review = JSON.parse(request.payload);
        return reviewsController.create(review);
    }
});
const get = ({
    method: 'GET',
     path: '/reviews',
    handler: (request, h) => {
        return reviewsController.index();
    }
});

module.exports = [post, get];