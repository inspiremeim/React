const SanitizeInput = (value) => {
  if (typeof value !== "string") return value;

  const controlChars = new RegExp(`[\\x00-\\x1F\\x7F]`, "g");

  return value
    .replace(/<[^>]*>?/gm, "") // Remove HTML tags
    .replace(/javascript:/gi, "") // Remove "javascript:" schemes
    .replace(/[<>]/g, "") // Remove angle brackets
    .replace(controlChars, "") // Remove control characters (safe)
    .replace(/\s{2,}/g, " ") // Collapse multiple spaces
    .trim(); // Trim leading/trailing spaces
};

export default SanitizeInput;
