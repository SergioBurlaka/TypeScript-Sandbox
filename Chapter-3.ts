

// Лінк на туторіал

// https://www.youtube.com/watch?v=gieEQFIfgYc&t=5s&ab_channel=DaveGray
// ts-node ./Chapter-1.ts


///




//  Objects

type ExpendiblePerson = {
  name: string,
  age?: number,
  [key: string]: unknown
}

const persone_2: ExpendiblePerson = {
  name: 'Jhon',
  age: 43,
  maile: true  // this additinal prop
}

persone_2.femaile = false

type TypeOfPersone = typeof persone_2

type NextType = typeof persone_2


console.log('persone_2', persone_2)

