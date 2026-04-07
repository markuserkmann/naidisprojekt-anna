import express from "express";
import cors from "cors";

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(
  cors({
    origin: "*",
  }),
);

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "backend",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend listening on port ${port}`);
});
