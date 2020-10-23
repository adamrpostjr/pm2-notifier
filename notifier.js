const pm2 = require('pm2');
require('dotenv').config()
// const { mailNoti } = require('./mail');
const { slackNoti } = require('./slack');
// const { teleNoti } = require('./tele');
// const { textNoti } = require('./text');

// getting perms
const emailPerms = process.env.MAIL,
slacPerms = process.env.SLACK,
telePerm = process.env.TELEGRAM,
textPerm = process.env.TEXT

// setting perms 


pm2.launchBus(function(err, bus) {
    bus.on('log:err', function(e) {
      let body = e.data
      let name = e.process.name
      let subject = 'App: "'+name+'" restarted due to error'

      let message = {subject: subject, name: name, body: body}
      console.log(message);
      
      if (slacPerms == 1) {
        slackNoti(message)
      }
      
      
      
      
      
      
      

    });
});


