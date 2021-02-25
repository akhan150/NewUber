const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("../index.js");

const Review = sequelize.define('Review', {
  // Model attributes are defined here
  // id: {
  //   type: DataTypes.INTEGER,
  //   allowNull: false
  // },
  isDriver: {
    type: DataTypes.BOOLEAN
  },
  rideID: {
      type: DataTypes.STRING,
      allowNull: false
  },
  star: {
    type: DataTypes.INTEGER,
    allowNull: false,
    minimum: 1,
    maximum: 5
  },
}, {
  // Other model options go here
});
Review.sync({ force: true })
// `sequelize.define` also returns the model
console.log(Review === sequelize.models.Review); //true

module.exports = Review;
