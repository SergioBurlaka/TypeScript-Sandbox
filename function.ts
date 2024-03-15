// ts-node ./Enum-1.ts



// function

const jamesHendrix = {
  name: 'James Hendrix',
  male: true,
  age: 36
}

// type GutaristType = {
//   name: string,
//   male: boolean,
//   age: number
// }

type GutaristType = typeof jamesHendrix

type Keys = keyof typeof jamesHendrix;

type Values = (typeof jamesHendrix)[Keys];




const somePersone = {
  age: 11,
  male: false
}

type TypeWithName = {
  name?: string
}

const greatingGutarist = <T>(gutarist: T & TypeWithName) => {

  if (gutarist.name) return `Hello ${gutarist.name}`

  return `Hello`
}
console.log(greatingGutarist(jamesHendrix))

// Argument of type '{ age: number; male: boolean; }' is not assignable to parameter of  type '{ age: number; male: boolean; } & TypeWithName'.Property 'name' is missing in type '{ age: number; male: boolean; }' but required in type 'TypeWithName'.


// alt + z  - робить строку в межах екрану

console.log(greatingGutarist(somePersone))


