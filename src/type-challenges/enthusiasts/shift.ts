// https://typehero.dev/challenge/shift
// FIXME
/// Input START
type Shift<T> = any;
/// Input END

namespace ShiftTest {
  type cases = [
    // @ts-expect-error
    Shift<unknown>,
    Expect<Equal<Shift<[]>, []>>,
    Expect<Equal<Shift<[1]>, []>>,
    Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
    Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>,
  ];
}
