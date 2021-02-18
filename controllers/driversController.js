const Driver = require("../models/driver");
async function create(driver) {
    try {
        console.log("driver", driver);
        const newDriver = await Driver.create(driver);
        console.log("New Driver", newDriver);
        return newDriver;
    } catch (error) {
        console.log("Error ", error);
    }
};

async function index() {
    const drivers = await Driver.findAll();
    return drivers;
};

module.exports = {
    create,
    index
}