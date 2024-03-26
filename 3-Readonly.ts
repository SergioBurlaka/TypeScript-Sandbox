// ts-node ./3-Readonly.ts

// https://bigfrontend.dev/typescript?sort=mostTried

// TypeScript Puzzles

type MyReadonly<T> = Readonly<T>;

type Foo_3 = {
  // readonly a: string  // its alternative
  a: string;
};

const a_3: Foo_3 = {
  a: "BFE.dev",
};
a_3.a = "bigfrontend.dev";
// OK

const b_3: MyReadonly<Foo_3> = {
  a: "BFE.dev",
};
b_3.a = "bigfrontend.dev";
// Error
