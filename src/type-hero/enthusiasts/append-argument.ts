// https://typehero.dev/challenge/append-argument

/// Input START
type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer P
) => infer R
  ? (...args: [...P, A]) => R
  : never;
/// Input END

namespace AppendArgumentTest {
  type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;
  type Result1 = (a: number, b: string, x: boolean) => number;

  type Case2 = AppendArgument<() => void, undefined>;
  type Result2 = (x: undefined) => void;

  type cases = [
    Expect<Equal<Case1, Result1>>,
    Expect<Equal<Case2, Result2>>,
    // @ts-expect-error unknown is not a function
    AppendArgument<unknown, undefined>,
  ];
}
