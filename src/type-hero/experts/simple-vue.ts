// https://typehero.dev/challenge/simple-vue

/// Input START
type GetComputed<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => infer R ? R : never;
};

declare function SimpleVue<D, C, M>(options: {
  data: (this: void) => D;
  computed: C & ThisType<D>;
  methods: M & ThisType<D & GetComputed<C> & M>;
}): any;
/// Input END

namespace SimpleVueTest {
  SimpleVue({
    data() {
      // @ts-expect-error cannot use this in data()
      this.firstname;
      // @ts-expect-error cannot use this in data()
      this.getRandom();
      // @ts-expect-error cannot use this in data()
      this.data();

      return {
        firstname: "Type",
        lastname: "Challenges",
        amount: 10,
      };
    },
    computed: {
      fullname() {
        return `${this.firstname} ${this.lastname}`;
      },
    },
    methods: {
      getRandom() {
        return Math.random();
      },
      hi() {
        alert(this.amount);
        alert(this.fullname.toLowerCase());
        alert(this.getRandom());
      },
      test() {
        const fullname = this.fullname;
        const cases: [Expect<Equal<typeof fullname, string>>] = [] as any;
      },
    },
  });
}
