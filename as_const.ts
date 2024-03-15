// ts-node ./as_const.ts


// Лінк на туторіал

// https://www.youtube.com/watch?v=gieEQFIfgYc&t=5s&ab_channel=DaveGray


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


const routes = {
  home: "/",
  admin: "/admin",
  users: "/users",
} as const;

type RoutesKyes = keyof typeof routes

type RoutesType = (typeof routes)[keyof typeof routes];

type HomeAdminType = (typeof routes)['home' | 'admin'];

const goToRoute = <T>(routes: T) => {};

// const goToRoute = (routes: "/" | "/admin" | "/users") => {};

goToRoute(routes.admin);

goToRoute<HomeAdminType>('/admin')
goToRoute<HomeAdminType>(routes.home)
