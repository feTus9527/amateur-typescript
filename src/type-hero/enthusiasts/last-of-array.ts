// https://typehero.dev/challenge/last-of-array

/// Input START
type Last<T extends any[]> = T extends [...infer L, infer R] ? R : never;
/// Input END

namespace LastOfArrayTest {
  type cases = [
    Expect<Equal<Last<[]>, never>>,
    Expect<Equal<Last<[2]>, 2>>,
    Expect<Equal<Last<[3, 2, 1]>, 1>>,
    Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
  ];
}
