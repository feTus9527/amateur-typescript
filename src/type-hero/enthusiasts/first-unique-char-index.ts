// https://typehero.dev/challenge/firstuniquecharindex
// FIXME
/// Input START
type FirstUniqueCharIndex<T extends string> = any;
/// Input END

namespace FirstUniqueCharIndexTest {
  type cases = [
    Expect<Equal<FirstUniqueCharIndex<"leetcode">, 0>>,
    Expect<Equal<FirstUniqueCharIndex<"loveleetcode">, 2>>,
    Expect<Equal<FirstUniqueCharIndex<"aabb">, -1>>,
    Expect<Equal<FirstUniqueCharIndex<"">, -1>>,
    Expect<Equal<FirstUniqueCharIndex<"aaa">, -1>>,
  ];
}
