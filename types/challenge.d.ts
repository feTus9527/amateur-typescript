declare namespace challenge {
  type Expect<T extends true> = T;
  type ExpectTrue<T extends true> = T;
  type ExpectFalse<T extends false> = T;
  type IsTrue<T extends true> = T;
  type IsFalse<T extends false> = T;

  type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true;
  type Equal<X, Y> =
    (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2
      ? true
      : false;

  // https://stackoverflow.com/questions/49927523/disallow-call-with-any/49928360#49928360
  type IsAny<T> = 0 extends 1 & T ? true : false;
  type NotAny<T> = true extends IsAny<T> ? false : true;

  type Debug<T> = { [K in keyof T]: T[K] };
  type MergeInsertions<T> = T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T;

  type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>;

  type ExpectExtends<VALUE, EXPECTED> = EXPECTED extends VALUE ? true : false;
  type ExpectValidArgs<
    FUNC extends (...args: any[]) => any,
    ARGS extends any[],
  > = ARGS extends Parameters<FUNC> ? true : false;

  type UnionToIntersection<U> = (
    U extends any ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;
}

declare global {
  type Expect<T extends true> = challenge.Expect<T>;
  type ExpectTrue<T extends true> = challenge.ExpectTrue<T>;
  type ExpectFalse<T extends false> = challenge.ExpectFalse<T>;
  type IsTrue<T extends true> = challenge.IsTrue<T>;
  type IsFalse<T extends false> = challenge.IsFalse<T>;
  type NotEqual<X, Y> = challenge.NotEqual<X, Y>;
  type Equal<X, Y> = challenge.Equal<X, Y>;
  type IsAny<T> = challenge.IsAny<T>;
  type NotAny<T> = challenge.NotAny<T>;
  type Debug<T> = challenge.Debug<T>;
  type MergeInsertions<T> = challenge.MergeInsertions<T>;
  type Alike<X, Y> = challenge.Alike<X, Y>;
  type ExpectExtends<VALUE, EXPECTED> = challenge.ExpectExtends<
    VALUE,
    EXPECTED
  >;
  type ExpectValidArgs<
    FUNC extends (...args: any[]) => any,
    ARGS extends any[],
  > = challenge.ExpectValidArgs<FUNC, ARGS>;
  type UnionToIntersection<U> = challenge.UnionToIntersection<U>;
}

export {};
