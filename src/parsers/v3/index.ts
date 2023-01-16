import { V3Guidechar, V3GuidecharSchema } from "../../schemas/v3";

export const parseGuidechar = (guidecharJson: string): V3Guidechar => {
  return V3GuidecharSchema.parse(JSON.parse(guidecharJson));
};
