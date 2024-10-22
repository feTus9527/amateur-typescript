// https://typehero.dev/challenge/take-elements
// FIXME
/// Input START
type Take<N, Arr> = Arr;
/// Input END

namespace TakeElementsTest {
  type cases = [
    Expect<Equal<Take<2, [1, 2, 3]>, [1, 2]>>,
    Expect<Equal<Take<3, ["1", 2, true, false]>, ["1", 2, true]>>,
    Expect<Equal<Take<-2, [1, 2, 3]>, [2, 3]>>,
    Expect<Equal<Take<0, [1, 2, 3]>, []>>,
    Expect<Equal<Take<5, [1, 2, 3]>, [1, 2, 3]>>,
    Expect<Equal<Take<3, []>, []>>,
  ];
}
