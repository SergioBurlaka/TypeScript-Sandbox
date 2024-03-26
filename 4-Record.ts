// ts-node ./3-Readonly.ts

// https://bigfrontend.dev/typescript?sort=mostTried

// 4. implement Record<K, V>

type Key = "a" | "b" | "c";

const a_4: Record<Key, string> = {
  a: "BFE.dev",
  b: "BFE.dev",
  c: "BFE.dev",
};

// NoUtility

type MyRecordNoUtility<K extends string | number | symbol, V> = {
  [P in K]: V;
};


a_4.a = "bigfrontend.dev"; // OK
a_4.b = 123; // Error
a_4.d = "BFE.dev"; // Error

type MyRecord<K extends number | string | symbol, V> = Record<K, V>;

type Foo_4 = MyRecord<{ a: string }, string>; // Error
