// https://typehero.dev/challenge/countreversepairs
// FIXME
/// Input START
type CountReversePairs<T extends number[]> = any;
/// Input END

namespace CountReversePairsTest {
  type cases = [
    Expect<Equal<CountReversePairs<[5, 2, 6, 1]>, 4>>,
    Expect<Equal<CountReversePairs<[1, 2, 3, 4]>, 0>>,
    Expect<Equal<CountReversePairs<[-1, -1]>, 0>>,
    Expect<Equal<CountReversePairs<[-1]>, 0>>,
  ];
}
