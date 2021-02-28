// const users = require('./api/users');
// const riders = require('./api/riders');
// const drivers = require('./api/drivers');
// const reviews = require('./api/reviews');
// const trips = require('./api/trips');
// const messages = require('./api/messages');
const index = [{
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        const person = "Jason"
        return "Hello " + person + ". You're a person!";
    }
}];

module.exports = [].concat(/*users, riders, drivers, reviews, trips,*/ index);