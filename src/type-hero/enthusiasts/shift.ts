// https://typehero.dev/challenge/shift

/// Input START
type Shift<T extends any[]> = T extends [infer F, ...infer _] ? _ : T;
/// Input END

namespace ShiftTest {
  type cases = [
    // @ts-expect-error can only an array shift
    Shift<unknown>,
    Expect<Equal<Shift<[]>, []>>,
    Expect<Equal<Shift<[1]>, []>>,
    Expect<Equal<Shift<[3, 2, 1]>, [2, 1]>>,
    Expect<Equal<Shift<["a", "b", "c", "d"]>, ["b", "c", "d"]>>,
  ];
}
