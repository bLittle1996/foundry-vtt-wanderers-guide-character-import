import { z } from "zod";

export const SourceSchema = z.object({
  charId: z.number().int(),
  source: z.string(),
  sourceCode: z.string(),
  sourceCodeSNum: z.string(),
  sourceLevel: z.number().int().positive(),
  sourceType: z.string(),
});

export const TimestampsSchema = z.object({
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const NumberBoolean = z
  .union([z.literal(0), z.literal(1)])
  .transform((value) => !!value);

export const ActionTypes = z.union([
  z.literal("NONE"),
  z.literal("FREE_ACTION"),
  z.literal("REACTION"),
  z.literal("ACTION"),
  z.literal("TWO_ACTIONS"),
  z.literal("THREE_ACTIONS"),
]);

export const ProficiencyLevel = z.union([
  z.literal("T"), // Trained
  z.literal("E"), // Expert
  z.literal("M"), // Master
  z.literal("L"), // Legendary
]);
export const UnknownProficiency = z.literal("?"); // usually when some mishap occurs (for example __mocks__/AlexanderKor.guidechar has ? for acrobatics)

// Things in which you can have Proficiency
export const CoreSkills = z.union([
  z.literal("Acrobatics"),
  z.literal("Arcana"),
  z.literal("Athletics"),
  z.literal("Crafting"),
  z.literal("Deception"),
  z.literal("Diplomacy"),
  z.literal("Intimidation"),
  z.literal("Medicine"),
  z.literal("Nature"),
  z.literal("Occultism"),
  z.literal("Performance"),
  z.literal("Religion"),
  z.literal("Society"),
  z.literal("Stealth"),
  z.literal("Survival"),
  z.literal("Thievery"),
]);
export const Saves = z.union([
  z.literal("Fortitude"),
  z.literal("Reflex"),
  z.literal("Will"),
]);
export const Defenses = z.union([
  z.literal("Unarmored_Defense"),
  z.literal("Light_Armor"),
  z.literal("Medium_Armor"),
  z.literal("Heavy_Armor"),
]);
export const Attacks = z.union([
  z.literal("Unarmed_Attacks"),
  z.literal("Simple_Weapons"),
  z.literal("Martial_Weapons"),
  z.literal("Advanced_Weapons"),
]);
