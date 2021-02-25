const Message = require("../models/message");
async function create(message) {
    try {
        console.log("message", message);
        const newMessage = await Message.create(message);
        console.log("New Message", newMessage);
        return newMessage;
    } catch (error) {
        console.log("Error ", error);
    }
};

async function index() {
    const messages = await Message.findAll();
    return messages;
};

module.exports = {
    create,
    index
}