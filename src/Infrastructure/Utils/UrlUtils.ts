export const AppRouting = {
  Error403: {
    path: () => "/403",
  },
  Error404: {
    path: () => "/404",
  },
  Dashboard: {
    path: () => "/",
  },
  Clients: {
    path: () => "/clients",
  },
  ClientDetail: {
    route: "/clients/:id",
    path: (id: number) => `/clients/${id}`,
  },
  Tasks: {
    path: () => "/tasks",
  },
} as const;

type RouteObject<T extends any[] = any[]> = {
  route?: string;
  path: (...args: T) => string;
};

export function getRoute<T extends RouteObject>(routeObj: T): string {
  return routeObj.route ?? routeObj.path();
}

export function getPath<T extends RouteObject>(
  routeObj: T,
  ...args: Parameters<T["path"]>
): string {
  return routeObj.path(...args);
}

export function resolveStartPage(
  user: unknown | null,
  unauthenticatedUrl: string | null
) {
  if (user === null) {
    return getPath(AppRouting.Dashboard);
  }

  if (unauthenticatedUrl) {
    return unauthenticatedUrl;
  }
  return getPath(AppRouting.Dashboard);
}

export function getPathnameAndSearch(location: {
  pathname: string;
  search: string;
}) {
  return `${location.pathname}${location.search}`;
}
