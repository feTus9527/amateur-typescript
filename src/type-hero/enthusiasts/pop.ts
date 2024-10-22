// https://typehero.dev/challenge/pop
// FIXME
/// Input START
type Pop<T extends any[]> = any;
/// Input END

namespace PopTest {
  type cases = [
    Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
    Expect<Equal<Pop<["a", "b", "c", "d"]>, ["a", "b", "c"]>>,
    Expect<Equal<Pop<[]>, []>>,
  ];
}
