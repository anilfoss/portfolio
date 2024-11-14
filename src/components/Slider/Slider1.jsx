import { useRef } from "react";
import { slider1Images } from "../../data";
import IconNext from "../common/icons/IconNext";
import IconPrevious from "../common/icons/IconPrevious";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Slider1 = () => {
    const sliderRef = useRef(null);

    const handleNext = () => {
        const slides = gsap.utils.toArray(".slide");
        console.log(slides);

        document.querySelector(".inner").appendChild(slides[0]);

        // gsap.to(slides, {
        //     width: "180px",
        //     height: "240px",
        //     duration: 0.5,
        // });

        // gsap.to(slides[2], {
        //     width: "100%",
        //     duration: 1,
        // });

        // gsap.to(".slide:nth-child(2)", {
        //     width: "100%",
        //     height: "100%",
        //     duration: 0.5,
        // });
    };

    const handlePrev = () => {
        const slides = gsap.utils.toArray(".slide");
        document.querySelector(".inner").prepend(slides[slides.length - 1]);
    };

    useGSAP(
        () => {
            const prev = document.querySelector(".prev");
            const next = document.querySelector(".next");

            next.addEventListener("click", handleNext);
            prev.addEventListener("click", handlePrev);

            return () => {
                next.removeEventListener("click", handleNext);
                prev.removeEventListener("click", handlePrev);
            };
        },
        { scope: sliderRef }
    );

    return (
        <section
            ref={sliderRef}
            className="slider1 w-full h-screen overflow-hidden"
        >
            <div className="inner w-full h-full">
                {slider1Images?.map((img, index) => {
                    return (
                        <div key={index} className="slide" data={index}>
                            <figure>
                                <img src={img} alt="" loading="lazy" />
                            </figure>
                        </div>
                    );
                })}
            </div>

            <div className="arrows">
                <button className="prev">
                    <IconPrevious />
                </button>
                <button className="next">
                    <IconNext />
                </button>
            </div>
        </section>
    );
};

export default Slider1;
