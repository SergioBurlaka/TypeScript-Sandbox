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

const statusFromArr = ["Success", "Error"] as const;

type StatusEnumFromErray = (typeof statusFromArr)[number];

type myTypeWithGeneric_2<T> = {
  status: StatusEnumFromErray;
  data: T;
};

const responseObj: myTypeWithGeneric_2<{}> = {
  status: "Success",
  data: {},
};
