const express = require("express");
const router = express.Router();
const portScan = require('node-port-scanner');
const find = require('local-devices');
let Device = require('../models/device')

router.get('^/$|/api/v1?', function(req, res) {
    var deviceList = [];
    find().then(async function(devices){
        console.log("FOUND DEVICES");
        for (let i = 0; i < devices.length; i++) {
            let item = devices[i];
            console.log("LOOP AT " + i);
            
            await runPortScan(item.ip).then(portScanResults => {
                console.log("FINISHED PORT SCAN");
                if (portScanResults.ports) {
                    deviceList.push(new Device(item.name, item.ip, item.mac, portScanResults.ports.open));
                }
                else {
                    deviceList.push(new Device(item.name, item.ip, item.mac, []));
                }
            });
        }
        
        console.log("returning!!!!")
        return res.json(deviceList);
    });
});

async function runPortScan(ip) {
    return portScan(ip, [21, 22, 23, 25, 80, 110, 123, 443]);
}

module.exports = router;