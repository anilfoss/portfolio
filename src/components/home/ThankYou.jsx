import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ThankYou = () => {
    const [text] = useState("Thank You");
    const sectionRef = useRef();

    useGSAP(
        () => {
            const letters = gsap.utils.toArray("#text span");

            let tl = gsap.timeline({
                scrollTrigger: {
                    scroller: "body",
                    trigger: sectionRef.current,
                    start: "top 50%",
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

    gsap.from("#icon", {
        y: 50,
        opacity: 0,
        stagger: 0.1,
    });

    return (
        <section ref={sectionRef}>
            <div className="inner bg-stone-200 text-black flex flex-wrap justify-center content-center gap-24 py-24 min-h-screen px-12">
                <h3 id="text" className="font-sans text-8xl">
                    {text.split("").map((letter, index) => (
                        <span
                            className={`tracking-wide inline-block ${
                                letter === " " ? "px-3" : ""
                            }`}
                            key={index}
                        >
                            {letter}
                        </span>
                    ))}
                    <span
                        id="icon"
                        className="text-7xl inline-block ml-2 relative -top-3"
                    >
                        &#128591;
                    </span>
                </h3>
            </div>
        </section>
    );
};

export default ThankYou;
