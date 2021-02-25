const driversController = require("../../controllers/driversController");
const Driver = require ("../../models/driver");
const post = ({
    method: 'POST',
     path: '/drivers',
    handler: (request, h) => {
        const driver = JSON.parse(request.payload);
        return driversController.create(driver);
    }
});
const get = ({
    method: 'GET',
     path: '/drivers',
    handler: (request, h) => {
        return driversController.index();
    }
});

module.exports = [post, get];