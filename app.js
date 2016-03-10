
// simple module , not a class 
module.exports = function (server) {
	var LED_1_Query = server.where({type: 'led', name: 'laszlo_1' } ); 
	var LED_2_Query = server.where({type: 'led', name: 'laszlo_2' } ); 
	var LED_3_Query = server.where({type: 'led', name: 'laszlo_3' } ); 
	server.observe( [LED_1_Query, LED_2_Query, LED_3_Query], function (laszlo_1, laszlo_2, laszlo_3) {
		console.log('My Led came online ....'); 
		//
		laszlo_1.on('turn-off', function() {
			laszlo_2.call('turn-off'); 
			laszlo_3.call('turn-off'); 
		}
		); 

	}); 

}
