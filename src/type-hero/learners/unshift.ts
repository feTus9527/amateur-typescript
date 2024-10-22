// https://typehero.dev/challenge/unshift

/// Input START
type Unshift<T extends any[], U> = [U, ...T];
/// Input END

namespace UnshiftTest {
  type cases = [
    Expect<Equal<Unshift<[], 1>, [1]>>,
    Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
    Expect<Equal<Unshift<["1", 2, "3"], boolean>, [boolean, "1", 2, "3"]>>,
  ];
}
