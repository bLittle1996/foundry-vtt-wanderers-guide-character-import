import { z } from "zod";
import { SourceSchema, TimestampsSchema } from "./shared";
import { BuildSchema } from "./build";

const TraitSchema = z
  .object({
    value: z.string(),
  })
  .merge(SourceSchema)
  .merge(TimestampsSchema);

export const V3GuidecharSchema = z.object({
  version: z.literal(3),
  build: BuildSchema,
  charTraits: z.array(TraitSchema).default([]),
  // unsupported fields
  // animalCompanions: z.array(z.unknown()),
  // spellBookSpells: z.array(z.unknown()),
  // familiars: z.array(z.unknown()),
  // conditions: z.array(z.unknown()),
  // invItems: z.array(z.unknown()),
});
export type V3Guidechar = z.infer<typeof V3GuidecharSchema>;
