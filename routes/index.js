const index = {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const person = "Jason"
            return "Hello " + person + ". You're a person!";
        }
    };
const server = require('../server');
const users = require('./api/users');
const riders = require('./api/riders');
const drivers = require('./api/drivers');
const messages = require('./api/messages');
const trips = require('./api/trips');
const reviews = require('./api/reviews');
server.route(users);
server.route(riders);
server.route(drivers);
server.route(messages);
server.route(trips);
server.route(reviews);
server.route(index);
module.exports = [].concat(users, riders, drivers, messages, trips, reviews, index);
module.exports = [index];