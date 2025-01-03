// https://typehero.dev/challenge/partialbykeys
// FIXME
/// Input START
type PartialByKeys<T, K> = any;
/// Input END

namespace PartialByKeysTest {
  interface User {
    name: string;
    age: number;
    address: string;
  }

  interface UserPartialName {
    name?: string;
    age: number;
    address: string;
  }

  interface UserPartialNameAndAge {
    name?: string;
    age?: number;
    address: string;
  }

  type cases = [
    Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
    Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
    Expect<Equal<PartialByKeys<User>, Partial<User>>>,
    // @ts-expect-error
    Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>,
  ];
}
