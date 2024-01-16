const path = require('path')

const controller = {
    home: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/home.html'));
    },
    login: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/login.html'));
    },
    logout: (req, res) => {
        // Do the magic
    },
    register: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/register.html'));
    }
}

module.exports = controller;