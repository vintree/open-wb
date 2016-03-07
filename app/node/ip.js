var os = require('os');
var ip = function() {
    console.log('obtain an IP address');
};

ip.prototype.address = function() {
    var network = os.networkInterfaces();
    // console.log(network);
    for(var i = 0; i < network.en0.length; i++) {
        var json = network.en0[i];
        if(json.family == 'IPv4') {
            console.log(json.address);
            return json.address;
        }
    }
};
module.exports = ip;