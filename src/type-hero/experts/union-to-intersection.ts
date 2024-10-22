// https://typehero.dev/challenge/union-to-intersection
// FIXME
/// Input START
type UnionToIntersection<U> = any;
/// Input END

namespace UnionToIntersectionTest {
  type cases = [
    Expect<Equal<UnionToIntersection<"foo" | 42 | true>, "foo" & 42 & true>>,
    Expect<
      Equal<
        UnionToIntersection<(() => "foo") | ((i: 42) => true)>,
        (() => "foo") & ((i: 42) => true)
      >
    >,
  ];
}
