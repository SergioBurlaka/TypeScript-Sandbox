// ts-node ./as_const.ts

const routes = {
  home: "/",
  admin: "/admin",
  users: "/users",
} as const;

type RoutesKyes = keyof typeof routes

type RoutesType = (typeof routes)[keyof typeof routes];

type HomeAdminType = (typeof routes)['home' | 'admin'];

const goToRoute = <T>(routes: T) => {};

// const goToRoute = (routes: "/" | "/admin" | "/users") => {};

goToRoute(routes.admin);

goToRoute<HomeAdminType>('/admin')
goToRoute<HomeAdminType>(routes.home)
