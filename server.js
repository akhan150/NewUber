'use strict';
 const usersController = require("./controllers/usersController");
 const driversController = require("./controllers/driversController");
 const ridersController = require("./controllers/ridersController");
 const reviewsController = require("./controllers/reviewsController");
 const messagesController = require("./controllers/messagesController");
 const tripsController = require("./controllers/tripsController");
const Hapi = require('@hapi/hapi');
const User = require("./models/user");
const Driver = require ("./models/driver");
const Rider = require ("./models/rider");

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {

            return 'Hello World!';
        }
    });
    
    server.route({
        method: 'GET',
         path: '/{name}',
        handler: (request, h) => {
            const name = request.params.name;
            return 'Hello ' + name;
        }
    });
    
    server.route({
        method: 'POST',
         path: '/users',
        handler: (request, h) => {
            const user = JSON.parse(request.payload);
            return usersController.create(user);
        }
    });
    server.route({
        method: 'GET',
         path: '/users',
        handler: (request, h) => {
            return usersController.index();
        }
    });

    server.route({
        method: 'POST',
         path: '/drivers',
        handler: (request, h) => {
            const driver = JSON.parse(request.payload);
            return driversController.create(driver);
        }
    });
    server.route({
        method: 'GET',
         path: '/drivers',
        handler: (request, h) => {
            return driversController.index();
        }
    });

    server.route({
        method: 'POST',
         path: '/riders',
        handler: (request, h) => {
            const rider = JSON.parse(request.payload);
            return ridersController.create(rider);
        }
    });
    server.route({
        method: 'GET',
         path: '/riders',
        handler: (request, h) => {
            return ridersController.index();
        }
    });
    server.route({
        method: 'POST',
         path: '/reviews',
        handler: (request, h) => {
            const review = JSON.parse(request.payload);
            return reviewsController.create(review);
        }
    });
    server.route({
        method: 'GET',
         path: '/reviews',
        handler: (request, h) => {
            return reviewsController.index();
        }
    });
    server.route({
        method: 'POST',
         path: '/messages',
        handler: (request, h) => {
            const message = JSON.parse(request.payload);
            return messagesController.create(message);
        }
    });
    server.route({
        method: 'GET',
         path: '/messages',
        handler: (request, h) => {
            return messagesController.index();
        }
    });
    server.route({
        method: 'POST',
         path: '/trips',
        handler: (request, h) => {
            const trip = JSON.parse(request.payload);
            return tripsController.create(trip);
        }
    });
    server.route({
        method: 'GET',
         path: '/trips',
        handler: (request, h) => {
            return tripsController.index();
        }
    });

     server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();