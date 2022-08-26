const express = require("express");
require('./device.js');


class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT; // Loaded from .env file
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
        });
    }
}

module.exports = Server;