/**
 * A helper class which assists with localization and string translation
 * @see {@link https://foundryvtt.com/api/classes/client.Localization.html}
 */
export interface Localization {
  defaultModule: string;
  lang: string;
  translations: Record<string, string | undefined>;
  localize(stringId: string): string;
  format(stringId: string, data: Record<string, any> = {}): string;
}
