const Review = require("../models/review");
async function create(review) {
    try {
        console.log("review", review);
        const newReview = await Review.create(review);
        console.log("New Review", newReview);
        return newReview;
    } catch (error) {
        console.log("Error ", error);
    }
};

async function index() {
    const reviews = await Review.findAll();
    return reviews;
};

module.exports = {
    create,
    index
}