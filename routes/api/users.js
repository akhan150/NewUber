const usersController = require("../../controllers/usersController");
const User = require("../../models/user");
const post = {
    method: 'POST',
     path: '/users',
    handler: (request, h) => {
        const user = JSON.parse(request.payload);
        return usersController.create(user);
    }
};
const get = {
    method: 'GET',
     path: '/users',
    handler: (request, h) => {
        return usersController.index();
    }
};

module.exports = [post, get];