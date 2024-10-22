// https://typehero.dev/challenge/length-of-string
// FIXME
/// Input START
type LengthOfString<S extends string> = any;
/// Input END

namespace LengthOfStringTest {
  type cases = [
    Expect<Equal<LengthOfString<"">, 0>>,
    Expect<Equal<LengthOfString<"kumiko">, 6>>,
    Expect<Equal<LengthOfString<"reina">, 5>>,
    Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>,
  ];
}
