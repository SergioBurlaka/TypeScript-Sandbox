// ts-node ./as_const.ts

const routes = {
  home: "/",
  admin: "/admin",
  users: "/users",
} as const

// const goToRoute = (routes: "/" | "/admin" | "/users") => {};

type RoutesType = typeof routes []


const goToRoute = (routes: RoutesType) => {};

goToRoute()
