// https://typehero.dev/challenge/join
// FIXME
/// Input START
type Join<T, U> = any;
/// Input END

namespace JoinTest {
  type cases = [
    Expect<Equal<Join<["a", "p", "p", "l", "e"], "-">, "a-p-p-l-e">>,
    Expect<Equal<Join<["Hello", "World"], " ">, "Hello World">>,
    Expect<Equal<Join<["2", "2", "2"], 1>, "21212">>,
    Expect<Equal<Join<["o"], "u">, "o">>,
    Expect<Equal<Join<[], "u">, "">>,
    Expect<Equal<Join<["1", "1", "1"]>, "1,1,1">>,
  ];
}
