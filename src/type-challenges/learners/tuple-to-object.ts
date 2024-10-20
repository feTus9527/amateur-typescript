// https://typehero.dev/challenge/tuple-to-object

/// Input START
type TupleToObject<T extends readonly PropertyKey[]> = {
  [K in T[number]]: K;
};
/// Input END

namespace TupleToObjectTest {
  const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
  const tupleNumber = [1, 2, 3, 4] as const;
  const sym1 = Symbol(1);
  const sym2 = Symbol(2);
  const tupleSymbol = [sym1, sym2] as const;
  const tupleMix = [1, "2", 3, "4", sym1] as const;

  type cases = [
    Expect<
      Equal<
        TupleToObject<typeof tuple>,
        {
          tesla: "tesla";
          "model 3": "model 3";
          "model X": "model X";
          "model Y": "model Y";
        }
      >
    >,
    Expect<
      Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>
    >,
    Expect<
      Equal<
        TupleToObject<typeof tupleSymbol>,
        { [sym1]: typeof sym1; [sym2]: typeof sym2 }
      >
    >,
    Expect<
      Equal<
        TupleToObject<typeof tupleMix>,
        { 1: 1; "2": "2"; 3: 3; "4": "4"; [sym1]: typeof sym1 }
      >
    >,
  ];

  // @ts-expect-error array and object are illegal property key
  type error = TupleToObject<[[1, 2], {}]>;
}