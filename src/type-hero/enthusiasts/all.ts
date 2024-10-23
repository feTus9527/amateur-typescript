// https://typehero.dev/challenge/all

/// Input START
type AllEqual<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
type All<T extends any[], U extends any> = T extends [infer L, ...infer R]
  ? AllEqual<U, L> extends true
    ? All<R, U>
    : false
  : true;
/// Input END

namespace AllTest {
  type cases = [
    Expect<Equal<All<[1, 1, 1], 1>, true>>,
    Expect<Equal<All<[1, 1, 2], 1>, false>>,
    Expect<Equal<All<["1", "1", "1"], "1">, true>>,
    Expect<Equal<All<["1", "1", "1"], 1>, false>>,
    Expect<Equal<All<[number, number, number], number>, true>>,
    Expect<Equal<All<[number, number, string], number>, false>>,
    Expect<Equal<All<[null, null, null], null>, true>>,
    Expect<Equal<All<[[1], [1], [1]], [1]>, true>>,
    Expect<Equal<All<[{}, {}, {}], {}>, true>>,
    Expect<Equal<All<[never], never>, true>>,
    Expect<Equal<All<[any], any>, true>>,
    Expect<Equal<All<[unknown], unknown>, true>>,
    Expect<Equal<All<[any], unknown>, false>>,
    Expect<Equal<All<[unknown], any>, false>>,
    Expect<Equal<All<[1, 1, 2], 1 | 2>, false>>,
  ];
}
