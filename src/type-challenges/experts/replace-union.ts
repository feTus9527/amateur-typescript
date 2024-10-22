// https://typehero.dev/challenge/replace-union
// FIXME
/// Input START
type UnionReplace<T, U extends [any, any][]> = any;
/// Input END

namespace ReplaceUnionTest {
  type cases = [
    // string -> null
    Expect<
      Equal<UnionReplace<number | string, [[string, null]]>, number | null>
    >,

    // string -> null
    Expect<
      Equal<
        UnionReplace<number | string, [[string, null], [Date, Function]]>,
        number | null
      >
    >,

    // Date -> string; Function -> undefined
    Expect<
      Equal<
        UnionReplace<
          Function | Date | object,
          [[Date, string], [Function, undefined]]
        >,
        undefined | string | object
      >
    >,
  ];
}
