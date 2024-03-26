// ts-node ./test_from_chat_gpt_3.ts

// https://bigfrontend.dev/typescript?sort=mostTried

// TypeScript Puzzles

// 1. implement Partial<T>

type Foo = {
  a: string;
  b: number;
  c: boolean;
};

type MyPartial<T> = Partial<T>;

// NoUtility

type MyPartialNoUtility<T> = { [P in keyof T]?: T[P] | undefined };

const a: MyPartial<Foo> = {};

const b: MyPartial<Foo> = {
  a: "BFE.dev",
};

const c: MyPartial<Foo> = {
  b: 123,
};

const d: MyPartial<Foo> = {
  b: 123,
  c: true,
};

const e: MyPartial<Foo> = {
  a: "BFE.dev",
  b: 123,
  c: true,
};
