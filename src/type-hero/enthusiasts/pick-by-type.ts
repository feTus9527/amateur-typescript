// https://typehero.dev/challenge/pickbytype
// FIXME
/// Input START
type PickByType<T, U> = any;
/// Input END

namespace PickByTypeTest {
  interface Model {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  }

  type cases = [
    Expect<
      Equal<
        PickByType<Model, boolean>,
        { isReadonly: boolean; isEnable: boolean }
      >
    >,
    Expect<Equal<PickByType<Model, string>, { name: string }>>,
    Expect<Equal<PickByType<Model, number>, { count: number }>>,
  ];
}
