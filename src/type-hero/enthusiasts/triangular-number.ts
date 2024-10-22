// https://typehero.dev/challenge/triangular-number
// FIXME
/// Input START
type Triangular<N extends number> = any;
/// Input END

namespace TriangularNumberTest {
  type cases = [
    Expect<Equal<Triangular<0>, 0>>,
    Expect<Equal<Triangular<1>, 1>>,
    Expect<Equal<Triangular<3>, 6>>,
    Expect<Equal<Triangular<10>, 55>>,
    Expect<Equal<Triangular<20>, 210>>,
    Expect<Equal<Triangular<55>, 1540>>,
    Expect<Equal<Triangular<100>, 5050>>,
  ];
}
