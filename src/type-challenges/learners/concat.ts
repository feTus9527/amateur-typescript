// https://typehero.dev/challenge/concat

/// Input START
type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];
/// Input END

namespace ConcatTest {
  const tuple = [1] as const;
  type cases = [
    Expect<Equal<Concat<[], []>, []>>,
    Expect<Equal<Concat<[], [1]>, [1]>>,
    Expect<Equal<Concat<typeof tuple, typeof tuple>, [1, 1]>>,
    Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
    Expect<
      Equal<
        Concat<["1", 2, "3"], [false, boolean, "4"]>,
        ["1", 2, "3", false, boolean, "4"]
      >
    >,
  ];

  // @ts-expect-error cannot concat two empty types
  type error = Concat<null, undefined>;
}
