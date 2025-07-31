const network = require("./network");
const fileHandler = require("./fileHandler");
const logic = require("./logic");
const http = require("http");

network.fetchUnsecuredData();
fileHandler.saveUserInput("notes.txt", "user content");

logic.process1("hello").then(console.log);

http
  .createServer((req, res) => {
    require("./cookie").setCookieInsecurely(res);
    res.end("Cookie Set");
  })
  .listen(3000);
