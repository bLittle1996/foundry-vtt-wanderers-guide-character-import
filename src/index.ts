import { logInfo, t } from "./utils";

Hooks.on("ready", () => {
  logInfo(t("WG_CHAR_IMPORTER.DEBUG.MODULE_READY"));
});
