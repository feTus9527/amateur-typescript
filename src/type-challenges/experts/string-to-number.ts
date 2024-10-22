// https://typehero.dev/challenge/string-to-number
// FIXME
/// Input START
type ToNumber<S extends string> = any;
/// Input END

namespace StringToNumberTest {
  type cases = [
    Expect<Equal<ToNumber<"0">, 0>>,
    Expect<Equal<ToNumber<"5">, 5>>,
    Expect<Equal<ToNumber<"12">, 12>>,
    Expect<Equal<ToNumber<"27">, 27>>,
    Expect<Equal<ToNumber<"18@7_$%">, never>>,
  ];
}
