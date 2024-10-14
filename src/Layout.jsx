import { Outlet } from "react-router-dom";
import Cursor from "./components/common/cursor/Cursor";
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";

const Layout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <Cursor />
                    <Outlet />
                </>
            )}
        </>
    );
};

export default Layout;
