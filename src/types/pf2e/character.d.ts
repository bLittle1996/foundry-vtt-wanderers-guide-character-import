export declare class CharacterPF2e extends CreaturePF2e {}

declare class CreaturePF2e extends ActorPF2e {}

declare class ActorPF2e extends Actor {
  inventory: unknown;
  spellcasting: unknown;
  rules: unknown[];
  synthetics: unknown;
  saves?: Record<"fortitude" | "reflex" | "will", unknown>;
}
