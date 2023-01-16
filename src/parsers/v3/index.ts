import { ZodError } from "zod";
import { V3Guidechar, V3GuidecharSchema } from "../../schemas/v3";
import { ParsingError, UnsupportedVersionError } from "./errors";

export const parseGuidechar = (guidecharJson: string): V3Guidechar => {
  try {
    return V3GuidecharSchema.parse(JSON.parse(guidecharJson));
  } catch (error) {
    const cause =
      error instanceof Error ? error : new Error("Unable to parse .guidechar");

    throwParsingError(cause);
  }
};

function throwParsingError(error: Error): never {
  const parsingError = new ParsingError(error.message);
  parsingError.setSourceError(error);

  throw parsingError;
}
