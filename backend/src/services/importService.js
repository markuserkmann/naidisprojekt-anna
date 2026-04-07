import fs from "fs/promises";
import { UniqueConstraintError } from "sequelize";
import { EnergyReading } from "../models/EnergyReading.js";
import {
  isValidTimestamp,
  normalizeLocation,
  isValidPrice
} from "../utils/validators.js";

export async function importEnergyJsonFile(filePath) {
  const summary = {
    inserted: 0,
    skipped: 0,
    duplicates_detected: 0
  };

  let data;

  try {
    const raw = await fs.readFile(filePath, "utf8");
    data = JSON.parse(raw);
  } catch {
    return { ...summary, error: "Invalid file or JSON" };
  }

  if (!Array.isArray(data)) {
    return { ...summary, error: "JSON must be array" };
  }

  for (const row of data) {
    try {
      if (!isValidTimestamp(row?.timestamp)) {
        summary.skipped++;
        continue;
      }

      const location = normalizeLocation(row?.location);
      if (!location) {
        summary.skipped++;
        continue;
      }

      if (!isValidPrice(row?.price_eur_mwh)) {
        summary.skipped++;
        continue;
      }

      await EnergyReading.create({
        timestamp: new Date(row.timestamp),
        location,
        price_eur_mwh: row.price_eur_mwh,
        source: "UPLOAD"
      });

      summary.inserted++;
    } catch (err) {
      if (err instanceof UniqueConstraintError) {
        summary.duplicates_detected++;
      } else {
        summary.skipped++;
      }
    }
  }

  return summary;
}
