/* jshint node:true */
'use strict';

var apickli = require('apickli');

// set the url and base path for your API endpoint on Apigee edge
var url = 'gonz-test.apigee.net/v1/f1';

var env = process.env.NODE_ENV || 'dev';
// debug
console.log('running on ' + env + ' environment');

module.exports = function() {
    // cleanup before every scenario
    this.Before(function(scenario, callback) {
        this.apickli = new apickli.Apickli('http', url);
        callback();
    });
};
