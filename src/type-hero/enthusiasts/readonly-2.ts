// https://typehero.dev/challenge/readonly-2
// FIXME
/// Input START
type MyReadonly2<T, K> = any;
/// Input END

namespace Readonly2Test {
  type cases = [
    Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
    Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
    Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>,
    Expect<Alike<MyReadonly2<Todo2, "description">, Expected>>,
  ];

  // @ts-expect-error
  type error = MyReadonly2<Todo1, "title" | "invalid">;

  interface Todo1 {
    title: string;
    description?: string;
    completed: boolean;
  }

  interface Todo2 {
    readonly title: string;
    description?: string;
    completed: boolean;
  }

  interface Expected {
    readonly title: string;
    readonly description?: string;
    completed: boolean;
  }
}
