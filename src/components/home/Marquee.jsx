// import gsap from "gsap";
// import { useEffect, useState } from "react";

// const Marquee = () => {
//     const [lastScrollY, setLastScrollY] = useState(0);
//     const [newScrollY, setNewScrollY] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setLastScrollY(newScrollY);
//             setNewScrollY(window.scrollY);

//             if (newScrollY > lastScrollY) {
//                 gsap.to(".marquee-wrapper span", {
//                     transform: "translateX(-200%)",
//                     repeat: -1,
//                     duration: 4,
//                     ease: "none",
//                 });
//             } else {
//                 gsap.to(".marquee-wrapper span", {
//                     transform: "translateX(0%)",
//                     repeat: -1,
//                     duration: 4,
//                     ease: "none",
//                 });
//             }
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, [newScrollY, lastScrollY]);

//     console.log("lastScrollY = ", lastScrollY);
//     console.log("newScrollY = ", newScrollY);

//     return (
//         <>
//             <section className="h-screen"></section>

//             <section className="marquee-wrapper text-8xl uppercase flex items-center gap-10 px-12 pt-5 pb-9">
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//                 <span className="whitespace-nowrap -translate-x-full">
//                     Portfolio
//                 </span>
//             </section>

//             <section className="h-screen"></section>
//         </>
//     );
// };

// export default Marquee;

// ============================================

import gsap from "gsap";
import { useEffect } from "react";

const Marquee = () => {
    // let random = gsap.utils.random(-100, 100, 50);
    // console.log("random = ", random);

    // let clamp = gsap.utils.clamp(0, 100);
    // console.log("clamp = ", clamp(80));

    const marqueeScroll = (dets) => {
        if (dets.deltaY > 0) {
            gsap.to(".marquee-wrapper span", {
                transform: "translateX(-200%)",
                repeat: -1,
                duration: 4,
                ease: "linear",
            });
        } else {
            gsap.to(".marquee-wrapper span", {
                transform: "translateX(0%)",
                repeat: -1,
                duration: 4,
                ease: "linear",
            });
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", marqueeScroll);

        return () => {
            window.removeEventListener("wheel", marqueeScroll);
        };
    }, []);

    return (
        <section className="marquee-wrapper text-8xl text-stone-200 uppercase flex items-center gap-10 px-12 pt-5 pb-9">
            <span className="whitespace-nowrap -translate-x-full">
                Frontend Developer
            </span>
            <span className="whitespace-nowrap -translate-x-full">
                Frontend Developer
            </span>
            <span className="whitespace-nowrap -translate-x-full">
                Frontend Developer
            </span>
            <span className="whitespace-nowrap -translate-x-full">
                Frontend Developer
            </span>
            <span className="whitespace-nowrap -translate-x-full">
                Frontend Developer
            </span>
            <span className="whitespace-nowrap -translate-x-full">
                Frontend Developer
            </span>
            <span className="whitespace-nowrap -translate-x-full">
                Frontend Developer
            </span>
            <span className="whitespace-nowrap -translate-x-full">
                Frontend Developer
            </span>
        </section>
        // <section className="marquee-wrapper text-8xl text-stone-200 uppercase flex items-center gap-10 px-12 pt-5 pb-9">
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        //     <span className="whitespace-nowrap -translate-x-full">
        //         Portfolio
        //     </span>
        // </section>
    );
};

export default Marquee;
