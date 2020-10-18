require('module-alias/register');
require('dotenv').config();
require('@config/index');
const { App } = require('@slack/bolt');

const bot = new App({
  signingSecret: process.env.CLIENT_SIGNING_SECRET,
  token: process.env.BOT_TOKEN,
});

(async () => {
  await bot.start(3000);
  console.table({ BOT: 'Git ALert', PORT: 3000 });
})();
