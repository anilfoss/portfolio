import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experienceData } from "../../data";
import HTMLReactParser from "html-react-parser/lib/index";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Experience = () => {
    const [timelineWrapperTotalWidth, setTimelineWrapperTotalWidth] =
        useState(0);

    const timelineRef = useRef([]);
    const topRef = useRef([]);
    const bottomRef = useRef([]);

    useGSAP(() => {
        let timelineWrapperWidth = 0;
        const sectionWidth = document.querySelector(".experience");
        const timelines = gsap.utils.toArray(".timeline-wrapper .timeline");

        timelines.forEach((timeline) => {
            timelineWrapperWidth = timelineWrapperWidth + timeline.clientWidth;
            setTimelineWrapperTotalWidth(
                timelineWrapperWidth - sectionWidth.clientWidth
            );
        });
    }, [timelineWrapperTotalWidth]);

    useGSAP(() => {
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".experience",
                start: "top 60%",
                // markers: true,
                scrub: 1,
            },
        });

        tl1.from(".experience .heading h2", {
            y: 50,
            opacity: 0,
        });

        tl1.from(".experience .heading + div", {
            y: 50,
            opacity: 0,
            duration: 10,
            delay: 5,
        });
    }, []);

    useGSAP(() => {
        const line = document.querySelectorAll(".line-wrapper .line");
        const dots = document.querySelectorAll(".dot");

        let tl2 = gsap.timeline({
            scrollTrigger: {
                scroller: "body",
                trigger: ".experience",
                start: "60% 60%",
                end: "200% 60%",
                // markers: true,
                pin: true,
                scrub: 3,
                duration: 10,
                delay: 2,
                ease: "power2.out",
            },
        });

        tl2.to(
            ".timeline-wrapper",
            {
                paddingLeft: 0,
                xPercent: -100,
                duration: 15,
                delay: 5,
            },
            "journey"
        );

        tl2.to(
            line,
            {
                width: "100%",
                duration: 15,
            },
            "journey"
        );

        dots.forEach((dot) => {
            tl2.to(
                dot,
                {
                    backgroundColor: "#fff",
                    duration: 5,
                    ease: "power2.out",
                },
                "journey"
            );
        });

        tl2.from(
            [topRef.current],
            {
                x: 40,
                y: -40,
                opacity: 0,
                stagger: 3,
                duration: 2,
                delay: 2,
            },
            "journey"
        );

        tl2.from(
            [bottomRef.current],
            {
                x: 40,
                y: 40,
                opacity: 0,
                stagger: 3,
                duration: 2,
                delay: 2,
            },
            "journey"
        );
    }, []);

    return (
        <>
            <section className="experience bg-black text-white flex flex-wrap justify-center content-center gap-16 md:gap-24 3xl:gap-[5vw] py-20 sm:py-24 md:py-28 lg:py-28 xl:py-28 2xl:py-28 3xl:py-[5vw] min-h-screen">
                <div className="heading -mt-8 w-full">
                    <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[4vw] font-bold text-center uppercase leading-normal">
                        Journey{" "}
                        <span className="lg:text-5xl xl:text-6xl 3xl:text-[4vw] relative -top-1">
                            &#128640;
                        </span>
                    </h2>
                </div>

                <div className="w-full relative">
                    {/* middle line */}
                    <div className="line-wrapper bg-stone-700 w-full h-0.5 md:h-1.5 3xl:h-[0.2vw] absolute top-[7.75rem] md:top-[8.3rem] 3xl:top-[7.6vw]">
                        <div className="line bg-white w-0 h-full absolute left-0 top-0"></div>
                    </div>

                    <div
                        className="timeline-wrapper flex lg:pl-40 xl:pl-52 2xl:pl-96 3xl:pl-0 relative"
                        style={{ width: timelineWrapperTotalWidth }}
                    >
                        {experienceData.map((data, index) => {
                            return (
                                <div
                                    key={data?.id}
                                    ref={(el) =>
                                        (timelineRef.current[index] = el)
                                    }
                                    className="timeline flex flex-wrap flex-col gap-7 3xl:gap-[2.5vw] px-10 sm:px-20 md:px-[12vw] lg:px-28 xl:px-40 2xl:px-60 3xl:px-[30vw] min-w-[100vw] md:min-w-[100vw] lg:min-w-[900px] xl:min-w-[1000px] 2xl:min-w-[1200px] 3xl:min-w-[100vw] relative"
                                >
                                    {/* top content */}
                                    <div
                                        ref={(el) =>
                                            (topRef.current[index] = el)
                                        }
                                        className="top flex flex-wrap flex-col gap-1 3xl:gap-[0.5vw]"
                                    >
                                        <span className="text-2xl md:text-3xl 3xl:text-[1.6vw] font-bold 3xl:leading-[1.1]">
                                            {data?.time}
                                        </span>
                                        <span className="text-lg md:text-xl 3xl:text-[1vw] text-stone-400 font-bold 3xl:leading-[1.1]">
                                            {data?.company}, {data?.location}
                                        </span>
                                        <span className="text-base md:text-lg 3xl:text-[0.9vw] text-stone-400 font-bold 3xl:leading-[1.1]">
                                            {data?.role}
                                        </span>
                                    </div>

                                    {/* middle line */}
                                    <div className="dot bg-stone-900 w-2.5 h-2.5 md:w-4 md:h-4 3xl:w-[0.8vw] 3xl:h-[0.8vw]"></div>

                                    {/* bottom content */}
                                    <div
                                        ref={(el) =>
                                            (bottomRef.current[index] = el)
                                        }
                                        className="bottom text-base md:text-xl 3xl:text-[1.1vw] 3xl:leading-[1.4]"
                                    >
                                        <ul className="list-square list-outside flex flex-wrap flex-col gap-2 3xl:gap-[0.8vw] ml-5 3xl:ml-[1vw]">
                                            {HTMLReactParser(data?.content)}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Experience;
