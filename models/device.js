class Device {
    constructor(hostname, ip, mac) {
        this.hostname = hostname;
        this.ip = ip;
        this.mac = mac;
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
}

module.exports = Device