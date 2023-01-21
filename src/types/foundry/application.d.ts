/**
 * https://foundryvtt.com/api/classes/client.Application.html
 * @see {@link https://foundryvtt.com/api/classes/client.Application.html}
 */
export interface Application {
  appId: number;
  get id(): string;
  get element(): JQuery;
  get template(): string;
  get popOut(): boolean;
  get rendered(): boolean;
}

// All the other types of applications we interface with will go here because why not.
export interface SidebarTab extends Application {
  tabName: string;
}
