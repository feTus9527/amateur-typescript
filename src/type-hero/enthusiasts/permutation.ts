// https://typehero.dev/challenge/permutation
// FIXME
/// Input START
type Permutation<T> = any;
/// Input END

namespace PermutationTest {
  type cases = [
    Expect<Equal<Permutation<"A">, ["A"]>>,
    Expect<
      Equal<
        Permutation<"A" | "B" | "C">,
        | ["A", "B", "C"]
        | ["A", "C", "B"]
        | ["B", "A", "C"]
        | ["B", "C", "A"]
        | ["C", "A", "B"]
        | ["C", "B", "A"]
      >
    >,
    Expect<
      Equal<
        Permutation<"B" | "A" | "C">,
        | ["A", "B", "C"]
        | ["A", "C", "B"]
        | ["B", "A", "C"]
        | ["B", "C", "A"]
        | ["C", "A", "B"]
        | ["C", "B", "A"]
      >
    >,
    Expect<Equal<Permutation<boolean>, [false, true] | [true, false]>>,
    Expect<Equal<Permutation<never>, []>>,
  ];
}
