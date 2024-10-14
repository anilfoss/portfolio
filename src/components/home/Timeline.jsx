import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Timeline = () => {
    const topRef = useRef(null);
    const bottomRef = useRef(null);

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                scroller: "body",
                trigger: topRef.current,
                start: "50% 50%",
                markers: true,
                scrub: 1,
            },
        });

        tl.from(
            topRef.current,
            {
                y: -50,
                opacity: 0,
                duration: 1,
            },
            "a"
        ).from(
            bottomRef.current,
            {
                y: 50,
                opacity: 0,
                duration: 1,
            },
            "a"
        );
    });

    return (
        <div className="timeline flex flex-wrap flex-col gap-7 pl-[24%] w-[65%] min-w-[65%] relative">
            {/* top content */}
            <div
                ref={topRef}
                className="top flex flex-wrap flex-col gap-1 px-[12%]-111"
            >
                <span className="text-3xl text-black font-bold">
                    MAR 2024 - AUG 2024
                </span>
                <span className="text-xl text-stone-600 font-bold uppercase">
                    Eminence Technology, Mohali
                </span>
                <span className="text-lg text-stone-600 font-bold uppercase">
                    Sr. Frontend Designer
                </span>
            </div>

            {/* middle line */}
            <div className="dot bg-stone-400 w-4 h-4"></div>

            {/* bottom content */}
            <div
                ref={bottomRef}
                className="bottom text-xl text-black px-[12%]-111"
            >
                <ul className="list-square list-outside flex flex-wrap flex-col gap-2 ml-5">
                    <li>
                        Developed and maintained robust, scalable, and
                        high-performance web applications using React JS and
                        Next JS.
                    </li>
                    <li>
                        Architected and implemented complex UI components and
                        libraries, enhancing the overall user experience.
                    </li>
                    <li>
                        Collaborated with cross-functional teams, including
                        back-end developers, designers, and product managers, to
                        deliver seamless user experiences and meet project
                        deadlines.
                    </li>
                    <li>
                        Led the migration of legacy codebases to modern React
                        and Next JS frameworks, significantly improving
                        maintainability and performance.
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Timeline;
