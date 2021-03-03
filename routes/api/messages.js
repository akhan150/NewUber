const messagesController = require("../../controllers/messagesController");

// @route    POST /messages
// @desc     Adds messages
// @access   PUBLIC
const post = {
    method: 'POST',
     path: '/messages',
    handler: (request, h) => {
        const message = JSON.parse(request.payload);
        return messagesController.create(message);
    }
};
// @route    GET /messages
// @desc     List of all Messages
// @access   PUBLIC
const get = {
    method: 'GET',
     path: '/messages',
    handler: (request, h) => {
        return messagesController.index();
    }
};

module.exports = [post, get];