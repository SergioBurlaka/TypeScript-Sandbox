// ts-node ./keyof.ts

const personeSex = ["Male", "Female"] as const;

type SexType = (typeof personeSex)[number];

type PersoneType = {
  age: number;
  name: string;
  sex: SexType;
};

const younglady: PersoneType = {
  age: 23,
  name: "Sabrina",
  sex: "Female",
};

type TypeKeysOfMyDid = keyof PersoneType;

const routes_2 = {
  home: "/",
  admin: "/admin",
  users: "/users",
} as const;

type RoutesKyes_2 = keyof typeof routes_2;

type RoutesType_2 = (typeof routes_2)[keyof typeof routes_2];

type HomeAdminType_2 = (typeof routes_2)["home" | "admin"];

type TypeForPage = {
  name: string;
  route: RoutesType_2;
};

const myHomePage: TypeForPage = {
  name: "My home page",
  route: "/",
};
