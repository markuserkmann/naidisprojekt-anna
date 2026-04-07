const express = require("express");

const app = express();
const port = 8000;

app.get("/", (_req, res) => {
  res.json({
    status: "ok",
    service: "backend",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend listening on port ${port}`);
});
