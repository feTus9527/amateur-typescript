// https://typehero.dev/challenge/lastindexof

/// Input START
type LastIndexOf<
  T extends any[],
  U extends any,
  C extends any[] = T,
> = C extends [infer CL, ...infer CR]
  ? T extends [...infer L, infer R]
    ? Equal<R, U> extends true
      ? CR["length"]
      : LastIndexOf<L, U, CR>
    : -1
  : -1;
/// Input END

namespace LastIndexOfTest {
  type cases = [
    Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
    Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
    Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
    Expect<Equal<LastIndexOf<[string, 2, number, "a", number, 1], number>, 4>>,
    Expect<Equal<LastIndexOf<[string, any, 1, number, "a", any, 1], any>, 5>>,
  ];
}
