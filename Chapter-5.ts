

// Лінк на туторіал

// https://www.youtube.com/watch?v=gieEQFIfgYc&t=5s&ab_channel=DaveGray
// ts-node ./Chapter-5.ts


///


type A = string
type B = string | number
type C = 'Hello'

let a: A = 'Hello'
let b = a as B // less specific 
let c = a as C // more specific 

const world = <A>'some string'
const helloWorld = <string>'some string'

console.log('helloWorld', helloWorld)


const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): string | number => {
  if (c === 'add') return a + b
  return '' + a + b
}

// проблема у тому що в такому випадку ts не бачить проблеми але насправді  в цьому випадку він повертає непрпавильний тип бо насправді тут число
const sum: string = addOrConcat(4, 9, 'add') as string

const resConcat = addOrConcat(4, 9, 'concat')



// the DOM

const img = document.getElementById('img') as HTMLImageElement
const myImage = document.getElementById('#myId') as HTMLImageElement

const nextImg = <HTMLImageElement>document.getElementById('#myId')

img.src
myImage.src
nextImg.src



