/**
 * The client-side User document which extends the common BaseUser model. Each User document contains UserData which defines its data schema.
 * @see {@link https://foundryvtt.com/api/classes/client.User.html}
 */

declare class User extends foundry.documents.BaseUser {
  active: boolean;
  targets: Set<unknown>;
  viewedScene: string | null;
  avatar: unknown;
  border: unknown;
  get isTrusted(): boolean;
  get isSelf(): boolean;

  assignPermission(permission: string, allowed: boolean): unknown;
}

namespace foundry.documents {
  declare class BaseUser extends foundry.abstract.Document {
    get isGM(): boolean;

    /**
     * Test whether the User is able to perform a certain permission action. The provided permission string may pertain to an explicit permission setting or a named user role. Alternatively, Gamemaster users are assumed to be allowed to take all actions.
     */
    can(action: string): boolean;
    hasPermission(permission: string): boolean;
    hasRole(role: string | number, [exact]?: boolean): boolean;
  }
}
