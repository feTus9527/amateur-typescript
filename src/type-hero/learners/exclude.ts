// https://typehero.dev/challenge/exclude

/// Input START
type MyExclude<T, U> = T extends U ? never : T;
/// Input END

namespace ExcludeTest {
  type cases = [
    Expect<Equal<MyExclude<"a" | "b" | "c", "a">, "b" | "c">>,
    Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, "c">>,
    Expect<
      Equal<
        MyExclude<string | number | (() => void), Function>,
        string | number
      >
    >,
  ];
}
