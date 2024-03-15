// Лінк на туторіал

// https://www.youtube.com/watch?v=gieEQFIfgYc&t=5s&ab_channel=DaveGray
// ts-node ./Chapter-4.ts

// https://bobbyhadz.com/blog/typescript-create-type-from-object-keys

///

type StringOrNumber = string | number;

type UserId = StringOrNumber;

type Gutarist = {
  name?: string;
  active: boolean;
  albums: StringOrNumber[];
  id: UserId;
};

// literals type

type MyName = "Sergii";

const muName: "Sergii" = "Sergii";

let newName: MyName;

// Type '"Marta"' is not assignable to type '"Sergii"'.
// newName = 'Marta'

enum OldFamily {
  "Dave",
  "Jhon",
  "Amy",
}

const family = ["Dave", "Jhon", "Sarah"] as const;

type PersoneFromEnum_2 = (typeof family)[number];
type PersoneFromEnum = keyof typeof OldFamily;

const familyPersone: PersoneFromEnum & PersoneFromEnum_2 = "Dave";
const familyPersone_5: PersoneFromEnum & PersoneFromEnum_2 = family[0];

// Type '"Sarah"' is not assignable to type '"Dave" | "Jhon"'.

// const familyPersone_3: PersoneFromEnum & PersoneFromEnum_2 = 'Sarah'

const familyPersoneTwo: PersoneFromEnum | PersoneFromEnum_2 = "Sarah";

// Get value from enum

// https://stackoverflow.com/questions/71828165/make-type-from-enums-number-values-in-typescript

enum Family {
  dave = "Dave",
  jhon = "Jhon",
  any = "Amy",
}

type ValueFromFamily = `${Extract<
  Family,
  string
>}` extends `${infer N extends string}`
  ? N
  : never;

type KeysFromFamily = keyof typeof Family;

//  functions

type MyFanctionType = (d: number, c: number) => number;

const addition: MyFanctionType = (a, b) => a + b;

console.log(addition(4, 6));

const subtraction: MyFanctionType = (a, b) => a - b;

console.log(subtraction(8, 6));

// rest

const returnArrayOfStrings = (...rest: string[]) => {
  return [...rest];
};

console.log(returnArrayOfStrings("hello", "Marty Macfly", "Doc"));

const errorHandler = (errorMessage: string): never => {
  throw new Error(errorMessage);
};

// console.log(errorHandler('Oh no there is a big mistake'))

function keepProcessing(): never {
  while (true) {
    console.log("I always does something and never ends.");
  }
}

// keepProcessing()

type A = string;
type B = string | number;
type C = "Hello";

let a1: A = "Hello";
let b1 = a1 as B; // less specific
let c1 = a1 as C; // more specific

const world = <A>"some string";
const helloWorld = <string>"some string";

console.log("helloWorld", helloWorld);

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): string | number => {
  if (c === "add") return a + b;
  return "" + a + b;
};

// проблема у тому що в такому випадку ts не бачить проблеми але насправді  в цьому випадку він повертає непрпавильний тип бо насправді тут число
const sum: string = addOrConcat(4, 9, "add") as string;

const resConcat = addOrConcat(4, 9, "concat");
