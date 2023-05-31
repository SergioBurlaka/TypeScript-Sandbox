

// Лінк на туторіал

// https://www.youtube.com/watch?v=gieEQFIfgYc&t=5s&ab_channel=DaveGray
// ts-node ./Chapter-1.ts


///

const spaceShips = ['apollo', 'starship', 'shuttle']


const cars = ['Ford', 'audi', 5600]

const mixed = ['apple', true, { name: 'Jonsonuk' }, 44]

// Argument of type 'Date' is not assignable to parameter of type 'string | number | boolean | { name: string; }'.
// mixed.push(new Date())

const someArr_2: (string | number)[] = ['hello', 'world', 'js']
someArr_2.push(23)


type MyType = 'sql' | 'ts' | 'js'


const languages: MyType[] = ['js', 'sql']

// Argument of type '"hello"' is not assignable to parameter of type 'MyType'.ts(2345)

// languages.push('hello')


const listOfLanguages = [
  'c++', 'c#', 'rubby'
] as const


type TypeFromConst = typeof listOfLanguages

type TypesOfArray = typeof listOfLanguages[number]

// Type '["c++"]' is not assignable to type 'readonly ["c++", "c#", "rubby"]'.
//   Source has 1 element(s) but target requires 3

// const newArrOfLanguages: TypeFromConst = ['c++']


// Creating union from array
// https://bobbyhadz.com/blog/typescript-create-union-type-from-array


type UnionFromArray = typeof listOfLanguages[number]

const myNewArrOfLanguages: UnionFromArray[] = ['c++', 'rubby']

// Type '"SDFASDF"' is not assignable to type '"c++" | "c#" | "rubby"'.ts(2322)
// const myNewArrOfLanguages_2: UnionFromArray[] = ['SDFASDF']


// tuple // кортеж

const tupleArr: [string, number, boolean] = ['AC DC', 15, true]


type TupleType = [string, number, boolean]


const tupleArr_2: TupleType = ['jhon', 43, true]


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

// Enums

enum Languages {
  ts = 'TypeScript',
  js = 'javaScript',
  sql = 'SQL'
}

const TypeOfEnum = typeof Languages

const languagesCollection: Languages[] = []
const languagesCollection_2: Languages[] = [Languages.ts, Languages.sql]

// languagesCollection_2  [ 'TypeScript', 'SQL' ]
console.log('languagesCollection_2 ', languagesCollection_2)



type KeyFromEnum = keyof typeof Languages

type TypeWitEnum = {
  [K in KeyFromEnum]?: Languages
}




const languagesCollection_3: TypeWitEnum[] = [{ ts: Languages.ts }]


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


// types from Claneo project

const urlOrderFields = [
  'id',
  'url',
  'project.id',
  'mainCategory',
  'mainKeyword',
  'status',
  'numberOfKeywords',
  'sumSv',
  'percentShareSv',
  'avgPosition',
  'potential',
  'visibility',
] as const

enum SortDirectionType {
  ascend = 'asc',
  descend = 'desc',
}

type GetUrlsOrderParamsType = {
  [Key in `order[${(typeof urlOrderFields)[number]}]`]?: SortDirectionType
}

// type GetUrlsOrderParamsType = {
//   "order[id]"?: SortDirectionType | undefined;
//   "order[url]"?: SortDirectionType | undefined;
//   "order[project.id]"?: SortDirectionType | undefined;
//   ... 8 more ...;
//   "order[visibility]"?: SortDirectionType | undefined;
// }


const testObj: GetUrlsOrderParamsType = {
  "order[id]": SortDirectionType.ascend,
  "order[url]": SortDirectionType.descend
}