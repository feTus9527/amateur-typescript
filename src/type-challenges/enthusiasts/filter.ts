// https://typehero.dev/challenge/filter
// FIXME
/// Input START
type Filter<T extends any[], P> = [];
/// Input END

namespace FilterTest {
  type Falsy = false | 0 | "" | null | undefined;

  type cases = [
    Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
    Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
    Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
  ];
}
