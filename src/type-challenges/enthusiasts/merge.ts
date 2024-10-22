// https://typehero.dev/challenge/merge
// FIXME
/// Input START
type Merge<F, S> = any;
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
