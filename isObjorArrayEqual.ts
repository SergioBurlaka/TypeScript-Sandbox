// відео з уроком
// https://www.youtube.com/watch?v=sjejBH-8SIc&ab_channel=AleksandrSugak

const user_1 = {
  name: "sergii",
  age: 29,
};

const user_2 = {
  name: "sergii",
  age: 29,
};
const user_3 = {
  name: "sergii",
  age: 23,
};

const isObjectsEqual = (a: any, b: any) => {
  if (typeof a === "object" && typeof b === "object") {
    return (
      Object.keys(a).every((key) => isObjectsEqual(a[key], b[key])) &&
      Object.keys(b).every((key) => isObjectsEqual(a[key], b[key]))
    );
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    return (
      (a as any[]).every((item, index) => isObjectsEqual(item, b[index])) &&
      (b as any[]).every((item, index) => isObjectsEqual(item, a[index]))
    );
  }

  return a === b;
};
const arr_1 = [1, 4, 5, 6, 7, 8, 0];
const arr_2 = [1, 4, 5, 6, 7, 8, 0];
const arr_3 = [1, 4, 5, 6, 7, 8];

console.log("isObjectsEqual user_1 user_2 ", isObjectsEqual(user_1, user_2));
console.log("isObjectsEqual user_1 user_3 ", isObjectsEqual(user_1, user_3));

console.log("isObjectsEqual arr_1 arr_2 ", isObjectsEqual(arr_1, arr_2));
console.log("isObjectsEqual arr_1 arr_3 ", isObjectsEqual(arr_1, arr_3));
