// ts-node ./3-Readonly.ts

// https://bigfrontend.dev/typescript?sort=mostTried

// Exclude<T, K> returns a type by removing from T the union members that are assignable to K.

// Please implement MyExclude<T, K> by yourself.

type MyExclude<T, E> = T extends E ? never : T

type Foo_7 = "a" | "b" | "c"

type A_7 = MyExclude<Foo_7, "a"> // 'b' | 'c'
type B_7 = MyExclude<Foo_7, "c"> // 'a' | 'b
type C_7 = MyExclude<Foo_7, "c" | "d"> // 'a' | 'b'
type D_7 = MyExclude<Foo_7, "a" | "b" | "c"> // never

