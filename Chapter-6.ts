///////////////////////////

// ts-node ./Chapter-6.ts

type CoderType = {
  name: string;
  music: string;
  age: number;
  language: string;
};

class Coder {
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected language: string = "TypeScript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.language = language;
  }

  public getAge() {
    return this.age;
  }
  public setAge(value: number) {
    this.age = value;
  }
  public getLanguage() {
    return this.language;
  }
  public setLanguage(value: string) {
    this.language = value;
  }
}


const ivan = new Coder("Ivan", "bachata", 28, "js");

console.log("new coder", ivan);
console.log("My age ", ivan.getAge());
ivan.setAge(11);
ivan.setLanguage("C#");
console.log("new coder", ivan);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number,
    language: string
  ) {
    super(name, music, age, language);
    this.computer = computer;
  }
}

const Vasil = new WebDev("HP", "Vasil", "pop", 29, "HTML CSS");
console.log("Vasil", Vasil);

console.log("Vasil getLanguage", Vasil.getLanguage());
Vasil.setLanguage("typescript");
console.log("Vasil getLanguage", Vasil.getLanguage());
console.log("Vasil getAge", Vasil.getAge());
Vasil.setAge(17);
console.log("Vasil", Vasil);

interface Musitiabn {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musitiabn {
  name: string;
  instrument: string;

  constructor(name: string, instrument: string) {
    (this.name = name), (this.instrument = instrument);
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist("Jimmy", "guitar");

// console.log("Page", Page);
// console.log("Page", Page.play("rock"));

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Any = new Peeps("Any");

// console.log("Peeps.count", Peeps.count);
// console.log("Peeps.count", Peeps.getCount());

// console.log("John.id", John.id);
// console.log("Steve.id", Steve.id);

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
      throw new Error("Param is not array");
    }
  }
}

const MyBands = new Bands();

MyBands.data = ["AC DC", "Red HOT Chilly pappers", "The Queen"];

// console.log("MyBands.data", MyBands.data);

MyBands.data = [...MyBands.data, "Nirvana"];

// console.log("MyBands.data", MyBands.data);
