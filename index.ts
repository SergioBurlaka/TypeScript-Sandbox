// Лінк на туторіал
// https://www.youtube.com/watch?v=G7fNaZwIoiM&list=PLiZoB8JBsdzlG1oAY8U4vrBtVW07j6jil&index=20&ab_channel=%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%D0%9D%D0%B5%D0%BF%D0%BE%D0%BC%D0%BD%D1%8F%D1%89%D0%B8%D0%B9

import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos/1";

interface TodoType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const getTodo = async (): Promise<TodoType> => {
  const { data } = await axios.get<TodoType>(url);
  return data;
};

// const getTodo = async () => {
//     const { data } = await axios.get(url);
//     return data as TodoType
// }

// type P = ReturnType<typeof getTodo>

getTodo().then((resp) => {
  const { userId, id, title, completed } = resp;

  console.log(" resp typeof ", typeof resp);

  console.log(`
        userId: ${userId},
        id: ${id},
        title: ${title},
        completed: ${completed},

        `);
});

// const cd = resp => resp
const myFn = <T>(resp: T): T => resp;

getTodo().then((resp) => {
  const myVar = myFn(resp);
  console.log("myVar", myVar);

  // type Tpx = ReturnType<typeof myFn(resp) >
});

// type Tpx = ReturnType<typeof myFn>

// ts-node ./index.ts

// axios.get(url).then(res => {

//     const todo = res.data;

//     const { userId, id, title, completed } = todo
//     console.log(`
//     userId: ${userId},
//     id: ${id},
//     title: ${title},
//     completed: ${completed},

//     `)

// })

///////////////////////////

// tsс index.ts
// команда для створення index.js щоб запустити через html документ

//   <script src="index.js"></script>

///////////////////
