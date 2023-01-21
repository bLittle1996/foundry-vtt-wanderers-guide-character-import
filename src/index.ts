import { logInfo, t } from "./utils";

Hooks.on("ready", () => {
  logInfo(t("WG_CHAR_IMPORTER.DEBUG.MODULE_READY"));
});

Hooks.on("renderSettings", (_app, _jqueryContainer, meta) => {
  logInfo(_jqueryContainer);
  // 1. Fetch the container
  // 2. Inject a heading akin to how PF2e does it
  // This will be the last heading in the settings menu (which is likely to be the logout/return one (Game Access))
  const injectPoint = $(`#${meta.cssId} h2`).last();

  const heading = document.createElement("h2");
  heading.innerText = t("WG_CHAR_IMPORTER.SETTINGS.HEADING");

  const container = document.createElement("div");
  const importButton = document.createElement("button");
  importButton.innerHTML = `<i class="fa-solid fa-file-import"></i> <span>${t(
    "WG_CHAR_IMPORTER.SETTINGS.IMPORT_BUTTON_TEXT"
  )}</span>`;
  container.appendChild(importButton);
  // 3. Add a button that should open up a dialogue.
  $(heading).insertBefore(injectPoint);
  $(container).insertBefore(injectPoint);
});
