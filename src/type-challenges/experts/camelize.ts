// https://typehero.dev/challenge/camelize
// FIXME
/// Input START
type Camelize<T> = any;
/// Input END

namespace CamelizeTest {
  type cases = [
    Expect<
      Equal<
        Camelize<{
          some_prop: string;
          prop: { another_prop: string };
          array: [
            { snake_case: string },
            { another_element: { yet_another_prop: string } },
            { yet_another_element: string },
          ];
        }>,
        {
          someProp: string;
          prop: { anotherProp: string };
          array: [
            { snakeCase: string },
            { anotherElement: { yetAnotherProp: string } },
            { yetAnotherElement: string },
          ];
        }
      >
    >,
  ];
}
