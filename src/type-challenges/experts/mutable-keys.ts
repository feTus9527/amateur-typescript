// https://typehero.dev/challenge/mutable-keys
// FIXME
/// Input START
type MutableKeys<T> = any;
/// Input END

namespace MutableKeysTest {
  type cases = [
    Expect<Equal<MutableKeys<{ a: number; readonly b: string }>, "a">>,
    Expect<Equal<MutableKeys<{ a: undefined; readonly b: undefined }>, "a">>,
    Expect<
      Equal<
        MutableKeys<{
          a: undefined;
          readonly b?: undefined;
          c: string;
          d: null;
        }>,
        "a" | "c" | "d"
      >
    >,
    Expect<Equal<MutableKeys<{}>, never>>,
  ];
}
