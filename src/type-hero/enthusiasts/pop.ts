// https://typehero.dev/challenge/pop

/// Input START
type Pop<T extends any[]> = T extends [...infer L, infer R] ? [...L] : T;
/// Input END

namespace PopTest {
  type cases = [
    Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
    Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
    Expect<Equal<Pop<[]>, []>>,
  ];
}
