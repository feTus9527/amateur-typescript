// https://typehero.dev/challenge/reverse

/// Input START
type Reverse<T extends any[]> = T extends [infer L, ...infer R]
  ? [...Reverse<R>, L]
  : T;
/// Input END

namespace ReverseTest {
  type cases = [
    Expect<Equal<Reverse<[]>, []>>,
    Expect<Equal<Reverse<["a", "b"]>, ["b", "a"]>>,
    Expect<Equal<Reverse<["a", "b", "c"]>, ["c", "b", "a"]>>,
  ];

  type errors = [
    // @ts-expect-error not an array
    Reverse<"string">,
    // @ts-expect-error not an array
    Reverse<{ key: "value" }>,
  ];
}
