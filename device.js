


var Device = require('zetta').Device; 
var util = require('util'); 


// a new empty class 
/** 
 *
var MyLed = function MyLed(name){
	this.assignedName = name; 

};
*/ 

MyLed = module.exports = function (name) {

	Device.call(this); 
	this.assignedName = name; 

}

util.inherits(MyLed, Device); 
// inherts from the parent class Device 
//MyLed.prototype =  new Device; 


MyLed.prototype.init = function( config) {
	config
		.type('led')
		.state('on')
		.name(this.assignedName)
	        .when( 'on', { allow: ['turn-off' ] } )	
		.when('off', { allow: ['turn-on'] } )
		.map ('turn-off', this.turnOff )
		.map( 'turn-on', this.turnOn);  

};


MyLed.prototype.turnOff = function(cb) {
	this.state = 'off'; 
	cb(); 

}; 

MyLed.prototype.turnOn = function (cb ) {
	this.state = 'on'; 
	cb(); 
}; 




// export the new class 
//module.exports.MyLed = MyLed; 
