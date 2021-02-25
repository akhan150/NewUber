const User = require("../models/user");
async function create(user) {
    try {
        console.log("user", user);
        const newUser = await User.create(user);
        console.log("New User", newUser);
        return newUser;
    } catch (error) {
        console.log("Error ", error);
    }
};

async function index() {
    const users = await User.findAll();
    return users;
};

module.exports = {
    create,
    index
}

