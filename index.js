var zetta = require('zetta');
var LEDScout = require('./scout'); 
var app = require('./app'); 
var Sensor = require('./tempsensor'); 

zetta()
  .name('LaszloBarabas')
  .use(LEDScout.LEDScout) 
  .use(Sensor)
  .use(app) 
  .listen(process.env.PORT || 2338, function(){
     console.log('Zetta is running at http://127.0.0.1:2338');
})




