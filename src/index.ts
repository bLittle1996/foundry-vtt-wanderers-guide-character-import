import { ImportApplication } from "./ui/ImportApplication";
import { logError, logInfo, t } from "./utils";

Hooks.on("renderCharacterConfig", (app, ui, data) => {
  // const configurationWindow = app.element;
  const canUserUpdateCharacter = data.document.canUserModify(game.user, "update");

  // If we can't even update the character there is no sense in doing anything!
  if (!canUserUpdateCharacter) {
    logError("User cannot update this character!", {
      user: game.user,
      character: data.document,
    });
    return;
  }

  logInfo({ app, ui, data });

  const button = document.createElement("button");
  button.type = "button";
  button.innerHTML = `<i class="fa-solid fa-file-import"></i> <span>${t(
    "WG_CHAR_IMPORTER.SETTINGS.IMPORT_BUTTON_TEXT"
  )}</span>`;

  const uiContent = ui.find(".window-content");

  if (uiContent.length === 0) {
    logError("Unable to find .window-content element in character config window.", {
      characterConfigWindow: ui,
    });
    return;
  }

  const importApplication = new ImportApplication({
    character: data.document,
  });

  button.addEventListener("click", () => {
    importApplication.render(true); // forcing to cause it to open.
  });

  uiContent.append(button);
});
