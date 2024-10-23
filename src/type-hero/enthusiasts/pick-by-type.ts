// https://typehero.dev/challenge/pickbytype

/// Input START
type PickByType<T, U> = {
  [K in keyof T as Equal<T[K], U> extends true ? K : never]: T[K];
};
/// Input END

namespace PickByTypeTest {
  interface Model {
    name: string;
    count: number;
    isReadonly: boolean;
    isEnable: boolean;
  }

  type a = PickByType<Model, boolean>;
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
