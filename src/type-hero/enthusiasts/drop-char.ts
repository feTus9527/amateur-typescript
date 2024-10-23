// https://typehero.dev/challenge/drop-char

/// Input START
type DropChar<
  S extends string,
  C extends string,
> = S extends `${infer X}${C}${infer Y}` ? DropChar<`${X}${Y}`, C> : S;
/// Input END

namespace DropCharTest {
  type cases = [
    // @ts-expect-error empty string cause infinity recursion
    Expect<Equal<DropChar<"butter fly!", "">, "butterfly!">>,
    Expect<Equal<DropChar<"butter fly!", " ">, "butterfly!">>,
    Expect<Equal<DropChar<"butter fly!", "!">, "butter fly">>,
    Expect<Equal<DropChar<"    butter fly!        ", " ">, "butterfly!">>,
    Expect<Equal<DropChar<" b u t t e r f l y ! ", " ">, "butterfly!">>,
    Expect<
      Equal<DropChar<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">
    >,
    Expect<
      Equal<DropChar<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">
    >,
  ];
}
