const TelegramApi = require("node-telegram-bot-api");

const token = "1219240841:AAG5OXUFzBhAQzeJYh2pk5tH79r_hXIP_Ew";

var opt = { polling: true };
const bot = new TelegramApi(token, opt);



const start = async () => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
  
    if (text === "/start") {
      await bot.sendPhoto(chatId, `https://www.fintechfutures.com/files/2017/10/9ff2f2f01c4bd1b013.png`);
      await bot.sendMessage(chatId, `hello my friend`);
      return
    }
  
    bot.setMyCommands([
      {command: '/start', description: "start app"},
      {command: '/info', description: "info bot"}
    ])
  
    if (text === "/info") {
     return await bot.sendMessage(chatId, `you need any question mazafaca ?`);
    }
    return bot.sendMessage(chatId, "i'm is not see command")
  });
}


start()