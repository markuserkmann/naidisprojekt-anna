import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { importEnergyJsonFile } from "./services/importService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(
  cors({
    origin: "*",
  }),
);

app.post("/api/import/json", async (req, res) => {
  const result = await importEnergyJsonFile(
    path.resolve(__dirname, "../data/energy_dump.json")
  );

  res.json({
    message:
      `Import completed:\n` +
      `- inserted: ${result.inserted}\n` +
      `- skipped: ${result.skipped}\n` +
      `- duplicates_detected: ${result.duplicates_detected}`,
    ...result
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "backend",
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Backend listening on port ${port}`);
});
