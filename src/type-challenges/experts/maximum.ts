// https://typehero.dev/challenge/maximum
// FIXME
/// Input START
type Maximum<T extends any[]> = any;
/// Input END

namespace MaximumTest {
  type cases = [
    Expect<Equal<Maximum<[]>, never>>,
    Expect<Equal<Maximum<[0, 2, 1]>, 2>>,
    Expect<Equal<Maximum<[1, 20, 200, 150]>, 200>>,
  ];
}
