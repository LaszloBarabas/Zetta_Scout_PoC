

var Scout = require('zetta').Scout; 
var LED = require('./device'); 

// a new empty Scout class 

var LEDScout = function LEDScout () {}; 

// inherits from the Scout class 

LEDScout.prototype = new Scout; 



// init operator 
//
LEDScout.prototype.init = function (next) {
	var self = this; 	
	setTimeout ( function () {
	self.discover(LED, 'laszlo_1'); 
	self.discover(LED, 'laszlo_2'); 
	self.discover(LED, 'laszlo_3'); 
	}, 1000); 

	next(); 
}; 	



// export the new class 
module.exports.LEDScout = LEDScout; 
