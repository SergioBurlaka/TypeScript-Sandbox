// ts-node ./generic_2.ts

const addId = <T extends object>(obj: T) => {
  const id = Math.floor(Math.random() * 10000);

  return { ...obj, id };
};

const newObj = addId({ name: "Sergii", age: 34 });

newObj.name;
type TypeOfObj = typeof newObj;

// Argument of type 'string' is not assignable to parameter of type 'object'
// const marta = addId('Marta');

// console.log('marta', marta)

// В TypeScript дженерики используются, когда мы хотим описать соответствие между двумя значениями.

const getLength = <T extends { length: number }>(str: T) => str.length;

const res = getLength("Hello");

console.log("res", res);
