// https://typehero.dev/challenge/required-keys
// FIXME
/// Input START
type RequiredKeys<T> = any;
/// Input END

namespace RequiredKeysTest {
  type cases = [
    Expect<Equal<RequiredKeys<{ a: number; b?: string }>, "a">>,
    Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, "a">>,
    Expect<
      Equal<
        RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>,
        "a" | "c" | "d"
      >
    >,
    Expect<Equal<RequiredKeys<{}>, never>>,
  ];
}
