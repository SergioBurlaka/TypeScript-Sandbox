// ts-node ./enum_vs_Array_as_const.ts
enum Satus {
  success = "Success",
  error = "Error",
}

type myTypeWithGeneric<T> = {
  status: Satus;
  data: T;
};

const response: myTypeWithGeneric<{}> = {
  status: Satus.success,
  data: {},
};

const statusFromArr = ["Success", "Error", "Loading"] as const;

type StatusEnumFromErray = (typeof statusFromArr)[number];

type myTypeWithGeneric_2<T> = {
  status: StatusEnumFromErray;
  data?: T;
};

const responseObj: myTypeWithGeneric_2<{}> = {
  status: "Success",
  data: {},
};

const responses = [
  { status: "Success" },
  { status: "Error" },
  { status: "Loading" },
];

console.log("responses", responses);

function printLocation_2(locationState: myTypeWithGeneric_2<never>) {
  switch (locationState.status) {
    case "Success":
      console.log("Success", locationState.status);
      break;
    case "Error":
      console.log("Error", locationState.status);
      break;
    case "Loading":
      console.log("Loading", locationState.status);
      break;
  }
}

responses.forEach((item) =>
  printLocation_2(item as myTypeWithGeneric_2<never>)
);
