// ts-node ./3-Readonly.ts

// https://bigfrontend.dev/typescript?sort=mostTried

// 6. implement Omit<T, K>

// Omit<T, K> returns a new type by picking the properties in T but not in K.

// Please implement MyOmit<T, K> by yourself.

type MyExcludeForOmit<T, U> = T extends U ? never : T


type MyOmit<T, K extends string | number | symbol> = {
  [P in MyExcludeForOmit<keyof T, K>]: T[P];
};


type Foo_6 = {
  a: string
  b: number
  c: boolean
}

type Exclude_2 = MyExcludeForOmit<keyof Foo_6, 'a' | 'b'>
type Exclude_3 = MyExcludeForOmit< Foo_6, 'a' | 'b'>


// type Exclude<T, U> = T extends U ? never : T

// type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P];

type A_6_1 = Omit<Foo_6, 'a' | 'b'> // {c: boolean}
type A_6_2 = Exclude<Foo_6, 'a' | 'b'> // {c: boolean}

type A_6 = MyOmit<Foo_6, 'a' | 'b'> // {c: boolean}
type B_6 = MyOmit<Foo_6, 'c'> // {a: string, b: number}
type C_6 = MyOmit<Foo_6, 'c' | 'd'>  // {a: string, b: number}