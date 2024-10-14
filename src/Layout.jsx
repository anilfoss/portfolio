import { Outlet } from "react-router-dom";
import Cursor from "./components/common/cursor/Cursor";
import { useEffect } from "react";

const Layout = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Cursor />
            <Outlet />

            {/* <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© 2024 My Website</p>
            </footer> */}
        </>
    );
};

export default Layout;
