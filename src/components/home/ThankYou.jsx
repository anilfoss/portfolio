import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ThankYou = () => {
    const [text] = useState("Thank You");
    const sectionRef = useRef(null);

    useGSAP(
        () => {
            const letters = gsap.utils.toArray("#text span");

            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "50% 70%",
                    // markers: true,
                },
            });

            tl.from(letters, {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "back.out(3)",
            });
        },
        { scope: sectionRef.current }
    );

    return (
        <section ref={sectionRef}>
            <div className="inner bg-stone-200 text-black flex flex-wrap justify-center content-center gap-24 py-24 min-h-screen px-12">
                <h3
                    id="text"
                    className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[4.5vw]"
                >
                    {text?.split("").map((letter, index) => (
                        <span
                            className={`tracking-wide inline-block ${
                                letter === " "
                                    ? "px-1 sm:px-2 xl:px-3 3xl:px-[0.5vw]"
                                    : ""
                            }`}
                            key={index}
                        >
                            {letter}
                        </span>
                    ))}
                    <span
                        id="icon"
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[3.5vw] inline-block ml-2 3xl:ml-[0.8vw] relative -top-1.5 md:-top-3 3xl:-top-[0.6vw]"
                    >
                        &#128591;
                    </span>
                </h3>
            </div>
        </section>
    );
};

export default ThankYou;
