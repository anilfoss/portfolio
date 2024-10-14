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
                scroller: "body",
                trigger: ".experience .heading",
                start: "top 60%",
                end: "top 60%",
                scrub: 1,
            },
        });

        tl1.from(".experience .heading h2", {
            y: 50,
            opacity: 0,
            duration: 10,
            delay: 5,
        });

        tl1.from(".experience .heading + div", {
            y: 50,
            opacity: 0,
            duration: 10,
            delay: 5,
        });
    });

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
                stagger: 2,
            },
            "journey"
        );

        tl2.from(
            [bottomRef.current],
            {
                x: 40,
                y: 40,
                opacity: 0,
                stagger: 2,
            },
            "journey"
        );
    });

    return (
        <>
            <section className="experience bg-black tet-white flex flex-wrap justify-center content-center gap-24 py-24 min-h-screen">
                <div className="heading -mt-8 w-full">
                    <h2 className="font-sans text-7xl font-bold text-center uppercase leading-normal">
                        Journey{" "}
                        <span className="text-5xl relative -top-1">
                            &#128640;
                        </span>
                    </h2>
                </div>

                <div className="w-full relative">
                    {/* middle line */}
                    <div className="line-wrapper bg-stone-700 w-full h-1.5 absolute top-[8.3rem]">
                        <div className="line bg-white w-0 h-full absolute left-0 top-0"></div>
                    </div>

                    <div
                        className={`timeline-wrapper flex pl-96 relative`}
                        style={{ width: timelineWrapperTotalWidth }}
                    >
                        {experienceData.map((data, index) => {
                            return (
                                <div
                                    key={data?.id}
                                    ref={(el) =>
                                        (timelineRef.current[index] = el)
                                    }
                                    className={`timeline flex flex-wrap flex-col gap-7 px-60 min-w-[1200px] relative`}
                                >
                                    {/* top content */}
                                    <div
                                        ref={(el) =>
                                            (topRef.current[index] = el)
                                        }
                                        className="top flex flex-wrap flex-col gap-1"
                                    >
                                        <span className="text-3xl font-bold">
                                            {data?.time}
                                        </span>
                                        <span className="text-xl text-stone-400 font-bold">
                                            {data?.company}, {data?.location}
                                        </span>
                                        <span className="text-lg text-stone-400 font-bold">
                                            {data?.role}
                                        </span>
                                    </div>

                                    {/* middle line */}
                                    <div className="dot bg-stone-900 w-4 h-4"></div>

                                    {/* bottom content */}
                                    <div
                                        ref={(el) =>
                                            (bottomRef.current[index] = el)
                                        }
                                        className="bottom text-xl"
                                    >
                                        <ul className="list-square list-outside flex flex-wrap flex-col gap-2 ml-5">
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
