// https://typehero.dev/challenge/length-of-string

/// Input START
type LengthOfString<
  S extends string,
  T extends any[] = [],
> = S extends `${infer F}${infer _}`
  ? LengthOfString<_, [...T, F]>
  : T["length"];
/// Input END

namespace LengthOfStringTest {
  type cases = [
    Expect<Equal<LengthOfString<"">, 0>>,
    Expect<Equal<LengthOfString<"kumiko">, 6>>,
    Expect<Equal<LengthOfString<"reina">, 5>>,
    Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>,
  ];
}
