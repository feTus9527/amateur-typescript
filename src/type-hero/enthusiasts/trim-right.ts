// https://typehero.dev/challenge/trim-right

/// Input START
type TrimRight<S extends string> =
  S extends `${infer L}${" " | "\n" | "\t" | "\r"}` ? TrimRight<L> : S;
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
