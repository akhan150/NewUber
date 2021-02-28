const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db.js");
const user = require("./user");
const Trip = sequelize.define('Trip', {
  // Model attributes are defined here
//   id: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
  riderID: {
    type: DataTypes.STRING
  },
  driverID: {
    type: DataTypes.STRING
  },
  fromLatitude: {
      type: DataTypes.STRING,
      
  },
  fromLongitude: {
    type: DataTypes.STRING
  },
  toLatitude: {
      type: DataTypes.STRING
  },
  toLongitude: {
      type: DataTypes.STRING
  }
}, {
  // Other model options go here
});
Trip.sync({ force: true })
// `sequelize.define` also returns the model
console.log(Trip === sequelize.models.Trip); //true

module.exports = Trip;
