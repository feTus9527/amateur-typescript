// https://typehero.dev/challenge/hello-world

/// Input START
type HelloWorld = string;
/// Input END

namespace HelloWorldTest {
  type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
}
