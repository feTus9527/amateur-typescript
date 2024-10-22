// https://typehero.dev/challenge/without
// FIXME
/// Input START
type Without<T, U> = any;
/// Input END

namespace WithoutTest {
  type cases = [
    Expect<Equal<Without<[1, 2], 1>, [2]>>,
    Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
    Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
  ];
}
