

var Device= require ('zetta').Device; 
var util = require('util');


var TempSensor = module.exports = function () {
	this.temperature = '123C degree'; 
	Device.call(this) ; 

}

util.inherits(TempSensor, Device); 




TempSensor.prototype.init = function (config) {
	config
		.type('tempsensor')
		.name('ds18bd')
		.state('ready'); 

	config
		.when('ready', {allow: ['read']})
		.map('read', this.read, [ {type: 'text', name:'valueReaded' } ] ) 
		.monitor('temperature'); 
}

TempSensor.prototype.read = function (valueReaded, cb) {

	valueReaded = this.temperature; 
	cb (); 
}




