import { V3Guidechar, V3GuidecharSchema } from "../../schemas/v3";
import { throwParsingError } from "./errors";

export const parseGuidechar = (guidecharJson: string): V3Guidechar => {
  try {
    return V3GuidecharSchema.parse(JSON.parse(guidecharJson));
  } catch (error) {
    const cause =
      error instanceof Error ? error : new Error("Unable to parse .guidechar");

    throwParsingError(cause);
  }
};
