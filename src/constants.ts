import enJson from "../languages/en.json";

type Join<
  A extends string,
  B extends string,
  S extends string = "."
> = `${A}${S}${B}`;

// I have no idea how this doesn't warn about infinite recursion, but it works
//https://stackoverflow.com/a/68404823
type DotPrefix<T extends string> = T extends "" ? "" : `.${T}`;
type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
          DotNestedKeys<T[K]>
        >}`;
      }[Exclude<keyof T, symbol>]
    : ""
) extends infer D
  ? Extract<D, string>
  : never;

// Since english is the default language, let's use it's keys as the base.
export type TranslationKey = DotNestedKeys<typeof enJson>;
