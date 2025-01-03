// https://typehero.dev/challenge/integer
// FIXME
/// Input START
type Integer<T> = any;
/// Input END

namespace IntegerTest {
  let x = 1;
  let y = 1 as const;

  type cases1 = [
    Expect<Equal<Integer<1>, 1>>,
    Expect<Equal<Integer<1.1>, never>>,
    Expect<Equal<Integer<1.0>, 1>>,
    Expect<Equal<Integer<1.0>, 1>>,
    Expect<Equal<Integer<0.5>, never>>,
    Expect<Equal<Integer<28.0>, 28>>,
    Expect<Equal<Integer<28.101>, never>>,
    Expect<Equal<Integer<typeof x>, never>>,
    Expect<Equal<Integer<typeof y>, 1>>,
  ];
}
