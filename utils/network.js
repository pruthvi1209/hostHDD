const os = require('os');

function getLocalIpAddress() {
    const interfaces = os.networkInterfaces();
    
    for (const interfaceName of Object.keys(interfaces)) {
        const addresses = interfaces[interfaceName];
        
        for (const addr of addresses) {
            // Skip internal (localhost) and non-IPv4 addresses
            if (addr.family === 'IPv4' && !addr.internal) {
                return addr.address;
            }
        }
    }
    return 'localhost'; // Fallback
}

module.exports = {
    getLocalIpAddress
};