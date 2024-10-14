import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Todo from "./pages/Todo";
import Layout from "./Layout";
import AboutLoader from "./components/about/aboutLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
                loader: AboutLoader,
            },
            {
                path: "/todo",
                element: <Todo />,
            },
        ],
    },
]);
