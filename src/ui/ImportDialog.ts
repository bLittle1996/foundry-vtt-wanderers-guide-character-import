import { moduleId } from "../constants";

export class ImportDialog extends Application {
  static override get defaultOptions() {
    return {
      ...super.defaultOptions,
      popOut: true,
      title: "Wanderer's Guide Character Import",
      template: `modules/${moduleId}/templates/import-dialog.html`,
    };
  }
}
