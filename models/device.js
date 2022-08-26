class Device {
    constructor(hostname, ip) {
        this.hostname = hostname;
        this.ip = ip;
    }

    getHostname() {
        return this.hostname;
    }

    getIp() {
        return this.ip;
    }
}