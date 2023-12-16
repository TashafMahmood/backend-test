const express = require("express");
const cors = require("cors");
const PORT = 5000

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WELCOME TO BACKEND LEARNING");
});

app.get("/getusers", (req, res) => {
  res.status(200).json([
    { id: 1, name: "tashaf mahmood" },
    { id: 2, name: "meezan nafees" },
    { id: 3, name: "rehan shakeel" },
  ]);
});

app.listen(PORT, () => {
  console.log("SERVER STARTED SUCCESSFULLY");
});
