// https://typehero.dev/challenge/replace
// FIXME
/// Input START
type Replace<S extends string, From extends string, To extends string> = any;
/// Input END

namespace ReplaceTest {
  type cases = [
    Expect<Equal<Replace<"foobar", "bar", "foo">, "foofoo">>,
    Expect<Equal<Replace<"foobarbar", "bar", "foo">, "foofoobar">>,
    Expect<Equal<Replace<"foobarbar", "", "foo">, "foobarbar">>,
    Expect<Equal<Replace<"foobarbar", "bar", "">, "foobar">>,
    Expect<Equal<Replace<"foobarbar", "bra", "foo">, "foobarbar">>,
    Expect<Equal<Replace<"", "", "">, "">>,
  ];
}
