import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Loader = () => {
    useGSAP(() => {
        gsap.from("span", {
            opacity: 0,
            repeat: -1,
            duration: 0.7,
        });
    }, []);

    return (
        <section className="grid place-content-center min-h-screen">
            <div className="text-2xl leading-none flex flex-wrap items-end">
                Please wait a sec...
                <span className="bg-white ml-1 w-2 h-4/5"></span>
            </div>
        </section>
    );
};

export default Loader;