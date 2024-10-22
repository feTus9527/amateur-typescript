// https://typehero.dev/challenge/binary-addition
// FIXME
/// Input START
type Bit = 1 | 0;

type BinaryAdd<A extends Bit[], B extends Bit[]> = any;
/// Input END

namespace BinaryAdditionTest {
  type cases = [
    Expect<Equal<BinaryAdd<[1], [1]>, [1, 0]>>,
    Expect<Equal<BinaryAdd<[0], [1]>, [1]>>,
    Expect<Equal<BinaryAdd<[1, 1, 0], [0, 0, 1]>, [1, 1, 1]>>,
    Expect<
      Equal<
        BinaryAdd<
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        >,
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
      >
    >,
    Expect<
      Equal<
        BinaryAdd<[1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 1, 1, 0, 0]>,
        [1, 0, 0, 1, 1, 1, 0, 1, 0]
      >
    >,
  ];
}
