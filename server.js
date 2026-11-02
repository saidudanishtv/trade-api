const express = require("express");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server running");
});

app.listen(5000, () => {
  console.log("server running on port 5000");
});

app.post("/api/trades", (req, res) => {
  const trade = req.body;
  res.json("trade got succesfully");
});
app.get("/api/trades", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Trades fetched successfully",
    trades: [],
  });
});
