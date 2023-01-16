import { z } from "zod";
import {
  SourceSchema,
  TimestampsSchema,
  ActionTypes,
  NumberBoolean,
} from "./shared";

const AbilityTLAUnion = z.union([
  z.literal("STR"),
  z.literal("DEX"),
  z.literal("CON"),
  z.literal("INT"),
  z.literal("WIS"),
  z.literal("CHA"),
]);

const BoostSchema = z
  .object({
    Ability: AbilityTLAUnion.or(z.literal("ALL")), // Not sure what ALL is used for, but it is present in __mocks__/Haruya_Harutest.guidechar
    Bonus: z.string(),
    // Formatted as ${Ability}:::${Bonus} (i.e. STR:::Boost)
    value: z.string(),
  })
  .merge(SourceSchema)
  .merge(TimestampsSchema);

const FeatSchema = z
  .object({
    value: z.object({
      id: z.number(),
      name: z.string(),
      // Below fields are present and might be useful, they are here for completions sake
      actions: ActionTypes,
      canSelectMultiple: NumberBoolean,
      code: z.unknown(),
      contentSrc: z.string(),
      cost: z.unknown(),
      description: z.string().nullish(),
      frequency: z.unknown(),
      genTypeName: z.unknown(),
      genericType: z.string().nullish(), // Field is unreliable, so we'll just say it's there and leave it at that z.literal("SKILL-FEAT").or(z.literal("GENERAL-FEAT")).or(z.literal("ANCESTRY-FEAT")).nullable()
      homebrewID: z.unknown(),
      isArchived: NumberBoolean,
      isCore: NumberBoolean,
      isDefault: NumberBoolean,
      level: z.number().int(),
      minProf: z.unknown(),
      prerequisites: z.string().nullish(),
      skillID: z.number().int().nullish(),
      special: z.string().nullish(),
      trigger: z.string().nullish(),
      version: z.string().nullish(),
    }),
  })
  .merge(SourceSchema);
export type Feat = z.infer<typeof FeatSchema>["value"];

const LanguageSchema = z
  .object({
    value: z.object({
      id: z.number().int(),
      name: z.string(),
      // Below are extra fields here for the sake of completion
      description: z.string().nullish(),
      script: z.string().nullish(),
      speakers: z.string().nullish(),
      homebrewID: z.unknown(),
    }),
  })
  .merge(SourceSchema);

export const ProficiencySchema = z
  .object({
    For: z.string(), // What type of increase (ie Skill or Class DC)
    Prof: z.string(), // What it;'s being set to
    To: z.string(), // Which particular skill
    SourceName: z.string(), // Why this happened (i.e. background or feat or general skill increase)
    value: z.string(), // formatted as For:::To:::Prof:::SourceName
  })
  .merge(SourceSchema);

export const SenseSchema = z
  .object({
    value: z.object({
      id: z.number().int(),
      name: z.string(),
      // bonus fields
      description: z.string(),
      isVisionType: NumberBoolean,
      visionPrecedence: z.number().nullish(),
    }),
  })
  .merge(SourceSchema);

export const BuildSchema = z.object({
  boosts: z.array(BoostSchema),
  feats: z.array(FeatSchema),
  languages: z.array(LanguageSchema),
  proficiencies: z.array(ProficiencySchema),
  senses: z.array(SenseSchema),
  // unsupported
  //   domains: z.array(z.unknown()),
});
export type Build = z.infer<typeof BuildSchema>;
