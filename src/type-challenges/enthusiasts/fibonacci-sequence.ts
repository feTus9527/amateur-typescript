// https://typehero.dev/challenge/fibonacci-sequence
// FIXME
/// Input START
type Fibonacci<T extends number> = any;
/// Input END

namespace FibonacciTest {
  type cases = [
    Expect<Equal<Fibonacci<1>, 1>>,
    Expect<Equal<Fibonacci<2>, 1>>,
    Expect<Equal<Fibonacci<3>, 2>>,
    Expect<Equal<Fibonacci<8>, 21>>,
  ];
}
