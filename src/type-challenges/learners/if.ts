// https://typehero.dev/challenge/if

/// Input START
type If<C extends boolean, T, F> = C extends true ? T : F;
/// Input END

module Test {
  type cases = [
    Expect<Equal<If<true, "a", "b">, "a">>,
    Expect<Equal<If<false, "a", 2>, 2>>,
    Expect<Equal<If<boolean, "a", 2>, "a" | 2>>,
  ];
  type a = If<boolean, "a", 2>;
  // @ts-expect-error
  type error = If<null, "a", "b">;
}
