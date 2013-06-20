var axon = require('axon')
  , sock = axon.socket('pull');
sock.bind(3000);
// sock.connect(3000);

sock.on('message', function(msg){
  console.log("************************************");
  console.log(msg.toString());
});


var axon = require('axon')
  , sockPush = axon.socket('push');

sockPush.connect('tcp://000.000.0.000:3000');
console.log('push server started');

setInterval(function(){
  sockPush.send();
  console.log("************************************");
  console.log("omgz STEPHEN IS PUSHING")
}, 500);

var axon = require('axon')
  , sockSub = axon.socket('sub');

sockSub.connect("tcp://000.000.0.00:3000");

sockSub.on('message', function(msg){
  console.log("************************************");
  console.log(msg.toString());
});
