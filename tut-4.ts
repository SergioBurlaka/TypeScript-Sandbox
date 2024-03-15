// Лінк на туторіал

// https://www.youtube.com/watch?v=_oilipTMJ5Y&list=PLiZoB8JBsdzlG1oAY8U4vrBtVW07j6jil&index=5&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9
// ts-node ./tut-4.ts

///

// Generics

type MySimpleType = {
  value?: number;
};

type MyGeneric<TypeA> = TypeA & MySimpleType;

type ProductType = {
  price: number;
  name: string;
};

type ResultType = MyGeneric<ProductType>;

const myNewValue: ResultType = {
  price: 234,
  name: "camera",
};

type ProductCreation<ValueType> = {
  value: ValueType;
  label: string;
};

const createProduct = ({ value, label }: ProductCreation<string>) => ({
  value,
  label,
});

const res = createProduct({
  label: "Reebok",
  value: "120$",
});

type GotType = typeof res;

type TypeEithLenght = {
  length: number;
};

// type GetLengthType  & TypeEithLenght

const getLength_1 = <T extends TypeEithLenght>(value: T) => {
  console.log(value.length);
};

const getLength_2 = <T>(value: T & TypeEithLenght) => {
  console.log(value.length);
};

// getLength(7)
// Argument of type 'number' is not assignable to parameter of type 'TypeEithLenght'

getLength_1("");
getLength_1([1, "45"]);

getLength_2("dgs");
getLength_2([7, 10, "sdg", "hello"]);

// getLength(true)
//Argument of type 'boolean' is not assignable to parameter of type 'TypeEithLenght'.ts(2345)

const getkey = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const ford = {
  label: "Ford",
  price: 2500,
};

// Можна передати поле тільки яке є у об'єкті

const res_2 = getkey(ford, "label");

// const res_3 = getkey(ford, 'name')
// Argument of type '"name"' is not assignable to parameter of type '"label" | "price"'.ts(2345)
