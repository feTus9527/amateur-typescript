// https://typehero.dev/challenge/parameters

/// Input START
type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never;
/// Input END

namespace ParametersTest {
  function foo(arg1: string, arg2: number): void {}
  function bar(arg1: boolean, arg2: { a: "A" }): void {}
  function baz(): void {}

  type cases = [
    Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
    Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
    Expect<Equal<MyParameters<typeof baz>, []>>,
  ];
}
