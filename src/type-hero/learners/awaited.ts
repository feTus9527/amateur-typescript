// https://typehero.dev/challenge/awaited

/// Input START
type MyAwaited<T> = T extends null | undefined
  ? T
  : T extends {
        then(onfulfilled: infer F, ...args: infer _): any;
      }
    ? F extends (v: infer V, ...rest: infer _) => any
      ? MyAwaited<V>
      : never
    : T;
/// Input END

namespace AwaitedTest {
  type X = Promise<string>;
  type Y = Promise<{ field: number }>;
  type Z = Promise<Promise<string | number>>;
  type Z1 = Promise<Promise<Promise<string | boolean>>>;
  type T = { then: (onfulfilled: (arg: number) => any) => any };

  type cases = [
    Expect<Equal<MyAwaited<X>, string>>,
    Expect<Equal<MyAwaited<Y>, { field: number }>>,
    Expect<Equal<MyAwaited<Z>, string | number>>,
    Expect<Equal<MyAwaited<Z1>, string | boolean>>,
    Expect<Equal<MyAwaited<T>, number>>,
  ];
}
