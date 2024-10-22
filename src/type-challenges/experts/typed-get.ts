// https://typehero.dev/challenge/typed-get
// FIXME
/// Input START
type Get<T, K> = string;
/// Input END

namespace TypedGetTest {
  type cases = [
    Expect<Equal<Get<Data, "hello">, "world">>,
    Expect<Equal<Get<Data, "foo.bar.count">, 6>>,
    Expect<Equal<Get<Data, "foo.bar">, { value: "foobar"; count: 6 }>>,
    Expect<Equal<Get<Data, "foo.baz">, false>>,

    Expect<Equal<Get<Data, "no.existed">, never>>,
  ];

  type Data = {
    foo: {
      bar: {
        value: "foobar";
        count: 6;
      };
      included: true;
    };
    "foo.baz": false;
    hello: "world";
  };
}
