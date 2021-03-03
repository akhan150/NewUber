const Joi= require('joi');
const usersController = require("../../controllers/usersController");
const User = require("../../models/user");

// @route    POST /users
// @desc     Adds users
// @access   PUBLIC
const post = {
    method: 'POST',
     path: '/users',
    handler: (request, h) => {
        const user = JSON.parse(request.payload);
        // return usersController.create(user);
        const newUser = {user}
        users.push(newUser)
        return {status: 'User has been created!'}
    }
};
// @route    GET /users
// @desc     List of all Users
// @access   PUBLIC
const get = {
    method: 'GET',
     path: '/users',
    handler: (request, h) => {
        return usersController.index();
    }
};
const user = [
    {
        name: "Adil"
    },
    {
        name: "Ahmed"
    },
    {
        name: "Michelle"
    }
];
// @route    GET /users/{id}
// @desc     Retrieves a specific user
// @access   PUBLIC
const show = {
    method: 'GET',
    path: '/users/{id}',
    handler: (request, h) => {
        const id = request.params.id
        const user = user[id];
        return {user}
    }
};

module.exports = [post, get, show];