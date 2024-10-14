import { useRef, useState } from "react";
import gsap from "gsap";

const String = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const stringRef = useRef(null);

    let initialPath = "M 10 125 Q 600 125 1190 125";
    let finalPath = "M 10 125 Q 600 125 1190 125";

    const handleMouseMove = (event) => {
        const rect = stringRef.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setCoords({ x, y });

        initialPath = `M 10 125 Q ${coords.x} ${coords.y} 1190 125`;
        gsap.to("#string svg path", {
            attr: {
                d: initialPath,
            },
            duration: 1.5,
            ease: "elastic.out(1,0.1)",
        });
    };

    const handleMouseLeave = () => {
        gsap.to("#string svg path", {
            attr: {
                d: finalPath,
            },
            duration: 1.5,
            ease: "elastic.out(1,0.1)",
        });
    };

    return (
        // <section className="bg-stone-200 text-black grid place-content-center p-12">
        <div
            ref={stringRef}
            id="string"
            className="mx-auto w-full max-w-[1200px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <svg className="" width="1200" height="250">
                <path
                    d="M 10 125 Q 600 125 1190 125"
                    stroke="#000"
                    strokeWidth="5"
                    fill="transparent"
                />
            </svg>
        </div>
        // </section>
    );
};

export default String;
