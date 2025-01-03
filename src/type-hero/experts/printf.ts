// https://typehero.dev/challenge/printf
// FIXME
/// Input START
type Format<T extends string> = any;
/// Input END

namespace PrintfTest {
  type cases = [
    Expect<Equal<Format<"abc">, string>>,
    Expect<Equal<Format<"a%sbc">, (s1: string) => string>>,
    Expect<Equal<Format<"a%dbc">, (d1: number) => string>>,
    Expect<Equal<Format<"a%%dbc">, string>>,
    Expect<Equal<Format<"a%%%dbc">, (d1: number) => string>>,
    Expect<Equal<Format<"a%dbc%s">, (d1: number) => (s1: string) => string>>,
  ];
}
