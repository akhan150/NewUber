const Trip = require("../models/trip");
async function create(trip) {
    try {
        console.log("trip", trip);
        const newTrip = await Trip.create(trip);
        console.log("New Trip", newTrip);
        return newTrip;
    } catch (error) {
        console.log("Error ", error);
    }
};

async function index() {
    const trips = await Trip.findAll();
    return trips;
};

module.exports = {
    create,
    index
}