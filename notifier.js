const pm2 = require('pm2');

// like this method better to get some information
// pm2.connect(function() {
//   pm2.launchBus(function(err, bus) {
//     bus.on('process:event', function(data) {
//       if (data.event === "exit") {
//         console.log(data.process.axm_options);
//         console.log(data.process.axm_options);
//       }
//     });
//   });
// });

pm2.launchBus(function(err, bus) {
    bus.on('log:err', function(e) {
      let body = e.data
      let name = e.process.name
      let subject = 'App: "'+name+'" restarted due to error'

      let message = {subject: subject, name: name, body: body}
      console.log(message);

    });
});
