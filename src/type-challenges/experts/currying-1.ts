// https://typehero.dev/challenge/currying-1
// FIXME
/// Input START
declare function Currying(fn: any): any;
/// Input END

namespace Currying1Test {
  const curried1 = Currying((a: string, b: number, c: boolean) => true);
  const curried2 = Currying(
    (
      a: string,
      b: number,
      c: boolean,
      d: boolean,
      e: boolean,
      f: string,
      g: boolean,
    ) => true,
  );
  const curried3 = Currying(() => true);

  type cases = [
    Expect<
      Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>
    >,
    Expect<
      Equal<
        typeof curried2,
        (
          a: string,
        ) => (
          b: number,
        ) => (
          c: boolean,
        ) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
      >
    >,
    Expect<Equal<typeof curried3, () => true>>,
  ];
}
