// https://typehero.dev/challenge/split
// FIXME
/// Input START
type Split<S extends string, SEP extends string> = any;
/// Input END

namespace SplitTest {
  type cases = [
    Expect<Equal<Split<"Hi! How are you?">, ["Hi! How are you?"]>>,
    Expect<Equal<Split<"Hi! How are you?", "z">, ["Hi! How are you?"]>>,
    Expect<
      Equal<Split<"Hi! How are you?", " ">, ["Hi!", "How", "are", "you?"]>
    >,
    Expect<
      Equal<
        Split<"Hi! How are you?", "">,
        [
          "H",
          "i",
          "!",
          " ",
          "H",
          "o",
          "w",
          " ",
          "a",
          "r",
          "e",
          " ",
          "y",
          "o",
          "u",
          "?",
        ]
      >
    >,
    Expect<Equal<Split<"", "">, []>>,
    Expect<
      Equal<Split<"The sine in cosine", "in">, ["The s", "e ", " cos", "e"]>
    >,
    Expect<
      Equal<
        Split<"Never say never, forever and ever.", "ver">,
        ["Ne", " say ne", ", fore", " and e", "."]
      >
    >,
    Expect<Equal<Split<"", "z">, [""]>>,
    Expect<Equal<Split<"">, [""]>>,
    Expect<Equal<Split<string, "whatever">, string[]>>,
  ];
}
