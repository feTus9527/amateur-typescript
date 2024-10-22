// https://typehero.dev/challenge/objectfromentries
// FIXME
/// Input START
type ObjectFromEntries<T> = any;
/// Input END

namespace ObjectFromEntriesTest {
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }

  type ModelEntries =
    | ["name", string]
    | ["age", number]
    | ["locations", string[] | null];

  type cases = [Expect<Equal<ObjectFromEntries<ModelEntries>, Model>>];
}
