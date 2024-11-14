import { Link, Outlet, useLocation } from "react-router-dom";

const Slider = () => {
    const location = useLocation();

    return (
        <>
            {location.pathname === "/slider" && (
                <section className="text-9xl flex flex-wrap justify-evenly content-center min-h-screen">
                    <Link to="/slider/1">Slider 1</Link>
                    <Link to="/slider/2">Slider 2</Link>
                </section>
            )}

            <Outlet />
        </>
    );
};

export default Slider;
