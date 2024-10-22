// https://typehero.dev/challenge/getmiddleelement
// FIXME
/// Input START
type GetMiddleElement<T> = any;
/// Input END

namespace GetMiddleElementTest {
  type cases = [
    Expect<Equal<GetMiddleElement<[]>, []>>,
    Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
    Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
    Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
    Expect<
      Equal<GetMiddleElement<[() => number, "3", [3, 4], 5]>, ["3", [3, 4]]>
    >,
    Expect<
      Equal<
        GetMiddleElement<[() => string, () => number]>,
        [() => string, () => number]
      >
    >,
    Expect<Equal<GetMiddleElement<[never]>, [never]>>,
  ];
  // @ts-expect-error
  type error = GetMiddleElement<1, 2, 3>;
}