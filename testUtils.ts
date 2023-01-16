import { readFileSync } from "fs";
import path from "path";

export type GuidecharFileName = `${string}.guidechar`;
export const importGuidechar = (fileName: GuidecharFileName) => {
  return readFileSync(path.resolve("./__mocks__/" + fileName)).toString();
};

export function deepObjectContaining<T extends {}>(obj: T) {
  return expect.objectContaining(
    Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
        if (typeof value === "object" && value != null) {
          return [key, deepObjectContaining(value)];
        }

        return [key, value];
      })
    )
  );
}
