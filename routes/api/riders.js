const ridersController = require("../../controllers/ridersController");
const Rider = require ("../../models/rider");

// @route    POST /riders
// @desc     Adds riders
// @access   PUBLIC
const post = {
    method: 'POST',
     path: '/riders',
    handler: (request, h) => {
        const rider = JSON.parse(request.payload);
        return ridersController.create(rider);
    }
};
// @route    GET /riders
// @desc     List of all Riders
// @access   PUBLIC
const get = {
    method: 'GET',
     path: '/riders',
    handler: (request, h) => {
        return ridersController.index();
    }
};

module.exports = [post, get];