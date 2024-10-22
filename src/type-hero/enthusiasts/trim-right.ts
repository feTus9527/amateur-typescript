// https://typehero.dev/challenge/trim-right
// FIXME
/// Input START
type TrimRight<S extends string> = any;
/// Input END

namespace TrimRightTest {
  type cases = [
    Expect<Equal<TrimRight<"str">, "str">>,
    Expect<Equal<TrimRight<"str ">, "str">>,
    Expect<Equal<TrimRight<"str     ">, "str">>,
    Expect<Equal<TrimRight<"     str     ">, "     str">>,
    Expect<Equal<TrimRight<"   foo bar  \n\t ">, "   foo bar">>,
    Expect<Equal<TrimRight<"">, "">>,
    Expect<Equal<TrimRight<"\n\t ">, "">>,
  ];
}
