import { z } from "zod";
import { NumberBoolean } from "./shared";

const NameSchema = z.object({
  name: z.string(),
});

const AncestrySchema = z
  .object({
    size: z.string(),
    speed: z.number(),
  })
  .merge(NameSchema);

const BackgroundSchema = NameSchema;
const ClassSchema = NameSchema;
const HeritageSchema = NameSchema;

export const CharacterSchema = z.object({
  ancestryID: z.number().int(),
  backgroundID: z.number().int(),
  buildID: z.number().nullish(),
  classId: z.number().int(),
  classID_2: z.number().int().nullish(), // presumable for dual class rule
  level: z.number().int(),
  name: z.string(),
  experience: z.number(),
  _ancestry: AncestrySchema,
  _background: BackgroundSchema,
  _class: ClassSchema,
  _heritage: HeritageSchema,
  // Can use these booleans to detect discrepencies in game world settings vs what the character was created with
  variantAncestryParagon: NumberBoolean,
  variantAutoBonusProgression: NumberBoolean,
  variantFreeArchetype: NumberBoolean,
  variantGradualAbilityBoosts: NumberBoolean,
  variantProfWithoutLevel: NumberBoolean,
  variantStamina: NumberBoolean,
});
