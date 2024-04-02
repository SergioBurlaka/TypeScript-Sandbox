// ts-node ./3-Readonly.ts

// https://bigfrontend.dev/typescript?sort=mostTried

// 8. implement Extract<T, U>


// As the opposite of Exclude<T, K>, Extract<T, U> returns a type by extracting union members from T that are assignable to U.

// Please implement MyExtract<T, U> by yourself.

type MyExtract<T, U> = T extends U ? T : never

type Foo_8 = 'a' | 'b' | 'c'

type A_8 = MyExtract<Foo_8, 'a'> // 'a'
type B_8 = MyExtract<Foo_8, 'a' | 'b'> // 'a' | 'b'
type C_8 = MyExtract<Foo_8, 'b' | 'c' | 'd' | 'e'>  // 'b' | 'c'
type D_8 = MyExtract<Foo_8, never>  // never

