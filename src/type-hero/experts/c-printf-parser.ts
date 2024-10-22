// https://typehero.dev/challenge/c-printf-parser
// FIXME
/// Input START
type ControlsMap = {
  c: "char";
  s: "string";
  d: "dec";
  o: "oct";
  h: "hex";
  f: "float";
  p: "pointer";
};

type ParsePrintFormat = any;
/// Input END

namespace CPrintfParserTest {
  type cases = [
    Expect<Equal<ParsePrintFormat<"">, []>>,
    Expect<Equal<ParsePrintFormat<"Any string.">, []>>,
    Expect<Equal<ParsePrintFormat<"The result is %d.">, ["dec"]>>,
    Expect<Equal<ParsePrintFormat<"The result is %%d.">, []>>,
    Expect<Equal<ParsePrintFormat<"The result is %%%d.">, ["dec"]>>,
    Expect<Equal<ParsePrintFormat<"The result is %f.">, ["float"]>>,
    Expect<Equal<ParsePrintFormat<"The result is %h.">, ["hex"]>>,
    Expect<Equal<ParsePrintFormat<"The result is %q.">, []>>,
    Expect<
      Equal<ParsePrintFormat<"Hello %s: score is %d.">, ["string", "dec"]>
    >,
    Expect<Equal<ParsePrintFormat<"The result is %">, []>>,
  ];
}