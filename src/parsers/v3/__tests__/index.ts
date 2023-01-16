import { parseGuidechar } from "..";
import {
  importGuidechar,
  GuidecharFileName,
  deepObjectContaining,
} from "../../../../testUtils";
import { V3Guidechar } from "../../../schemas/v3";
import { DeepPartial } from "../../../utils";
import { ParsingError, UnsupportedVersionError } from "../errors";

describe(parseGuidechar, () => {
  const validGuidecharCases: [GuidecharFileName, DeepPartial<V3Guidechar>][] = [
    ["AlexanderKor.guidechar", { character: { name: "Alexander Kor" } }],
    ["Haruya_Harutest.guidechar", { character: { name: "Haruya Harutest" } }],
    [
      "Razlin_Stickletest.guidechar",
      { character: { name: "Razlin Stickletest" } },
    ],
    [
      "ChampionWithSpellcastingDedication.guidechar",
      { character: { name: "Unnamed Character" } },
    ],
  ];

  test.each(validGuidecharCases)(
    "it successfully parses %s",
    (guidecharName, expectedOutput) => {
      const expected = deepObjectContaining({ version: 3, ...expectedOutput });

      expect(parseGuidechar(importGuidechar(guidecharName))).toEqual(expected);
    }
  );

  describe("errors", () => {
    it("throws a ParsingError if something goes wrong during parsing", () => {
      expect(() => parseGuidechar("")).toThrowError(ParsingError);
      expect(() => parseGuidechar("{}")).toThrowError(ParsingError);
      expect(() => parseGuidechar('{ "version": 3 }')).toThrowError(
        ParsingError
      );
      expect(() => parseGuidechar("[]")).toThrowError(ParsingError);
      expect(() => parseGuidechar("null")).toThrowError(ParsingError);
      expect(() => parseGuidechar('{ "someRandomJson": 123 }')).toThrowError(
        ParsingError
      );
    });
  });
});
