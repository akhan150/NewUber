const {Sequelize} = require('sequelize');
require('dotenv').config();

// const init = () => {
    const {DB_HOST,DB_USER,DB_DB, DB_PASS} = process.env;
    console.log("DB_DB", DB_DB);
    console.log("DB_USER", DB_USER);
    console.log("DB_HOST", DB_HOST);
    console.log("DB_PASSWORD", DB_PASS);
    const sequelize = new Sequelize(DB_DB, DB_USER, DB_PASS, {
        host: DB_HOST,
        dialect: 'postgres'
    });
//};

sequelize
.authenticate()
.then(() => console.log ('Connected'))
.catch(console.error);
module.exports = sequelize;