// ts-node ./3-Readonly.ts

// https://bigfrontend.dev/typescript?sort=mostTried

// 5. implement Pick<T, K>

type Foo_5 = {
  a: string;
  b: number;
  c: boolean;
};


type MyPickType<T, K  extends keyof T> =  Pick<T,K>


type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type A = MyPick<Foo_5, "a" | "b">; // {a: string, b: number}
type B = MyPick<Foo_5, "c">; // {c: boolean}
type C = MyPick<Foo_5, "d">; // Error
