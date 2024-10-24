// https://typehero.dev/challenge/tuple-to-nested-object

/// Input START
type TupleToNestedObject<T extends PropertyKey[], U> = T extends [
  infer L extends PropertyKey,
  ...infer R extends PropertyKey[],
]
  ? Record<L, TupleToNestedObject<R, U>>
  : U;
/// Input END

namespace TupleToNestedObjectTest {
  type cases = [
    Expect<Equal<TupleToNestedObject<["a"], string>, { a: string }>>,
    Expect<
      Equal<TupleToNestedObject<["a", "b"], number>, { a: { b: number } }>
    >,
    Expect<
      Equal<
        TupleToNestedObject<["a", "b", "c"], boolean>,
        { a: { b: { c: boolean } } }
      >
    >,
    Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
  ];
}
