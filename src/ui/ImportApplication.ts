import { moduleId } from "../constants";
import { V3Guidechar } from "../schemas/v3";
import { CharacterPF2e } from "../types/pf2e/character";
import { parseGuidechar } from "../parsers/v3";

type ImportApplicationOptions = Partial<ApplicationOptions> & {
  character: CharacterPF2e;
};

export class ImportApplication extends Application {
  character: CharacterPF2e;
  parsedGuideChar: V3Guidechar | null = null;

  constructor(options: ImportApplicationOptions) {
    super(options);

    this.character = options.character;
  }

  static override get defaultOptions() {
    return {
      ...super.defaultOptions,
      popOut: true,
      title: "Wanderer's Guide Character Import",
      template: `modules/${moduleId}/templates/import-dialog.html`,
    };
  }

  override activateListeners($ui: JQuery<HTMLElement>) {
    // TODO: find elements and attach listeners...
    console.log($ui);
  }

  handleSubmit(event: HTMLElementEventMap["submit"]) {
    // TODO
    // 1. get the file data
    // 2. call parseFile
    // 3. call updateCharacter
    // 4. display some success ui? close dialog?
    console.log(event);
  }

  parseFile(guidecharJsonString: string) {
    this.parsedGuideChar = parseGuidechar(guidecharJsonString);
  }

  updateCharacter() {
    if (!this.parsedGuideChar) {
      throw new Error("Unable to update character, no .guidechar data available. Did you call parseFile?");
    }

    // TODO: You know, make it work?
  }
}
