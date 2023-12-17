import { RootRoute, Route, Router, RouterProvider } from "@tanstack/react-router";
import StoresListPage from "../dashboard/stores/list";
import StorePage from "../dashboard/stores/store";
import LoginPage from "../auth/login";
import RegisterPage from "../auth/register";

const rootRoute = new RootRoute();
const loginPageRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: LoginPage,
})
const registerPageRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/register',
    component: RegisterPage,
})
const storesListPageRoute = new Route({
    getParentRoute: () => rootRoute,
    path: 'stores',
    component: StoresListPage,
})
const storePageRoute = new Route({
    getParentRoute: () => rootRoute,
    path: 'store/$slug',
    component: StorePage,
})


const routeTree = rootRoute.addChildren([registerPageRoute, loginPageRoute, storesListPageRoute, storePageRoute])
const router = new Router({
    routeTree,
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};