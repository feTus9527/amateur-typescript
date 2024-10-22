// https://typehero.dev/challenge/run-length-encoding
// FIXME
/// Input START
namespace RLE {
  export type Encode<S extends string> = any;
  export type Decode<S extends string> = any;
}
/// Input END

namespace RunLengthEncodingTest {
  type cases = [
    // Raw string -> encoded string
    Expect<Equal<RLE.Encode<"AAABCCXXXXXXY">, "3AB2C6XY">>,

    // Encoded string -> decoded string
    Expect<Equal<RLE.Decode<"3AB2C6XY">, "AAABCCXXXXXXY">>,
  ];
}
