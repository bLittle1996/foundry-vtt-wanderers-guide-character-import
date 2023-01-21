/**
 * A simple event framework used throughout Foundry Virtual Tabletop. When key actions or events occur, a "hook" is defined where user-defined callback functions can execute. This class manages the registration and execution of hooked callback functions.
 * @see {@link https://foundryvtt.com/api/classes/client.Hooks.html}
 */
export interface Hooks {
  static on(
    hook: string,
    fn: (...args: []) => any,
    options?: { once: boolean }
  ): number;
  static once(hook: string, fn: (...args: []) => any): number;
  static off(hook: string, fnOrId: ((...args: []) => any) | number): void;
}
