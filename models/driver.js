const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../db.js");

const Driver = sequelize.define('Driver', {
  // Model attributes are defined here
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  driverLicenseNumber: {
    type: DataTypes.STRING,
    allowNull: false
  },
  carLicensePlateNumber: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  latitude: {
      type: DataTypes.STRING
  },
  longitude: {
      type: DataTypes.STRING
  },
  carMakeAndModel: {
      type: DataTypes.STRING
  }
}, {
  // Other model options go here
});
Driver.sync({ force: true })
// `sequelize.define` also returns the model
console.log(Driver === sequelize.models.Driver); //true

module.exports = Driver;
