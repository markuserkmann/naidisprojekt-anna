const ISO_UTC_REGEX = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/;

export function isValidTimestamp(value) {
  if (typeof value !== "string") return false;
  if (!ISO_UTC_REGEX.test(value)) return false;

  const d = new Date(value);
  return !Number.isNaN(d.getTime());
}

export function normalizeLocation(value) {
  if (!value) return "EE";

  const loc = String(value).trim().toUpperCase();
  if (loc === "EE" || loc === "LV" || loc === "FI") {
    return loc;
  }

  return null;
}

export function isValidPrice(value) {
  return typeof value === "number" && Number.isFinite(value);
}
