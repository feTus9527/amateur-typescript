// https://typehero.dev/challenge/merge
// FIXME
/// Input START
type Merge<F extends object, S extends object> = {
  [K in keyof (F & S)]: K extends keyof S
    ? S[K]
    : K extends keyof F
      ? F[K]
      : never;
};
/// Input END
namespace MergeTest {
  type Foo = {
    a: number;
    b: string;
  };
  type Bar = {
    b: number;
    c: boolean;
  };

  type cases = [
    Expect<
      Equal<
        Merge<Foo, Bar>,
        {
          a: number;
          b: number;
          c: boolean;
        }
      >
    >,
  ];
}
