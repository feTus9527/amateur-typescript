// https://typehero.dev/challenge/hello-world

type HelloWorld = string;

// @ts-ignore
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
