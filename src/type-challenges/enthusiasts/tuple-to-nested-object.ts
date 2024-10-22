// https://typehero.dev/challenge/tuple-to-nested-object
// FIXME
/// Input START
type TupleToNestedObject<T, U> = any;
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
