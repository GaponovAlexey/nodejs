require("dotenv").config();

const TelegramApi = require("node-telegram-bot-api");
const token = process.env.ENV_TOKEN;

var opt = { polling: true };
const bot = new TelegramApi(token, opt);

const start = async () => {
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    // desc
    bot.setMyCommands([
      { command: "/start", description: "start app" },
      { command: "/info", description: "info bot" },
      { command: "/game", description: "start Game" },
    ]);
    // start
    if (text === "/start") {
      await bot.sendPhoto(
        chatId,
        `https://www.fintechfutures.com/files/2017/10/9ff2f2f01c4bd1b013.png`
      );
      await bot.sendMessage(chatId, `hello my friend`);
      return;
    }

    //info
    if (text === "/info") {
      return await bot.sendMessage(chatId, `you need any question mazafaca ?`);
    }

    if (text == "/game") {
      await bot.sendMessage(chatId, `Сейчас я загадаю число от 0-9, отгадаешь?`)
      const random = Math.floor(Math.random() * 10)

    }
      // end
      return bot.sendMessage(chatId, "i'm is not see command");
  });
};

start();
