export function log(level: "log" | "warn" | "error", ...things: unknown[]) {
  const prefix = "%cWanderer's Guide Importer:";

  const getStyling = (level: Parameters<typeof log>[0]) => {
    switch (level) {
      case "error":
        return "red";
      case "warn":
        return "orange";
      default:
        return "green";
    }
  };

  const styling = `color: white; background: ${getStyling(
    level
  )}; padding: 2px; border-radius: 2px; font-weight: bold;`;

  console[level](prefix, styling, ...things);
}

export function logInfo(...things: unknown[]) {
  log("log", ...things);
}

export function logWarning(...things: unknown[]) {
  log("warn", ...things);
}

export function logError(...things: unknown[]) {
  log("error", ...things);
}

export type DeepPartial<T extends {}> = {
  [Key in keyof T]?: T[Key] extends {} ? DeepPartial<T[Key]> : T[Key];
};
