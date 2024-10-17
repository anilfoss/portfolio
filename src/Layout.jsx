import { Outlet } from "react-router-dom";
import Cursor from "./components/common/cursor/Cursor";
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";

const Layout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleScroll = () => window.scrollTo(0, 0);
        window.addEventListener("load", handleScroll);

        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => {
            window.removeEventListener("load", handleScroll);
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
