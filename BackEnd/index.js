const express = require("express");
const cors = require("cors");
const router = require("./router");

const { createServer } = require("http");

const { Server } = require("socket.io");

const PORT = 3001;

const app = express();

const httpServer = createServer(app);
const io = new Server(httpServer, {
  /* options */
});

io.on("connection", (socket) => {
  console.log("a user listening 👂");
  socket.on("chat message", (msg) => {
    console.log(msg);
  });
});

httpServer.listen(3000, () => console.log(`web socket server listening 🚀`));

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`SEVER WORKING: app listening on http://localhost:${PORT} 🚀`);
});
