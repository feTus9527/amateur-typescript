// https://typehero.dev/challenge/public-type
// FIXME
/// Input START
type PublicType<T extends object> = any;
/// Input END

namespace PublicTypeTest {
  type cases = [
    Expect<Equal<PublicType<{ a: number }>, { a: number }>>,
    Expect<Equal<PublicType<{ _b: string | bigint }>, {}>>,
    Expect<Equal<PublicType<{ readonly c?: number }>, { readonly c?: number }>>,
    Expect<Equal<PublicType<{ d: string; _e: string }>, { d: string }>>,
    Expect<Equal<PublicType<{ _f: () => bigint[] }>, {}>>,
    Expect<Equal<PublicType<{ g: "_g" }>, { g: "_g" }>>,
    Expect<Equal<PublicType<{ __h: number; i: unknown }>, { i: unknown }>>,
  ];
}