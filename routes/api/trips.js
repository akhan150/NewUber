const tripsController = require("../../controllers/tripsController");

// @route    POST /trips
// @desc     Adds trips
// @access   PUBLIC
const post = {
    method: 'POST',
     path: '/trips',
    handler: (request, h) => {
        const trip = JSON.parse(request.payload);
        return tripsController.create(trip);
    }
};
// @route    GET /trips
// @desc     List of all Trips
// @access   PUBLIC
const get = {
    method: 'GET',
     path: '/trips',
    handler: (request, h) => {
        return tripsController.index();
    }
};

module.exports = [post, get];