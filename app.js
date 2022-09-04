require('dotenv').config(); // Load environment variables from .env file
const express = require("express")();
express.use('/api', require('./routes/apiRouter'))
express.listen(process.env.PORT, () => {
    console.log("running");
});
