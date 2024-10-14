import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import ProjectSwiper from "./ProjectSwiper";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
    const [projectWrapperHeight] = useState("80vh");
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "50% 50%",
                    end: "bottom 50%",
                    pin: true,
                    scrub: 1,
                    ease: "power4.out",
                },
            });

            tl.to(
                ".my",
                {
                    left: "-30",
                },
                "project"
            )
                .to(
                    ".work",
                    {
                        right: "-30",
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
        { scope: sectionRef }
    );

    return (
        <section ref={sectionRef}>
            <div className="projects bg-stone-200 text-black flex flex-wrap justify-center content-center gap-24 py-[10vh] min-h-screen">
                <div className="w-full max-w-[1200px] relative">
                    <h2 className="my font-sans text-7xl text-black font-bold text-center uppercase leading-normal table absolute left-[36%] z-1 -translate-y-1/2">
                        My
                    </h2>
                    <div className="project-wrapper w-full h-0 overflow-hidden">
                        <ProjectSwiper />
                    </div>
                    <h2 className="work font-sans text-7xl text-black font-bold text-center uppercase leading-normal table absolute right-[36%] z-1 -translate-y-1/2">
                        Work
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Projects;
