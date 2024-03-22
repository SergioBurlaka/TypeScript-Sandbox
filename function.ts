// ts-node ./function.ts

// function

const jamesHendrix = {
  name: "James Hendrix",
  male: true,
  age: 36,
};

// type GutaristType = {
//   name: string,
//   male: boolean,
//   age: number
// }

type GutaristType = typeof jamesHendrix;

type Keys = keyof typeof jamesHendrix;

type Values = (typeof jamesHendrix)[Keys];

const somePersone = {
  age: 11,
  male: false,
};

type TypeWithName = {
  name?: string;
};

const greatingGutarist = <T>(gutarist: T & TypeWithName) => {
  if (gutarist.name) return `Hello ${gutarist.name}`;

  return `Hello`;
};
console.log(greatingGutarist(jamesHendrix));

// Argument of type '{ age: number; male: boolean; }' is not assignable to parameter of  type '{ age: number; male: boolean; } & TypeWithName'.Property 'name' is missing in type '{ age: number; male: boolean; }' but required in type 'TypeWithName'.

// alt + z  - робить строку в межах екрану

console.log(greatingGutarist(somePersone));

const adding = (a: string | number, b: string | number): string | number =>
  +a + +b;

console.log(`adding('a', 'b')`, adding("a", "b")); // NaN
console.log(`NaN + NaN`, NaN + NaN);

console.log(`typeof NaN`, typeof NaN); // number

console.log(` Number.isNaN(+1)`, Number.isNaN(+1));

const addingUpdated = (
  a: string | number,
  b: string | number
): string | number | never => {
  if (Number.isNaN(+a)) {
    throw new Error(`"${a} is not a number"`);
  }
  if (Number.isNaN(+b)) {
    throw new Error(`"${b} is not a number"`);
  }

  return +a + +b;
};

// console.log(`addingUpdated('10', 'bsdf')`, addingUpdated("10", "bsdf"));
console.log(`addingUpdated('10', '15')`, addingUpdated("10", "15"));
// console.log(`addingUpdated(3, '15')`, addingUpdated(3, "15"));
// console.log(`addingUpdated(3, 8)`, addingUpdated(3, 8));
// console.log(`addingUpdated("7", 6)`, addingUpdated("7", 6));

type ConvertibleToStringNumber = string & {
  __isConvertibleToStringNumber: true;
};

const isConvertibleToStringNumber = (
  str: string
): str is ConvertibleToStringNumber => {
  return !isNaN(parseInt(str));
};

const asConvertibleToStringNumber = (
  str: string
): ConvertibleToStringNumber | never => {
  if (!isConvertibleToStringNumber(str)) {
    throw new Error(
      `Value "${str}" is not convertible to ConvertibleToStringNumber`
    );
  }
  return str as ConvertibleToStringNumber;
};

const stringToNumber = (str: ConvertibleToStringNumber): number => {
  return parseInt(str);
};

// Test cases
// Use asConvertibleToStringNumber to convert regular strings to ConvertibleToStringNumber
console.log(stringToNumber(asConvertibleToStringNumber("123")));
console.log(stringToNumber(asConvertibleToStringNumber("abc"))); // This will throw an error

type MyType_2<T> = {
  name: T;
};

type ObjectType_2 = MyType_2<string | number>;

const persone_1: ObjectType_2 = { name: "Vasyl" };

const getLength_2 = <T extends string | []>(value: T) => value.length;
