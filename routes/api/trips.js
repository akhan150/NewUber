const tripsController = require("../../controllers/tripsController");
const post = ({
    method: 'POST',
     path: '/trips',
    handler: (request, h) => {
        const trip = JSON.parse(request.payload);
        return tripsController.create(trip);
    }
});
const get = ({
    method: 'GET',
     path: '/trips',
    handler: (request, h) => {
        return tripsController.index();
    }
});

module.exports = [post, get];