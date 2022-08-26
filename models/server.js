const express = require("express");

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT; // Loaded from .env file
        this.app.use("/api/v1", require('./routes/apiRouter'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server running on port: ", this.port);
        });
    }
}

module.exports = Server;