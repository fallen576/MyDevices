class Device {
    constructor(hostname, ip, mac, openPorts) {
        this.hostname = hostname;
        this.ip = ip;
        this.mac = mac;
        this.openPorts = openPorts;
    }

    getHostname() {
        return this.hostname;
    }

    getIp() {
        return this.ip;
    }

    getMac() {
        return this.mac;
    }

    getOpenPorts() {
        return this.openPorts;
    }
}

module.exports = Device