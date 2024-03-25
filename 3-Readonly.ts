// ts-node ./test_from_chat_gpt_3.ts

// https://bigfrontend.dev/typescript?sort=mostTried

// TypeScript Puzzles

type MyReadonly<T> = Readonly<T>


type Foo_3 = {
  a: string
}

const a_3:Foo_3 = {
  a: 'BFE.dev',
}
a.a = 'bigfrontend.dev'
// OK

const b_3:MyReadonly<Foo_3> = {
  a: 'BFE.dev'
}
b_3.a = 'bigfrontend.dev'
// Error