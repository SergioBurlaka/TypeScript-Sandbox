

// Лінк на туторіал
// https://www.youtube.com/watch?v=G7fNaZwIoiM&list=PLiZoB8JBsdzlG1oAY8U4vrBtVW07j6jil&index=20&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9

// ts-node ./tut-2.ts


let myNumber = 12423;

type MyNumberType = typeof myNumber


const nextNumber: MyNumberType = 13213;
const nextNumber2 = 13213;
let nextNumber3 = 1345342;

let myData = new Date()

type MyData = Date

type myBoolean = boolean

let someVariable;

const myFn = <T>(arg: T): T => arg

someVariable = 'asdasd'

const createdBoolean = <boolean>myFn(true)
console.log('createdBoolean', createdBoolean)


const createdDate = <Date>myFn(new Date())
console.log('createdDate', createdDate)



// generic that create generic

type MyCustomGeneric<FirstType, SecondType> = {
    option: FirstType,
    params: SecondType
}

type MyNewType = MyCustomGeneric<string, boolean>

type ExtandedType = {
    date: Date
}

type SuperType = ExtandedType & MyNewType;

const myNewObj: SuperType = {
    option: 'hello ',
    params: true,
    date: new Date

}

type GenericType<FirstArr, SecondType> = {
    firstValue: FirstArr
    secondValue: SecondType
} & MyNewType


// yes success

type TypeA = number
type TypeB = string[]

const fnTwo = (resp: GenericType<TypeA, TypeB>) => resp;

const result = fnTwo({
    firstValue: 234,
    secondValue: ['sdfsdf', 'asfasf'],
    option: 'company ',
    params: false,
})


type ExitType = typeof result
