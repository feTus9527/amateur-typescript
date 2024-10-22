// https://typehero.dev/challenge/snakecase
// FIXME
/// Input START
type SnakeCase<T> = any;
/// Input END

namespace SnakeCaseTest {
  type cases = [
    Expect<Equal<SnakeCase<"hello">, "hello">>,
    Expect<Equal<SnakeCase<"userName">, "user_name">>,
    Expect<Equal<SnakeCase<"getElementById">, "get_element_by_id">>,
    Expect<
      Equal<
        SnakeCase<"getElementById" | "getElementByClassNames">,
        "get_element_by_id" | "get_element_by_class_names"
      >
    >,
  ];
}