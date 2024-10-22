// https://typehero.dev/challenge/checkrepeatedchars
// FIXME
/// Input START
type CheckRepeatedChars<T extends string> = any;
/// Input END

namespace CheckRepeatedCharsTest {
  type cases = [
    Expect<Equal<CheckRepeatedChars<"abc">, false>>,
    Expect<Equal<CheckRepeatedChars<"abb">, true>>,
    Expect<Equal<CheckRepeatedChars<"cbc">, true>>,
    Expect<Equal<CheckRepeatedChars<"">, false>>,
  ];
}
