// Лінк на туторіал
// https://www.youtube.com/watch?v=G7fNaZwIoiM&list=PLiZoB8JBsdzlG1oAY8U4vrBtVW07j6jil&index=20&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9

// ts-node ./record.ts

//////

type User = {
  firstName: string;
  lastName: string;
};
type Country = "uk" | "france" | "india";

const myNewData: Record<Country, User> = {
  uk: { firstName: "John", lastName: "Doe" },
  france: { firstName: "Sarah", lastName: "Doe" },
  india: { firstName: "Jane", lastName: "Smith" },
};

console.log("myNewData", myNewData);
