import { createBrowserRouter } from "react-router-dom"
import { HomeLayout, Landing, Services, Moving, Contact } from "./pages"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Landing />
            },
            {
                path: "Services",
                element: <Services />
            },
            {
                path: "Moving",
                element: <Moving />
            },
            {
                path: "Contact",
                element: <Contact />
            },
        ]
    },

])