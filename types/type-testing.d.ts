declare global {
  type Extends<A, B> = A extends B ? true : false;
}

export = {};
