// ts-node ./array.ts


// https://habr.com/ru/articles/664960/



let someArr_1: (string | number | boolean)[] = ['Денис', 1, true, 89, 'hello'];


const people: object[] = [{ name: 'Sergii', age: 19 }, { name: "Marta", age: 16 }]

type PeopleType = {
    name: string,
    age: number
}


const people_2: PeopleType[] = [{ name: 'Sergii', age: 19 }, { name: "Marta", age: 16 }]


const someArr_3 = ['Sergii', true, 38]

// Argument of type '{}' is not assignable to parameter of type 'string | number | boolean'.
// someArr_3.push({})

// Кортеж - это массив с фиксированным размером и известным набором данных


const myCortege: [string, number, boolean] = ['Sergii', 25, false]

myCortege.push(7)

console.log('myCortege', myCortege)

const myCortege_2: [string, number, boolean] = ['Sergii', 25, false];

myCortege_2[2] = true


// Property 'push' does not exist on type 'readonly [string, number, boolean]'
// myCortege_2.push(7)

console.log('myCortege_2', myCortege_2)

type TupleType_2 = readonly [string, number, boolean]


const myNeArr_3: TupleType_2 = ['sergii', 39, false]

// Property 'push' does not exist on type 'TupleType_2'
// myNeArr_3.push(9)

// Вирішено за допомогою chat GPT3


type FlexibleArray<T extends readonly any[]> = readonly [...T];

// Example usage
const array1: FlexibleArray<[string, number, boolean]> = ['Sergii', 25, false];

const array2: FlexibleArray<[string, number]> = ['John', 30];