// https://typehero.dev/challenge/tree-path-array
// FIXME
/// Input START
type Path<T> = any;
/// Input END

namespace TreePathArrayTest {
  declare const example: {
    foo: {
      bar: {
        a: string;
      };
      baz: {
        b: number;
        c: number;
      };
    };
  };

  type cases = [
    ExpectTrue<ExpectExtends<Path<(typeof example)["foo"]["bar"]>, ["a"]>>,
    ExpectTrue<
      ExpectExtends<Path<(typeof example)["foo"]["baz"]>, ["b"] | ["c"]>
    >,
    ExpectTrue<
      ExpectExtends<
        Path<(typeof example)["foo"]>,
        ["bar"] | ["baz"] | ["bar", "a"] | ["baz", "b"] | ["baz", "c"]
      >
    >,
    ExpectFalse<ExpectExtends<Path<(typeof example)["foo"]["bar"]>, ["z"]>>,
  ];
}
