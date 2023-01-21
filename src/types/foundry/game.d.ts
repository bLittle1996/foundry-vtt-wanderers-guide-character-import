import { Localization } from "./localization";

/**
 * The core Game instance which encapsulates the data, settings, and states relevant for managing the game experience. The singleton instance of the Game class is available as the global variable game.
 * @see {@link https://foundryvtt.com/api/classes/client.Game.html}
 */
export interface Game {
  i18n: Localization;
}
