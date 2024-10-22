// https://typehero.dev/challenge/isnegativenumber
// FIXME
/// Input START
type IsNegativeNumber<T extends number> = any;
/// Input END

namespace IsNegativeNumberTest {
  type cases = [
    Expect<Equal<IsNegativeNumber<0>, false>>,
    Expect<Equal<IsNegativeNumber<number>, never>>,
    Expect<Equal<IsNegativeNumber<-1 | -2>, never>>,
    Expect<Equal<IsNegativeNumber<-1>, true>>,
    Expect<Equal<IsNegativeNumber<-1.9>, true>>,
    Expect<Equal<IsNegativeNumber<-100_000_000>, true>>,
    Expect<Equal<IsNegativeNumber<1>, false>>,
    Expect<Equal<IsNegativeNumber<1.9>, false>>,
    Expect<Equal<IsNegativeNumber<100_000_000>, false>>,
  ];
}
