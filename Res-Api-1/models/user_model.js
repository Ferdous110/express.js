const { v4: uuidv4 } = require("uuid");

const users = [
    {
        id: uuidv4(),
        username: "Anjum Ferdous",
        email: "anjumferdous110@gmail.com"
    },
    {
        id: uuidv4(),
        username: "Zihad",
        email: "Zihad@gmail.com"
    },

]

module.exports = users;