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
            <div className="text-xl md:text-2xl 3xl:text-[1.5vw] leading-none 3xl:leading-[1.1] flex flex-wrap items-end">
                Please wait ...{" "}
                <span className="bg-white ml-1 w-1.5 3xl:w-[0.5vw] md:w-2 h-4/5"></span>
            </div>
        </section>
    );
};

export default Loader;
