require('dotenv').config(); // Load environment variables from .env file
const express = require("express")();
express.use('/api/v1', require('./routes/apiRouter'))
express.listen(process.env.PORT, () => {
    console.log("server is running");
});
