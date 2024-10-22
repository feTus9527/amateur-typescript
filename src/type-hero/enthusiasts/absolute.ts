// https://typehero.dev/challenge/absolute
// FIXME
/// Input START
type Absolute<T extends number | string | bigint> = any;
/// Input END

namespace AbsoluteTest {
  type cases = [
    Expect<Equal<Absolute<0>, "0">>,
    Expect<Equal<Absolute<-0>, "0">>,
    Expect<Equal<Absolute<10>, "10">>,
    Expect<Equal<Absolute<-5>, "5">>,
    Expect<Equal<Absolute<"0">, "0">>,
    Expect<Equal<Absolute<"-0">, "0">>,
    Expect<Equal<Absolute<"10">, "10">>,
    Expect<Equal<Absolute<"-5">, "5">>,
    Expect<Equal<Absolute<-1_000_000n>, "1000000">>,
    Expect<Equal<Absolute<9_999n>, "9999">>,
  ];
}
