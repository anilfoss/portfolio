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
        <section ref={marqueRef}>
            <div className="marquee-wrapper text-8xl px-12 pt-5 pb-9 overflow-hidden">
                <div className="inner uppercase flex items-center gap-10">
                    <span>Frontend</span>
                    <span className="text-transparent text-stroke">
                        Developer
                    </span>
                    <span>Frontend</span>
                    <span className="text-transparent text-stroke">
                        Developer
                    </span>
                    <span>Frontend</span>
                    <span className="text-transparent text-stroke">
                        Developer
                    </span>
                    <span>Frontend</span>
                    <span className="text-transparent text-stroke">
                        Developer
                    </span>
                    <span>Frontend</span>
                    <span className="text-transparent text-stroke">
                        Developer
                    </span>
                    <span>Frontend</span>
                    <span className="text-transparent text-stroke">
                        Developer
                    </span>
                    <span>Frontend</span>
                    <span className="text-transparent text-stroke">
                        Developer
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Marquee2;
