type DocumentModificationContext = Record<string | number | symbol, unknown>;

namespace foundry.abstract {
  declare class Document {
    get collectionName(): string;
    get documentName(): string;
    get id(): string;
    get isEmbedded(): boolean;

    getUserLevel(user: BaseUser): number;
    testUserPermission(
      user: BaseUser,
      permission: string | number,
      options?: { exact: boolean }
    ): boolean;
    canUserModify(user: BaseUser, action: string, data?: any): boolean;
    migrateSystemData(): any;
    update(
      data?: any,
      context?: DocumentModificationContext
    ): Promise<Document>;
    delete(context?: DocumentModificationContext): Promise<Document>;
    getEmbeddedCollection(embeddedName: string): Collection;
    getEmbeddedDocument(
      embeddedName: string,
      id: string,
      [options]?: { strict: boolean }
    ): Document;
    createEmbeddedDocuments(
      embeddedName: string,
      data?: any[],
      context?: DocumentModificationContext
    ): Promise<Document[]>;
    updateEmbeddedDocuments(
      embeddedName: string,
      updates?: any[],
      context?: DocumentModificationContext
    ): Promise<Document[]>;
    deleteEmbeddedDocuments(
      embeddedName: string,
      ids: string[],
      context?: DocumentModificationContext
    ): Promise<Document[]>;
    getFlag(scope: string, key: string): any;
    setFlag(scope: string, key: string, value: any): Promise<Document>;
    unsetFlag(scope: string, key: string): Promise<Document>;
    static canUserCreate(user: BaseUser): boolean;
    static createDocuments(
      data?: any[],
      context?: DocumentModificationContext
    ): Promise<Document[]>;
    static updateDocuments(
      updates?: any[],
      context?: DocumentModificationContext
    ): Promise<Document[]>;
    static deleteDocuments(
      ids?: string[],
      context?: DocumentModificationContext
    ): Promise<Document[]>;
    static create(
      data: any,
      context?: DocumentModificationContext
    ): Promise<Document>;
    static get(documentId: string): any;
  }

  declare class DataModel {
    constructor(
      data?: Record<string, unknown>,
      __namedParameters?: { parent: any; strict: boolean }
    ): this;

    _source: unknown;
    parent: DataModel;

    get schema(): unknown;
    get invalid(): boolean;
    static get schema(): unknown;

    reset(): void;
    clone(data?: any, context?: any): Document | Promise<Document>;
    validate(options?: {
      changes: any;
      clean: boolean;
      fallback: boolean;
      strict: boolean;
      fields: boolean;
      joint: boolean;
    }): boolean;
    updateSource(changes?: any, options?: any): any;
    toObject(source?: boolean): any;
    toJSON(): any;
    static cleanData(source?: any, options?: any): any;
    static formatValidationErrors(
      errors: any,
      [options = {}]?: { label: string; namespace: string }
    ): string;
    static fromSource(source: any, [context]?: { strict: boolean }): DataModel;
    static fromJSON(json: string): DataModel;
    static migrateData(source: any): any;
    static migrateDataSafe(source: any): any;
    static shimData(data: any, [options = {}]?: { embedded: boolean }): any;
  }
}
