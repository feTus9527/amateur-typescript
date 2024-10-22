// https://typehero.dev/challenge/isany
// FIXME
/// Input START
type IsAny<T> = any;
/// Input END

namespace IsAnyTest {
  type cases = [
    Expect<Equal<IsAny<any>, true>>,

    Expect<Equal<IsAny<undefined>, false>>,
    Expect<Equal<IsAny<unknown>, false>>,
    Expect<Equal<IsAny<never>, false>>,
    Expect<Equal<IsAny<string>, false>>,
  ];
}
