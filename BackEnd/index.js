const express = require("express");
const router = require("./router");
const cors = require("cors");

const PORT = 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`SEVER WORKING: app listening on http://localhost:${PORT} 🚀`);
});
