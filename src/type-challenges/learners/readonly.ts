// https://typehero.dev/challenge/readonly

/// Input START
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
/// Input END

module Test {
  type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

  interface Todo1 {
    title: string;
    description: string;
    completed: boolean;
    meta: {
      author: string;
    };
  }
}
