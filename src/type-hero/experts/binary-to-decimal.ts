// https://typehero.dev/challenge/binary-to-decimal
// FIXME
/// Input START
type BinaryToDecimal<S extends string> = any;
/// Input END

namespace BinaryToDecimalTest {
  type cases = [
    Expect<Equal<BinaryToDecimal<"10">, 2>>,
    Expect<Equal<BinaryToDecimal<"0011">, 3>>,
    Expect<Equal<BinaryToDecimal<"00000000">, 0>>,
    Expect<Equal<BinaryToDecimal<"11111111">, 255>>,
    Expect<Equal<BinaryToDecimal<"10101010">, 170>>,
  ];
}
