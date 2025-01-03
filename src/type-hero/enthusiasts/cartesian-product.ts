// https://typehero.dev/challenge/cartesianproduct
// FIXME
/// Input START
type CartesianProduct<T, U> = any;
/// Input END

namespace CartesianProductTest {
  type cases = [
    Expect<
      Equal<
        CartesianProduct<1 | 2, "a" | "b">,
        [2, "a"] | [1, "a"] | [2, "b"] | [1, "b"]
      >
    >,
    Expect<
      Equal<
        CartesianProduct<1 | 2 | 3, "a" | "b" | "c">,
        | [2, "a"]
        | [1, "a"]
        | [3, "a"]
        | [2, "b"]
        | [1, "b"]
        | [3, "b"]
        | [2, "c"]
        | [1, "c"]
        | [3, "c"]
      >
    >,
    Expect<Equal<CartesianProduct<1 | 2, "a" | never>, [2, "a"] | [1, "a"]>>,
    Expect<
      Equal<
        CartesianProduct<"a", Function | string>,
        ["a", Function] | ["a", string]
      >
    >,
  ];
}
