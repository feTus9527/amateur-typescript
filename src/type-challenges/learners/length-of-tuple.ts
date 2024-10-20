// https://typehero.dev/challenge/length-of-tuple

/// Input START
type Length<T extends readonly any[]> = T["length"];
/// Input END

namespace LengthOfTupleTest {
  const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
  const spaceX = [
    "FALCON 9",
    "FALCON HEAVY",
    "DRAGON",
    "STARSHIP",
    "HUMAN SPACEFLIGHT",
  ] as const;

  type cases = [
    Expect<Equal<Length<typeof tesla>, 4>>,
    Expect<Equal<Length<typeof spaceX>, 5>>,
    // @ts-expect-error 5 doesn't have length property
    Length<5>,
    // @ts-expect-error string has length property, but not a correct example of this tuple test
    Length<"hello world">,
  ];
}
