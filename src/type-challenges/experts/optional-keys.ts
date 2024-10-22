// https://typehero.dev/challenge/optional-keys
// FIXME
/// Input START
type OptionalKeys<T> = any;
/// Input END

namespace OptionalKeysTest {
  type cases = [
    Expect<Equal<OptionalKeys<{ a: number; b?: string }>, "b">>,
    Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, "b">>,
    Expect<
      Equal<
        OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>,
        "b" | "c" | "d"
      >
    >,
    Expect<Equal<OptionalKeys<{}>, never>>,
  ];
}
