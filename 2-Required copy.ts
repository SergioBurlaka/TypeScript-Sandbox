// ts-node ./test_from_chat_gpt_3.ts

// https://bigfrontend.dev/typescript?sort=mostTried

// TypeScript Puzzles


// 2. implement Required<T>

// all properties are optional
type Foo_2 = {
  a?: string
  b?: number
  c?: boolean
}

type MyRequired<T> = Required<T>


const a_2: MyRequired<Foo_2> = {}
// Error

const b_2: MyRequired<Foo_2> = {
  a: 'BFE.dev'
}
// Error

const c_2: MyRequired<Foo_2> = {
  b: 123
}
// Error

const d_2: MyRequired<Foo_2> = {
  b: 123,
  c: true
}
// Error

const e_2: MyRequired<Foo_2> = {
  a: 'BFE.dev',
  b: 123,
  c: true
}
