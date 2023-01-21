import { z } from "zod";

const JSONSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.preprocess((value) => {
    try {
      // @ts-expect-error We know value might not work here
      return JSON.parse(value);
    } catch (error) {
      return undefined; // if an error occurs parsing, assume the field is not there
    }
  }, schema);

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
const ScoreSchema = z.object({
  Name: z.string(),
  Score: z.number().int(),
});

export const StatsSchema = z.object({
  conditions: JSONSchema(z.array(z.unknown())).nullish(),
  generalInfo: JSONSchema(GeneralInfoSchema).nullish(),
  maxHP: z.number().int(),
  maxResolve: z.number().int().nullish(),
  maxStamina: z.number().int().nullish(),
  totalAC: z.number().int(),
  totalClassDC: z.number().int(),
  totalPerception: z.number().int(),
  totalAbilityScores: JSONSchema(z.array(ScoreSchema)),
  totalSaves: JSONSchema(z.array(BonusSchema)),
  totalSkills: JSONSchema(z.array(BonusSchema)),
  totalSpeed: z.number(),
});
