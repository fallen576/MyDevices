const express = require("express");
const router = express.Router();
const path = require('path');
const find = require('local-devices');
let Device = require('../models/device')

router.get('^/$|/api/v1?', (req, res) => {
    console.log('in api call');
    var deviceList = [];
    find().then(devices => {
        devices.forEach(item => {
            console.log(item.ip);
            deviceList.push(new Device(item.name, item.ip, item.mac));
        });
        console.log("list count " + deviceList.length);
        for (var d in deviceList) {
            console.log(deviceList[d].getHostname());
        }
        return res.json(deviceList);
    });
})

module.exports = router;