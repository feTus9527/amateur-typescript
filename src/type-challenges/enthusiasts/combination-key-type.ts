// https://typehero.dev/challenge/combination-key-type
// FIXME
/// Input START
type Combs<T extends any[]> = any;
/// Input END

namespace CombinationKeyTypeTest {
  type ModifierKeys = ["cmd", "ctrl", "opt", "fn"];
  type CaseTypeOne =
    | "cmd ctrl"
    | "cmd opt"
    | "cmd fn"
    | "ctrl opt"
    | "ctrl fn"
    | "opt fn";

  type cases = [Expect<Equal<Combs<ModifierKeys>, CaseTypeOne>>];
}
