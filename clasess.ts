
// Лінк на туторіал
// https://www.youtube.com/watch?v=zQondDhCXDI
// https://www.youtube.com/watch?v=OruUd2HULaI

// ts-node ./clasess.ts

// tsc clasess.ts


class User_1 {

  private skill: string = 'junior'

  constructor(
    public name: string,
    private nickName: string,
    protected age: number,
    public readonly language: string,
  ) {

    this.name = name
    this.nickName = nickName
    this.age = age
    this.language = language

  }

  getAge() {
    return this.age
  }

  get getSkill() {
    return this.skill
  }
  set getSkill(value) {
    this.skill = value
  }

}

const Sergii = new User_1('Sergii', 'Sergio', 38, 'JS')




console.log('Sergii.language', Sergii.language)
console.log('Sergii.name', Sergii.name)
console.log('Sergii.getSkill', Sergii.getSkill)


Sergii.getSkill = 'Middle'


// Property 'nicName' is private and only accessible within class 'User_1'.
// Sergii.nicName 

// Property 'age' is protected and only accessible within class 'User_1' and its subclasses.
// Sergii.age


// { name: 'Sergii', nicName: 'Sergio', age: 38, language: 'JS' }


console.log('Sergii', Sergii)
console.log('Sergii.getAge()', Sergii.getAge())

class Coder_1 {

  secondLang!: string

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = 'TS'
  ) {

    this.name = name
    this.music = music
    this.age = age
    this.lang = lang

  }

  get myAge() {
    return this.age
  }

  set myAge(value) {
    this.age = value
  }

}


const Sergii_2 = new Coder_1('Sergii', 'bachata', 37, 'js and ts')


console.log('Sergii_2 ', Sergii_2)

Sergii_2.myAge = 28
Sergii_2.secondLang = 'English'

console.log('Sergii_2 ', Sergii_2)

console.log('Sergii_2.myAge ', Sergii_2.myAge)



class WebDew extends Coder_1 {

  constructor(
    name: string = 'Valeriy',
    music: string,
    age: number,
    public computer: string
  ) {
    super(name, music, age)
    this.computer = computer
  }

  getLanguage() {
    return this.lang
  }

  setlanguage(value: string){
    this.lang = value
  }

}

const SuperDew = new WebDew(undefined, 'rock', 43, 'hp')

console.log('SuperDew ', SuperDew)
console.log('SuperDew.getLanguage() ', SuperDew.getLanguage())


SuperDew.setlanguage('js')

console.log('SuperDew ', SuperDew)