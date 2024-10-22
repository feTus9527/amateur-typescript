// https://typehero.dev/challenge/classpublickeys
// FIXME
/// Input START
type ClassPublicKeys = any;
/// Input END

namespace ClassPublicKeysTest {
  class A {
    public str: string;
    protected num: number;
    private bool: boolean;
    constructor() {
      this.str = "naive";
      this.num = 19260917;
      this.bool = true;
    }

    getNum() {
      return Math.random();
    }
  }

  type cases = [Expect<Equal<ClassPublicKeys<A>, "str" | "getNum">>];
}
