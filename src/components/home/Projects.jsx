import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import ProjectSwiper from "./ProjectSwiper";
import useResize from "../../hooks/useResize";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
    const [myWidth, setMyTextWidth] = useState("");
    const [workWidth, setWorkTextWidth] = useState("");
    const [projectWrapperHeight] = useState("80vh");
    const sectionRef = useRef(null);
    const screenWidth = useResize();

    useGSAP(
        () => {
            const projectWrapperWidth =
                document.querySelector(".project-wrapper").clientWidth;
            const mWidth = document.querySelector(".my").clientWidth;
            const wWidth = document.querySelector(".work").clientWidth;
            const myTextWidth =
                projectWrapperWidth / 2 - mWidth / 2 - wWidth / 2 - 10;
            const workTextWidth =
                projectWrapperWidth / 2 - mWidth / 2 - wWidth / 2 - 10;

            setMyTextWidth(myTextWidth);
            setWorkTextWidth(workTextWidth);

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 0%",
                    // markers: true,
                    pin: true,
                    scrub: 1,
                    ease: "power4.out",
                },
            });

            tl.to(
                ".my",
                {
                    left: "-20",
                },
                "project"
            )
                .to(
                    ".work",
                    {
                        right: "-20",
                    },
                    "project"
                )
                .to(
                    ".project-wrapper",
                    {
                        height: projectWrapperHeight,
                    },
                    "project"
                );
        },
        { scope: sectionRef, dependencies: [screenWidth] }
    );

    return (
        <section ref={sectionRef}>
            <div className="projects bg-stone-200 text-black flex flex-wrap justify-center content-center gap-24 px-6 py-[10vh]-111 md:px-7 lg:px-8 xl:px-9 2xl:px-12 min-h-screen">
                <div
                    className={`w-11/12 relative ${
                        screenWidth > 767 ? "max-w-[1200px]" : "max-w-[411px]"
                    }`}
                >
                    <h2
                        className="my font-sans text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-black font-bold text-center uppercase leading-normal table absolute z-1 -translate-y-1/2"
                        style={{ left: myWidth }}
                    >
                        My
                    </h2>
                    <div className="project-wrapper w-full h-0 overflow-hidden">
                        <ProjectSwiper />
                    </div>
                    <h2
                        className="work font-sans text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-black font-bold text-center uppercase leading-normal table absolute z-1 -translate-y-1/2"
                        style={{ right: workWidth }}
                    >
                        Work
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Projects;
