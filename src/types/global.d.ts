import { Game } from "./foundry/game";
import { Hooks } from "./foundry/hooks";

declare global {
  const game: Game;
  const Hooks: Hooks;
}
