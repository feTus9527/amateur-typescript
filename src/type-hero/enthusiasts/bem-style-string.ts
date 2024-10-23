// https://typehero.dev/challenge/bem-style-string

/// Input START
type EString<E extends string[]> = E extends [] ? "" : `__${E[number]}`;
type MString<M extends string[]> = M extends [] ? "" : `--${M[number]}`;
type BEM<
  B extends string,
  E extends string[],
  M extends string[],
> = `${B}${EString<E>}${MString<M>}`;
/// Input END

namespace BEMTest {
  type cases = [
    Expect<Equal<BEM<"btn", ["price"], []>, "btn__price">>,
    Expect<
      Equal<
        BEM<"btn", ["price"], ["warning", "success"]>,
        "btn__price--warning" | "btn__price--success"
      >
    >,
    Expect<
      Equal<
        BEM<"btn", [], ["small", "medium", "large"]>,
        "btn--small" | "btn--medium" | "btn--large"
      >
    >,
  ];
}
