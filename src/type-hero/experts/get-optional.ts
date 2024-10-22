// https://typehero.dev/challenge/get-optional
// FIXME
/// Input START
type GetOptional<T> = any;
/// Input END

namespace GetOptionalTest {
  type cases = [
    Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
    Expect<
      Equal<
        GetOptional<{ foo: undefined; bar?: undefined }>,
        { bar?: undefined }
      >
    >,
  ];
}
