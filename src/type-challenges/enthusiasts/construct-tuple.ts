// https://typehero.dev/challenge/construct-tuple
// FIXME
/// Input START
type ConstructTuple<L extends number> = any;
/// Input END

namespace ConstructTupleTest {
  type cases = [
    Expect<Equal<ConstructTuple<0>, []>>,
    Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
    Expect<Equal<ConstructTuple<999>["length"], 999>>,
    // @ts-expect-error
    Expect<Equal<ConstructTuple<1000>["length"], 1000>>,
  ];
}
