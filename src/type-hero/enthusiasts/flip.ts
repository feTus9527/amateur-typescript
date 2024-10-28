// https://typehero.dev/challenge/flip

/// Input START
type Flip<T extends Record<PropertyKey, any>> = {
  [K in keyof T as `${T[K]}`]: K;
};
/// Input END

namespace FlipTest {
  type cases = [
    Expect<Equal<{ a: "pi" }, Flip<{ pi: "a" }>>>,
    Expect<NotEqual<{ b: "pi" }, Flip<{ pi: "a" }>>>,
    Expect<Equal<{ 3.14: "pi"; true: "bool" }, Flip<{ pi: 3.14; bool: true }>>>,
    Expect<
      Equal<
        { val2: "prop2"; val: "prop" },
        Flip<{ prop: "val"; prop2: "val2" }>
      >
    >,
  ];
}
