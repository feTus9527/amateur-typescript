// https://typehero.dev/challenge/subtract
// FIXME
/// Input START
type Subtract<M extends number, S extends number> = any;
/// Input END

namespace SubtractTest {
  type cases = [
    Expect<Equal<Subtract<1, 1>, 0>>,
    Expect<Equal<Subtract<2, 1>, 1>>,
    Expect<Equal<Subtract<1, 2>, never>>,
    // @ts-expect-error
    Expect<Equal<Subtract<1000, 999>, 1>>,
  ];
}
