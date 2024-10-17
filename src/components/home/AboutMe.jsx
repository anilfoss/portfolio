import String from "./String";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import useResize from "../../hooks/useResize";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutMe = () => {
    const screenWidth = useResize();

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".about-me",
                start: "top 50%",
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
        {
            screenWidth > 639 &&
                tl.to(
                    ".line1 span",
                    {
                        paddingInline: screenWidth > 1921 ? "0.8vw" : "0.75rem",
                        delay: 0,
                    },
                    "line"
                );
        }
        tl.to(
            ".line2 .line-overlay",
            {
                width: "100%",
                duration: 0.6,
                delay: 0.03,
            },
            "line"
        );
        {
            screenWidth < 640 &&
                tl.to(
                    ".line2 span",
                    {
                        paddingInline: "0.5rem",
                        delay: 0,
                    },
                    "line"
                );
        }

        tl.to(
            ".line3 .line-overlay",
            {
                width: "100%",
                duration: 0.8,
                delay: 0.08,
            },
            "line"
        );

        {
            screenWidth < 640 &&
                tl.to(
                    ".line4 .line-overlay",
                    {
                        width: "100%",
                        duration: 1,
                        delay: 0.1,
                    },
                    "line"
                );
        }
        {
            screenWidth < 640 &&
                tl.to(
                    ".line5 .line-overlay",
                    {
                        width: "100%",
                        duration: 1.2,
                        delay: 0.12,
                    },
                    "line"
                );
        }
        {
            screenWidth < 640 &&
                tl.to(
                    ".line6 .line-overlay",
                    {
                        width: "100%",
                        duration: 1.4,
                        delay: 0.14,
                    },
                    "line"
                );
        }
    }, [screenWidth]);

    return (
        <>
            {screenWidth > 639 ? (
                <section className="about-me bg-stone-200 text-[clamp(1.5rem,_5vw,_2rem)] sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-[3vw] text-black grid place-content-center place-items-center pt-12 pb-4 sm:px-6 sm:pt-20 sm:pb-8 md:pt-24 md:pb-8 3xl:p-[5vw] min-h-screen">
                    <div className="line line1 font-bold text-center uppercase leading-normal relative">
                        <div className="text-stone-500">
                            Hi, I’m a seasoned{" "}
                            <span className="text-black">Frontend UI</span>{" "}
                            Developer
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
            ) : (
                <section className="about-me bg-stone-200 text-[clamp(1.5rem,_5vw,_2rem)] sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-[3vw] text-black grid place-content-center place-items-center pt-12 pb-4 sm:px-6 sm:pt-20 sm:pb-8 md:pt-24 md:pb-8 min-h-screen">
                    <div className="line line1 font-bold text-center uppercase leading-normal relative">
                        <div className="text-stone-500">
                            Hi, I’m a seasoned{" "}
                        </div>
                        <div className="line-overlay w-0 whitespace-nowrap absolute left-0 top-0 overflow-hidden">
                            Hi, I’m a seasoned{" "}
                        </div>
                    </div>
                    <div className="line line2 font-bold text-center uppercase leading-normal relative">
                        <div className="text-stone-500">
                            <span className="text-black">Frontend UI</span>{" "}
                            Developer
                        </div>
                        <div className="line-overlay w-0 whitespace-nowrap absolute left-0 top-0 overflow-hidden">
                            <span className="bg-black text-white pb-4">
                                Frontend UI
                            </span>{" "}
                            Developer
                        </div>
                    </div>
                    <div className="line line3 font-bold text-center uppercase leading-normal relative">
                        <div className="text-stone-500">
                            with over a decade{" "}
                        </div>
                        <div className="line-overlay w-0 whitespace-nowrap absolute left-0 top-0 overflow-hidden">
                            with over a decade
                        </div>
                    </div>
                    <div className="line line4 font-bold text-center uppercase leading-normal relative">
                        <div className="text-stone-500">
                            of experience in crafting
                        </div>
                        <div className="line-overlay w-0 whitespace-nowrap absolute left-0 top-0 overflow-hidden">
                            of experience in crafting
                        </div>
                    </div>
                    <div className="line line5 font-bold text-center uppercase leading-normal relative">
                        <div className="text-stone-500">
                            intuitive and visually
                        </div>
                        <div className="line-overlay w-0 whitespace-nowrap absolute left-0 top-0 overflow-hidden">
                            intuitive and visually
                        </div>
                    </div>
                    <div className="line line6 font-bold text-center uppercase leading-normal relative">
                        <div className="text-stone-500">
                            stunning user interfaces.
                        </div>
                        <div className="line-overlay w-0 whitespace-nowrap absolute left-0 top-0 overflow-hidden">
                            stunning user interfaces.
                        </div>
                    </div>

                    <String />
                </section>
            )}
        </>
    );
};

export default AboutMe;
