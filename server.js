'use strict';
const Hapi = require('@hapi/hapi');
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    const users = require('./routes/api/users');
    const riders = require('./routes/api/riders');
    const drivers = require('./routes/api/drivers');
    const messages = require('./routes/api/messages');
    const trips = require('./routes/api/trips');
    const reviews = require('./routes/api/reviews');
    server.route(users);
    server.route(riders);
    server.route(drivers);
    server.route(messages);
    server.route(trips);
    server.route(reviews);
    module.exports = [].concat(users, riders, drivers, messages, trips, reviews);
    server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
