// https://typehero.dev/challenge/flip-arguments

/// Input START
type ReverseArray<T extends any[]> = T extends [infer L, ...infer R]
  ? [...Reverse<R>, L]
  : T;
type FlipArguments<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => infer _
  ? (...args: ReverseArray<P>) => _
  : never;
/// Input END

namespace FlipArgumentsTest {
  type cases = [
    Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
    Expect<
      Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>
    >,
    Expect<
      Equal<
        FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>,
        (arg0: boolean, arg1: number, arg2: string) => void
      >
    >,
  ];

  type errors = [
    // @ts-expect-error not a function type
    FlipArguments<"string">,
    // @ts-expect-error not a function type
    FlipArguments<{ key: "value" }>,
    // @ts-expect-error not a function type
    FlipArguments<["apple", "banana", 100, { a: 1 }]>,
    // @ts-expect-error not a function type
    FlipArguments<null | undefined>,
  ];
}
