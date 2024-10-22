// https://typehero.dev/challenge/compare-array-length
// FIXME
/// Input START
type CompareArrayLength<T extends any[], U extends any[]> = any;
/// Input END

namespace CompareArrayLengthTest {
  type cases = [
    Expect<Equal<CompareArrayLength<[1, 2, 3, 4], [5, 6]>, 1>>,
    Expect<Equal<CompareArrayLength<[1, 2], [3, 4, 5, 6]>, -1>>,
    Expect<Equal<CompareArrayLength<[], []>, 0>>,
    Expect<Equal<CompareArrayLength<[1, 2, 3], [4, 5, 6]>, 0>>,
  ];
}
