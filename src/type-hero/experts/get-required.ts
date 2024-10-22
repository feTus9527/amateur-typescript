// https://typehero.dev/challenge/get-required
// FIXME
/// Input START
type GetRequired<T> = any;
/// Input END

namespace GetRequiredTest {
  type cases = [
    Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
    Expect<
      Equal<
        GetRequired<{ foo: undefined; bar?: undefined }>,
        { foo: undefined }
      >
    >,
  ];
}
