// https://typehero.dev/challenge/startswith

/// Input START
type StartsWith<T extends string, U extends string> = T extends `${U}${infer _}`
  ? true
  : false;
/// Input END

namespace StartsWithTest {
  type cases = [
    Expect<Equal<StartsWith<"abc", "ac">, false>>,
    Expect<Equal<StartsWith<"abc", "ab">, true>>,
    Expect<Equal<StartsWith<"abc", "abc">, true>>,
    Expect<Equal<StartsWith<"abc", "abcd">, false>>,
    Expect<Equal<StartsWith<"abc", "">, true>>,
    Expect<Equal<StartsWith<"abc", " ">, false>>,
    Expect<Equal<StartsWith<"", "">, true>>,
  ];
}
