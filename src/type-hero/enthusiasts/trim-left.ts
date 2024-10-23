// https://typehero.dev/challenge/trim-left

/// Input START
type TrimLeft<S extends string> = S extends `${infer L}${infer R}`
  ? L extends " " | "\n" | "\t" | "\r"
    ? TrimLeft<R>
    : S
  : S;
/// Input END

namespace TrimLeftTest {
  type cases = [
    Expect<Equal<TrimLeft<"str">, "str">>,
    Expect<Equal<TrimLeft<" str">, "str">>,
    Expect<Equal<TrimLeft<"     str">, "str">>,
    Expect<Equal<TrimLeft<"     str     ">, "str     ">>,
    Expect<Equal<TrimLeft<"   \n\t foo bar ">, "foo bar ">>,
    Expect<Equal<TrimLeft<"">, "">>,
    Expect<Equal<TrimLeft<" \n\t">, "">>,
  ];
}
