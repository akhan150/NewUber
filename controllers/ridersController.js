const Rider = require("../models/rider");
async function create(rider) {
    try {
        console.log("rider", rider);
        const newRider = await Rider.create(rider);
        console.log("New Rider", newRider);
        return newRider;
    } catch (error) {
        console.log("Error ", error);
    }
};

async function index() {
    const riders = await Rider.findAll();
    return riders;
};

module.exports = {
    create,
    index
}