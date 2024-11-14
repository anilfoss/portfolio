import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./Layout";
import AboutLoader from "./components/about/aboutLoader";
import Slider from "./pages/Slider";
import Slider1 from "./components/Slider/Slider1";
import Slider2 from "./components/Slider/Slider2";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                index: true,
            },
            {
                path: "/about",
                element: <About />,
                loader: AboutLoader,
            },
            {
                path: "/slider",
                element: <Slider />,
                children: [
                    {
                        path: "1",
                        element: <Slider1 />,
                    },
                    {
                        path: "2",
                        element: <Slider2 />,
                    },
                ],
            },
        ],
    },
]);
