// https://typehero.dev/challenge/mutable
// FIXME
/// Input START
type Mutable<T> = any;
/// Input END

namespace MutableTest {
  interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
      author: string;
    };
  }

  type List = [1, 2, 3];

  type cases = [
    Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
    Expect<Equal<Mutable<Readonly<List>>, List>>,
  ];

  type errors = [
    // @ts-expect-error
    Mutable<"string">,
    // @ts-expect-error
    Mutable<0>,
  ];
}
