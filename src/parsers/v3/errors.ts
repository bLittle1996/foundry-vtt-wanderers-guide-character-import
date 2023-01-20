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

export function throwParsingError(error: Error): never {
  const parsingError = new ParsingError(error.message);
  parsingError.setSourceError(error);

  throw parsingError;
}
