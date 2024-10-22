// https://typehero.dev/challenge/get-readonly-keys
// FIXME
/// Input START
type GetReadonlyKeys<T> = any;
/// Input END

namespace GetReadonlyKeysTest {
  type cases = [
    Expect<Equal<"title", GetReadonlyKeys<Todo1>>>,
    Expect<Equal<"title" | "description", GetReadonlyKeys<Todo2>>>,
  ];

  interface Todo1 {
    readonly title: string;
    description: string;
    completed: boolean;
  }

  interface Todo2 {
    readonly title: string;
    readonly description: string;
    completed?: boolean;
  }
}
