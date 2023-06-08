// ts-node ./Chapter-8.ts

// type ObjectKeyGeneric<>

const drammer = {
  name: 'Steve',
  age: 28,
  drammer: true
}

const product = {
  label: 'Coca cola',
  price: 7.95
}


const logObjectKey = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}

console.log('drammer ', logObjectKey(drammer, 'drammer')
)
console.log('product ', logObjectKey(product, 'price')
)


const iterateObject = <T>(obj: T) => {

  for (const key in obj) {
    console.log(obj[key as keyof T])
  }

}


iterateObject(drammer)

type SuperType<T> = T

type MyStringType = string
type MyNumberType = number
type MyBooleanType = boolean


const superEcho = <T>(arg: T): T => arg


console.log('type  string', superEcho('Hello'))
console.log('type boolean', superEcho(true))

// learning english "!" exclamation mark 

type HasId = {
  id: number
}

const processUser = <T extends HasId>(user: T) => {
  return user.id
}


const chekHasId = <T extends HasId>(user: T): T => {
  return user
}


// Argument of type '{ name: string; age: number; drammer: boolean; }' is not assignable to parameter of type 'HasId'.
//   Property 'id' is missing in type '{ name: string; age: number; drammer: boolean; }' but required in type 'HasId'. 


// console.log(chekHasId(drammer))

console.log(chekHasId({ id: 5, ...drammer }))


const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map(user => user[key])
}


const users = [
  {
    name: 'Ivan',
    id: 6,
    email: 'evan6@email.com',
    company: 'piece of shit'
  },
  {
    name: 'Vasil',
    id: 777,
    email: 'Vasil@email.com',
    company: 'nice company'
  }
]

console.log(getUsersProperty(users, 'company'))



class StateObject<T> {
  private data: T
  constructor(value: T) {
    this.data = value
  }

  get state(): T {
    return this.data
  }

  set state(value: T) {
    this.data = value
  }
}


const store = new StateObject('Jhon')


console.log(store.state)

store.state = 'Dave'

// Type 'number' is not assignable to type 'string'

// store.state = 12

type StorageType_1 = string | boolean | number


const myState = new StateObject<StorageType_1[]>([123, 'Jhon Wick', true])

console.log(' myState', myState)
console.log(' myState.state', myState.state)

// Comparing Manual Transmission with Automatic

type CarType = {
  label: string,
  gear: 'manual' | 'automatic',
  price: number
}


const myGarage = new StateObject<CarType[]>([
  {
    label: 'Dodge',
    gear: 'automatic',
    price: 4500
  },
  {
    label: 'Frod',
    gear: 'manual',
    price: 3500
  }
])

console.log(' myGarage.state', myGarage.state)
