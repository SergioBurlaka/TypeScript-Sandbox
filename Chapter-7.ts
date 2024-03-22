///////////////////////////

// ts-node ./Chapter-7.ts

// type TransactionTypes = {
//   readonly [key: string]: number
// }

type TransactionTypes = {
  readonly [key: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
};

//угода

const todayTransactions: TransactionTypes = {
  Pizza: -10,
  Books: -5,
  Job: 50,
  // Dave: 'hey'
};

console.log(todayTransactions.Pizza);
console.log(todayTransactions["Pizza"]);

const prop: string = "Pizza";
console.log(todayTransactions[prop]);

const todaysNet = (transactions: TransactionTypes): number => {
  let total = 0;
  for (const item in transactions) {
    total += transactions[item];
  }

  return total;
};

console.log("todaysNet", todaysNet(todayTransactions));

// todayTransactions.Pizza = 40

console.log(todayTransactions["Dave"]);

//////////////////////

type Student = {
  // [key: string]: string | number | number[] | undefined,
  name: string;
  gpa: number;
  classes?: number[];
};

const student: Student = {
  name: "Dough",
  gpa: 3.5,
  classes: [100, 200],
};

// console.log(student.test)
// перебір пропсів обєкту та іх тип

for (const key in student) {
  console.log("student[key]", student[key as keyof Student]);
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]);
});

///////

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "name");

//////////////////////

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: "250",
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
