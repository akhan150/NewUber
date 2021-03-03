const driversController = require("../../controllers/driversController");
const Driver = require ("../../models/driver");

// @route    POST /drivers
// @desc     Adds drivers
// @access   PUBLIC
const post = {
    method: 'POST',
     path: '/drivers',
    handler: (request, h) => {
        const driver = JSON.parse(request.payload);
        return driversController.create(driver);
    }
};
// @route    GET /drivers
// @desc     List of all Drivers
// @access   PUBLIC
const get = {
    method: 'GET',
     path: '/drivers',
    handler: (request, h) => {
        return driversController.index();
    }
};

module.exports = [post, get];