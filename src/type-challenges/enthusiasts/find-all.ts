// https://typehero.dev/challenge/findall
// FIXME
/// Input START
type FindAll<T extends string, P extends string> = any;
// Input END

namespace FindAllTest {
  type cases = [
    Expect<
      Equal<FindAll<"Collection of TypeScript type challenges", "Type">, [14]>
    >,
    Expect<
      Equal<FindAll<"Collection of TypeScript type challenges", "pe">, [16, 27]>
    >,
    Expect<Equal<FindAll<"Collection of TypeScript type challenges", "">, []>>,
    Expect<Equal<FindAll<"", "Type">, []>>,
    Expect<Equal<FindAll<"", "">, []>>,
    Expect<Equal<FindAll<"AAAA", "A">, [0, 1, 2, 3]>>,
    Expect<Equal<FindAll<"AAAA", "AA">, [0, 1, 2]>>,
  ];
}
