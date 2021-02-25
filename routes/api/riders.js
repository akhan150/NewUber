const ridersController = require("../../controllers/ridersController");
const Rider = require ("../../models/rider");
const post = ({
    method: 'POST',
     path: '/riders',
    handler: (request, h) => {
        const rider = JSON.parse(request.payload);
        return ridersController.create(rider);
    }
});
const get = ({
    method: 'GET',
     path: '/riders',
    handler: (request, h) => {
        return ridersController.index();
    }
});

module.exports = [post, get];