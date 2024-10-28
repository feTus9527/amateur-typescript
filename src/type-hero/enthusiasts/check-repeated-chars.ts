// https://typehero.dev/challenge/checkrepeatedchars

/// Input START
type CheckRepeatedChars<
  T extends string,
  A extends any[] = [],
> = T extends `${infer L}${infer R}`
  ? L extends A[number]
    ? true
    : CheckRepeatedChars<R, [...A, L]>
  : false;
/// Input END

namespace CheckRepeatedCharsTest {
  type cases = [
    Expect<Equal<CheckRepeatedChars<"abc">, false>>,
    Expect<Equal<CheckRepeatedChars<"abb">, true>>,
    Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
    Expect<Equal<CheckRepeatedChars<"">, false>>,
  ];
}
