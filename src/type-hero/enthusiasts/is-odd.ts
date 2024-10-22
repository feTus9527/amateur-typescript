// https://typehero.dev/challenge/isodd
// FIXME
/// Input START
type IsOdd<T extends number> = any;
/// Input END

namespace IsOddTest {
  type cases = [
    Expect<Equal<IsOdd<5>, true>>,
    Expect<Equal<IsOdd<2023>, true>>,
    Expect<Equal<IsOdd<1453>, true>>,
    Expect<Equal<IsOdd<1926>, false>>,
    Expect<Equal<IsOdd<2.3>, false>>,
    Expect<Equal<IsOdd<3e23>, false>>,
    Expect<Equal<IsOdd<number>, false>>,
  ];
}
