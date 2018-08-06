
var exec = require('cordova/exec');

var downloadJs = {
    downloadStart: function(arg0,successCallback, errorCallback) {
        exec(successCallback, errorCallback, 'download', 'downloadStart', [arg0]);
    }
};

module.exports = downloadJs

