// https://typehero.dev/challenge/mutable

/// Input START
type Mutable<T extends object> = {
  -readonly [K in keyof T]: T[K];
};
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
    // @ts-expect-error not an object
    Mutable<"string">,
    // @ts-expect-error not an object
    Mutable<0>,
  ];
}
