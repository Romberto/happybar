import { createBrowserRouter, RouteObject } from "react-router-dom"
import Main from "./components/Pages/Main"


export const routers:RouteObject[] = [
    {
        id: '1',
        path: '/happybar',
        element: <Main/>,
        children: [{

        }]
    },
    {
        id: '2',
        path: "/*",
        element: <h1>Not fond page</h1>
    },
]

export const router = createBrowserRouter(routers)