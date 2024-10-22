// https://typehero.dev/challenge/parse-url-params
// FIXME
/// Input START
type ParseUrlParams<T> = any;
/// Input END

namespace ParseUrlParamsTest {
  type cases = [
    Expect<Equal<ParseUrlParams<"">, never>>,
    Expect<Equal<ParseUrlParams<":id">, "id">>,
    Expect<Equal<ParseUrlParams<"posts/:id">, "id">>,
    Expect<Equal<ParseUrlParams<"posts/:id/">, "id">>,
    Expect<Equal<ParseUrlParams<"posts/:id/:user">, "id" | "user">>,
    Expect<Equal<ParseUrlParams<"posts/:id/:user/like">, "id" | "user">>,
  ];
}
