// https://typehero.dev/challenge/omitbytype
// FIXME
/// Input START
type OmitByType<T, U> = any;
/// Input END

namespace OmitByTypeTest {
  interface Model {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  }

  type cases = [
    Expect<Equal<OmitByType<Model, boolean>, { name: string; count: number }>>,
    Expect<
      Equal<
        OmitByType<Model, string>,
        { count: number; isReadonly: boolean; isEnable: boolean }
      >
    >,
    Expect<
      Equal<
        OmitByType<Model, number>,
        { name: string; isReadonly: boolean; isEnable: boolean }
      >
    >,
  ];
}
