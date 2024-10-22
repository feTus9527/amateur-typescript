// https://typehero.dev/challenge/appear-only-once
// FIXME
/// Input START
type FindEles<T extends any[]> = any;
/// Input END

namespace FindElesTest {
  type cases = [
    Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
    Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
    Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
    Expect<Equal<FindEles<[1, 2, number]>, [1, 2, number]>>,
    Expect<Equal<FindEles<[1, 2, number, number]>, [1, 2]>>,
  ];
}
