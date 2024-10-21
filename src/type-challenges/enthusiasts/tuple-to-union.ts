// https://typehero.dev/challenge/tuple-to-union
// FIXME
/// Input START
type TupleToUnion<T> = any;
/// Input END

namespace TupleToUnionTest {
  type cases = [
    Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
    Expect<Equal<TupleToUnion<[123]>, 123>>,
  ];
}
