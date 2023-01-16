import { z } from "zod";

const JSONSchema = <T extends z.ZodTypeAny>(schema: T) =>
  // @ts-expect-error We know we might not have a string coming in, so let Zod do its thing
  z.preprocess((value) => JSON.parse(value), schema);

const GeneralInfoSchema = z.object({
  backgroundName: z.string(),
  className: z.string(),
  heritageAncestryName: z.string(),
  size: z.string(),
  traits: z.array(z.string()).default([]),
});

const BonusSchema = z.object({
  Name: z.string(),
  Bonus: z.number().int(),
});

export const StatsSchema = z.object({
  conditions: JSONSchema(z.array(z.unknown())),
  generalInfo: JSONSchema(GeneralInfoSchema),
  maxHP: z.number().int(),
  maxResolve: z.number().int().nullish(),
  maxStamina: z.number().int().nullish(),
  totalAC: z.number().int(),
  totalClassDC: z.number().int(),
  totalPerception: z.number().int(),
  totalAbilityScores: JSONSchema(z.array(BonusSchema)),
  totalSaves: JSONSchema(z.array(BonusSchema)),
  totalSkills: JSONSchema(z.array(BonusSchema)),
  totalSpeed: z.number(),
});
