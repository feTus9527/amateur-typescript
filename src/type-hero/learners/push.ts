// https://typehero.dev/challenge/push

/// Input START
type Push<T extends Array<PropertyKey>, U> = [...T, U];
/// Input END

namespace PushTest {
  type cases = [
    Expect<Equal<Push<[], 1>, [1]>>,
    Expect<Equal<Push<[1, 2], "3">, [1, 2, "3"]>>,
    Expect<Equal<Push<["1", 2, "3"], boolean>, ["1", 2, "3", boolean]>>,
  ];
}
