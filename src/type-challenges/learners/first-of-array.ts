// https://typehero.dev/challenge/first-of-array

/// Input START
type First<T extends any[]> = T extends [] ? never : T[0];
/// Input END

namespace FirstOfArrayTest {
  type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>,
  ];

  type errors = [
    // @ts-expect-error not an array input
    First<"notArray">,
    // @ts-expect-error input is a arraylike object
    First<{ 0: "arrayLike" }>,
  ];
}
