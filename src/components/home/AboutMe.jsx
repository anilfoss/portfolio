import String from "./String";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutMe = () => {
    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-me",
                start: "top 50%",
                end: "50% 50%",
                // markers: true,
                scrub: 1,
            },
        });

        tl.to(
            ".line1 .line-overlay",
            {
                width: "100%",
                duration: 0.3,
                delay: 0,
            },
            "line"
        );
        tl.to(
            ".line1 span",
            {
                paddingInline: "0.75rem",
                delay: 0,
            },
            "line"
        );
        tl.to(
            ".line2 .line-overlay",
            {
                width: "100%",
                duration: 0.6,
                delay: 0.03,
            },
            "line"
        );
        tl.to(
            ".line3 .line-overlay",
            {
                width: "100%",
                duration: 0.8,
                delay: 0.08,
            },
            "line"
        );
    }, []);

    return (
        <section className="about-me bg-stone-200 text-6xl text-black grid place-content-center place-items-center p-12 min-h-screen">
            <div className="line line1 font-bold text-center uppercase leading-normal relative">
                <div className="text-stone-500">
                    Hi, I’m a seasoned{" "}
                    <span className="text-black">Frontend UI</span> Developer
                </div>
                <div className="line-overlay w-0 whitespace-nowrap absolute left-0 top-0 overflow-hidden">
                    Hi, I’m a seasoned{" "}
                    <span className="bg-black text-white pb-4">
                        Frontend UI
                    </span>{" "}
                    Developer
                </div>
            </div>
            <div className="line line2 font-bold text-center uppercase leading-normal relative">
                <div className="text-stone-500">
                    with over a decade of experience in crafting
                </div>
                <div className="line-overlay w-0 whitespace-nowrap absolute left-0 top-0 overflow-hidden">
                    with over a decade of experience in crafting
                </div>
            </div>
            <div className="line line3 font-bold text-center uppercase leading-normal relative">
                <div className="text-stone-500">
                    intuitive and visually stunning user interfaces.
                </div>
                <div className="line-overlay w-0 whitespace-nowrap absolute left-0 top-0 overflow-hidden">
                    intuitive and visually stunning user interfaces.
                </div>
            </div>

            <String />
        </section>
    );
};

export default AboutMe;
