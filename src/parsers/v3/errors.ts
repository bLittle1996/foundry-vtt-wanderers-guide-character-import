import { ZodError } from "zod";

export class ParsingError extends Error {
  /**
   * @var sourceError The underlying error that caused the issue.
   * */
  sourceError: Error | ZodError | null = null;

  constructor(...args: Parameters<typeof Error>) {
    super(...args);
  }

  setSourceError(error: ParsingError["sourceError"]): this {
    this.sourceError = error;

    return this;
  }
}

export class UnsupportedVersionError extends ParsingError {}
