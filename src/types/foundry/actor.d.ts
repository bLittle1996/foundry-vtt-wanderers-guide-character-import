declare class Actor extends foundry.documents.BaseActor {
  overrides: Record<string, unknown>;

  get thumbnail(): string;
  get itemTypes(): Record<string, any>;
  get isToken(): boolean;
  get uuid(): string;
}

namespace foundry.documents {
  declare class BaseActor extends foundry.abstract.Document {}
}
