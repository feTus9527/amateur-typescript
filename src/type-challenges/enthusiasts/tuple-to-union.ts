// https://typehero.dev/challenge/tuple-to-union

/// Input START
type TupleToUnion<T extends readonly any[]> = T[number];
/// Input END

namespace TupleToUnionTest {
  type cases = [
    Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
    Expect<Equal<TupleToUnion<[123]>, 123>>,
  ];
}
