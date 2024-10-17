import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Marquee2 = () => {
    const marqueRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: marqueRef.current,
                    start: "top 100%",
                    // markers: true,
                    ease: "power2.out",
                    scrub: 1,
                },
            });

            tl.to(".inner", {
                xPercent: -100,
                duration: 2,
            });
        },
        { scope: marqueRef }
    );

    return (
        <section id="marquee" ref={marqueRef}>
            <div className="marquee-wrapper text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[4vw] px-12 pt-4 pb-6 md:pt-5 3xl:pt-[0.6vw] md:pb-8 lg:pb-9 3xl:pb-[1.2vw] overflow-hidden">
                <div className="inner uppercase flex items-center gap-6 sm:gap-8 md:gap-10 3xl:gap-[1.5vw]">
                    {Array.from({ length: 10 }, (_, index) => {
                        return (
                            <span
                                key={index}
                                className="flex items-center gap-6 sm:gap-8 md:gap-10 3xl:gap-[1.5vw]"
                            >
                                <span>Frontend</span>
                                <span className="text-transparent text-stroke-1 md:text-stroke-2">
                                    Developer
                                </span>
                            </span>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Marquee2;
