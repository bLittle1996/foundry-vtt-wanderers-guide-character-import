import { V3Guidechar, V3GuidecharSchema } from "../../schemas/v3";
import { ParsingError } from "./errors";

export const parseGuidechar = (guidecharJson: string): V3Guidechar => {
  try {
    return V3GuidecharSchema.parse(JSON.parse(guidecharJson));
  } catch (error) {
    if (error instanceof Error) {
      throwParsingError(error);
    }

    throw new ParsingError("Unable to parse .guidechar");
  }
};

function throwParsingError(error: Error) {
  const parsingError = new ParsingError(error.message);
  parsingError.setSourceError(error);

  throw parsingError;
}
