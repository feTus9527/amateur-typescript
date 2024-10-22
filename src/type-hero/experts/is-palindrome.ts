// https://typehero.dev/challenge/ispalindrome
// FIXME
/// Input START
type IsPalindrome<T> = any;
/// Input END

namespace IsPalindromeTest {
  type cases = [
    Expect<Equal<IsPalindrome<"abc">, false>>,
    Expect<Equal<IsPalindrome<"b">, true>>,
    Expect<Equal<IsPalindrome<"abca">, false>>,
    Expect<Equal<IsPalindrome<"abba">, true>>,
    Expect<Equal<IsPalindrome<"abcba">, true>>,
    Expect<Equal<IsPalindrome<121>, true>>,
    Expect<Equal<IsPalindrome<2332>, true>>,
    Expect<Equal<IsPalindrome<19260817>, false>>,
  ];
}
