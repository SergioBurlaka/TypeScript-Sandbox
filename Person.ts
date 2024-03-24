// ts-node ./Chapter-test.ts
class Person {
  private name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public changeName(value: string) {
    this.name = value;
  }

  public setAge(value: number) {
    this.age = value;
  }

  public introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const person = new Person("Alice", 30);
person.introduce();

person.setAge(35);
person.introduce();
console.log("person", person);

person.setAge(15);
console.log("person", person);

// https://chat.openai.com/share/d51999ad-0bfc-43ab-805a-89e7938f0da8

// Yes, that's correct! 

// In the `Person` class, the `age` field is declared as `protected`, which means it can be accessed and modified within the `Person` class and its subclasses, but not from outside instances of the class.

// Here's a summary of the access levels:

// 1. **Private (`private`):** Can only be accessed and modified within the class it is declared in.
// 2. **Protected (`protected`):** Can be accessed and modified within the class it is declared in and its subclasses.
// 3. **Public (`public`):** Can be accessed and modified from anywhere.

// So, in your `Person` class, the `age` field can be modified using the `setAge` method from within the class or its subclasses, but not directly from an instance of `Person` outside the class.


