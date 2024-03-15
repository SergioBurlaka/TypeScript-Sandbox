// Лінк на туторіал

// https://www.youtube.com/watch?v=cP97KKCq4eg&list=PLiZoB8JBsdzlG1oAY8U4vrBtVW07j6jil&index=4&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9

// ts-node ./tut-3.ts

//////

const someFn = (num: string | number = " "): string => {
  return String(num);
};

type BaseType = {
  name: string;
  age: number;
};

type Mail = true;
type Femail = false;

// type EnterType<Atype, Btype> = Btype ? (Atype & {isMaile: true}) : Atype
// type EnterType<Atype, Btype> =  Btype ?

// const createObj = ({ name, age, isMaile }: EnterType<BaseType, Mail>) => {

// 	if (isMaile) {
// 		return ({
// 			name,
// 			age
// 		})
// 	}
// 	return ({
// 		name,
// 		age,
// 		isMaile
// 	})
// }

type FunctionType = () => void;

const fnWithCB = (cb: FunctionType) => {
  cb();
};

const createArr = (a: number = 0, b: string = "1") => [a, b];

// const alternativeCreateArr = (a: number = 0, b: string = '1') => ([a, b])

type TtpeA = number | undefined;
type TtpeB = string | undefined;

// const alternativeCreateArr = (a: TtpeA = 0, b: TtpeB = '1'): [number, string] => ([a, b])

type CreateArrType<TypeA, TypeB> = [TypeA, TypeB];

const alternativeCreateArr = (a = 0, b = "1"): CreateArrType<TtpeA, TtpeB> => [
  a,
  b,
];

console.log(alternativeCreateArr());

type DrinkType = {
  label: string;
};

const cola = {
  price: 1.5,
  label: "Cola",
};

const pepsi = {
  price: 1.6,
  label: "Pepsi",
};

const myFn_1 = (obj: DrinkType) => {
  console.log("obj", obj);
};

myFn_1(cola);
myFn_1(pepsi);
