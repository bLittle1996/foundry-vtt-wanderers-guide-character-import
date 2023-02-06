import { Game } from "./foundry/game";
import { UserPF2e } from "./pf2e/user";

declare global {
  const game: Game & { user: UserPF2e };
}
