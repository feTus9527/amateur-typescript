// https://typehero.dev/challenge/objectentries
// FIXME
// Input START
type ObjectEntries<T> = any;
// Input END

namespace ObjectEntriesTest {
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }

  type ModelEntries =
    | ["name", string]
    | ["age", number]
    | ["locations", string[] | null];

  type cases = [
    Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
    Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
    Expect<Equal<ObjectEntries<{ key?: undefined }>, ["key", undefined]>>,
    Expect<Equal<ObjectEntries<{ key: undefined }>, ["key", undefined]>>,
    Expect<
      Equal<
        ObjectEntries<{ key: string | undefined }>,
        ["key", string | undefined]
      >
    >,
  ];
}
