const express = require("express");
const { createServer } = require("http");

const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  // ...
  console.log("a user listening 👂");
});

httpServer.listen(3000, () => console.log(`web socket server listening 🚀`));
