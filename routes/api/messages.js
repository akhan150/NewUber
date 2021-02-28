const messagesController = require("../../controllers/messagesController");
const post = {
    method: 'POST',
     path: '/messages',
    handler: (request, h) => {
        const message = JSON.parse(request.payload);
        return messagesController.create(message);
    }
};
const get = {
    method: 'GET',
     path: '/messages',
    handler: (request, h) => {
        return messagesController.index();
    }
};

module.exports = [post, get];