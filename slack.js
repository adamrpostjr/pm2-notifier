const slackBot = require('slackbots');
const axios = require('axios')
require('dotenv').config()

var botName;
var channel;
process.env.SLACKBOTNAME != null ? botName = process.env.SLACKBOTNAME : botName = 'pm2-notifier'
process.env.SLACKCHANNEL != null ? channel = process.env.SLACKCHANNEL : channel = 'general'
const token = process.env.SLACKTOKEN




if (token == null) {
  console.log('slack bot will not work without a toaken');
}else {
  const bot = new slackBot({
      token: token,
      name: botName
  })
  const params = {
      icon_emoji: ':robot_face:'
  }
  bot.on('start', () => {  
      bot.postMessageToChannel(
          channel,
          'Applicaion Notification Bot is Active, currenly watching for crashes',
          params
      );
  })
  // function here
  function slackNoti(message) {
    var parsed = ':warning: ' + message.subject +' :warning:\n\n'+
                  '```'+message.body+'```'
    
    
    bot.postMessageToChannel(
        channel,
        parsed,
        params
    );
  }  
}
module.exports = { slackNoti }