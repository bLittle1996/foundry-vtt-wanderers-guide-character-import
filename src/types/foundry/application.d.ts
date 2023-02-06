/**
 * @see {@link https://foundryvtt.com/api/interfaces/client.ApplicationOptions.html}
 */
type ApplicationOptions = {
  baseApplication: string;
  width: number;
  height: string | number;
  top: number;
  left: number;
  scale: number;
  popOut: boolean;
  minimizable: boolean;
  resizable: boolean;
  id: string;
  classes: string[];
  title?: string;
  template: string;
  /**
   * A list of unique CSS selectors which target containers that should have their vertical scroll positions preserved during a re-render.
   */
  scrollY: string[];
  tabs: unknown[];
  dragDrop: unknown[];
  filters: unknown[];
};
type Options = Record<string, unknown>;

/**
 * https://foundryvtt.com/api/classes/client.Application.html
 * @see {@link https://foundryvtt.com/api/classes/client.Application.html}
 */
declare class Application {
  constructor(options?: Options): Application;
  options: Options;

  appId: number;
  get id(): string;
  get element(): JQuery;
  get template(): string;
  get popOut(): boolean;
  get rendered(): boolean;
  get title(): string;

  static get defaultOptions(): ApplicationOptions;
  static RENDER_STATES: Readonly<{
    CLOSING: -2;
    CLOSED: -1;
    NONE: 0;
    RENDERING: 1;
    RENDERED: 2;
    ERROR: 3;
  }>;

  /**
   * An application should define the data object used to render its template. This function may either return an Object directly, or a Promise which resolves to an Object If undefined, the default implementation will return an empty object allowing only for rendering of static HTML
   */
  getData(
    options?: any
  ): Record<string, unknown> | Promise<Record<string, unknown>>;

  render(
    force?: boolean,
    options?: {
      left: number;
      top: number;
      width: number;
      height: number;
      scale: number;
      focus: boolean;
      renderContext: string;
      renderData: any;
    }
  ): Application;

  activateListeners(html: JQuery): void;

  activateTab(
    tabName: string,
    options?: { group: string; triggerCallback: boolean }
  ): void;

  bringToTop(): void;
  close(options?: unknown): Promise<void>;
  minimize(): Promise<void>;
  maximize(): Promise<void>;
  setPosition(position?: {
    left: number;
    top: number;
    width: number;
    height: string | number;
    scale: number;
  }): void | {
    left: number;
    top: number;
    width: number;
    height: number;
    scale: number;
  };
}

// All the other types of applications we interface with will go here because why not.
declare interface SidebarTab extends Application {
  tabName: string;
}
