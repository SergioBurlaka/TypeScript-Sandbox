// ts-node ./isNumber.ts

type IsNumberString<T extends string> = `${T}` extends `${number}`
  ? string
  : never;

// Test the type
type Test1 = IsNumberString<"123">; // true
type Test2 = IsNumberString<"abc">; // false

const stringToNumber_2 = (str: string): number => parseInt(str);

type ConvertibleToNumber<T extends string> = `${T}` extends string
  ? number
  : never;

const stringToNumber_3 = <T extends string>(str: T): ConvertibleToNumber<T> =>
  parseInt(str);

// Test the function
const num1 = stringToNumber_3("123"); // num1 is inferred as number
const num2 = stringToNumber_3("abc");

type MyNumberType = "2312" extends `${number}` ? true : false;
type MyNumberType_2 = "sfsdas" extends `${number}` ? true : false;
type MyNumberType_3 = "sfsdas" extends `${string}` ? true : false;



const stringToNumber_4 = <T extends string>(str: IsNumberString<T>) =>
  parseInt(str);

  stringToNumber_4("123"); 
 stringToNumber_4("abc");


 type IsNumberString_2<T extends string> = `${T}` extends `${number}` ? string : never;

const stringToNumber_5 = <T extends string>(str: IsNumberString_2<T>) =>
  parseInt(str);

stringToNumber_5("123");  // Returns: number
stringToNumber_5("abc");  // Argument of type '"abc"' is not assignable to parameter of type 'IsNumberString<string>'
