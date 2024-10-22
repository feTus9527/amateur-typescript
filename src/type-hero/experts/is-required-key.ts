// https://typehero.dev/challenge/isrequiredkey
// FIXME
/// Input START
type IsRequiredKey<T, K extends keyof T> = any;
/// Input END

namespace IsRequiredKeyTest {
  type cases = [
    Expect<Equal<IsRequiredKey<{ a: number; b?: string }, "a">, true>>,
    Expect<Equal<IsRequiredKey<{ a: undefined; b: string }, "a">, true>>,
    Expect<Equal<IsRequiredKey<{ a: number; b?: string }, "b">, false>>,
    Expect<Equal<IsRequiredKey<{ a: number; b?: string }, "b" | "a">, false>>,
    Expect<
      Equal<IsRequiredKey<{ a: undefined; b: undefined }, "b" | "a">, true>
    >,
  ];
}
