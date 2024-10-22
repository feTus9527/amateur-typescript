// https://typehero.dev/challenge/capitalize-nest-object-keys
// FIXME
/// Input START
type CapitalizeNestObjectKeys<T> = any;
/// Input END

namespace CapitalizeNestObjectKeysTest {
  type foo = {
    foo: string;
    bars: [{ foo: string }];
  };

  type Foo = {
    Foo: string;
    Bars: [
      {
        Foo: string;
      },
    ];
  };

  type cases = [Expect<Equal<Foo, CapitalizeNestObjectKeys<foo>>>];
}
