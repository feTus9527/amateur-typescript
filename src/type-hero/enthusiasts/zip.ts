// https://typehero.dev/challenge/zip

/// Input START
type Zip<T, U> = T extends [infer TL, ...infer TR]
  ? U extends [infer UL, ...infer UR]
    ? [[TL, UL], ...Zip<TR, UR>]
    : []
  : [];
/// Input END

namespace ZipTest {
  type cases = [
    Expect<Equal<Zip<[], []>, []>>,
    Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
    Expect<Equal<Zip<[1, 2, 3], ["1", "2"]>, [[1, "1"], [2, "2"]]>>,
    Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
    Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>,
  ];
}
