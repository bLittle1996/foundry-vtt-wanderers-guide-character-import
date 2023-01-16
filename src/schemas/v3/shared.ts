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
  .nullish() // coerce undefined/null to false to avoid parsing errors if a boolean field is omitted
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
