// Лінк на туторіал

// https://www.youtube.com/watch?v=KGwRya56-C8&list=PLiZoB8JBsdzlG1oAY8U4vrBtVW07j6jil&index=3&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9

// ts-node ./tut-1.ts

//////

const someArr: number[] = [];

someArr.push(1);
someArr.push(3);
someArr.push(7);
someArr.push(2);

console.log("someArr", someArr);

type MyCrazyType = typeof someArr;

type ArrContentType = string | number;

const newArr: ArrContentType[][] = [
  [1, "1"],
  ["45", "some string", 1123],
];

// Кортеж або tuple

const myBirthday = new Date(1985, 10, 12);

console.log(myBirthday);

const someTuple: [string, number, Date] = ["hello", 23443, myBirthday];

//  type CSV for file

type TypeOfLine = [string, number, boolean, Date];

const csv_file: TypeOfLine[] = [["Sergii", 27, true, myBirthday]];

type Age = {
  age: number;
};

type Name = {
  name: string;
};

type Persone = Age & Name;

const persone: Persone = { name: "Name", age: 34 };

type FlexibleObject = {
  [key: string]: unknown;
} & Persone;

const superPersone: FlexibleObject = { name: " some Name", age: 78, old: true };

type MyDate = {
  date: Date;
};

type CombinationOfTypes = MyDate & Persone;
