// https://typehero.dev/challenge/trunc
// FIXME
/// Input START
type Trunc = any;
/// Input END

namespace TruncTest {
  type cases = [
    Expect<Equal<Trunc<0.1>, "0">>,
    Expect<Equal<Trunc<0.2>, "0">>,
    Expect<Equal<Trunc<1.234>, "1">>,
    Expect<Equal<Trunc<12.345>, "12">>,
    Expect<Equal<Trunc<-5.1>, "-5">>,
    Expect<Equal<Trunc<".3">, "0">>,
    Expect<Equal<Trunc<"1.234">, "1">>,
    Expect<Equal<Trunc<"-.3">, "-0">>,
    Expect<Equal<Trunc<"-10.234">, "-10">>,
    Expect<Equal<Trunc<10>, "10">>,
  ];
}
