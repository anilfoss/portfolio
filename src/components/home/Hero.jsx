import { useRef } from "react";
import IconDown from "../common/icons/IconDown";
import RoundText from "./RoundText";
import { Link } from "react-router-dom";
import CurrentTime from "../common/CurrentTime";
import CurrentDay from "../common/CurrentDay";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
    name,
    subTitle,
    linkData,
    ResumeLink,
    subTitleWord,
    ImgAnil,
} from "../../data";

gsap.registerPlugin(useGSAP);

const Hero = () => {
    const heroRef = useRef(null);

    useGSAP(() => {
        const links = gsap.utils.toArray(".box-3 .box-3-1 .link");

        // box 1
        gsap.to(".box-1", {
            top: 0,
            duration: 1,
            delay: 0,
        });

        gsap.from(".box-1 h1 span", {
            y: 50,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            delay: 1,
            ease: "back.out(3)",
        });

        // box 2
        gsap.to(".box-2", {
            top: 0,
            duration: 1,
            delay: 0,
        });

        gsap.from(".box-2 span", {
            opacity: 0,
            x: 30,
            stagger: 0.3,
            duration: 1,
            delay: 1,
        });

        // box 3
        gsap.to(".box-3", {
            top: 0,
            zIndex: 0,
            duration: 1,
            delay: 1,
        });

        gsap.from(links, {
            opacity: 0,
            marginLeft: 30,
            stagger: 0.2,
            duration: 1,
            delay: 2,
        });

        gsap.from(".box-3 .box-3-2 a", {
            width: 0,
            duration: 1,
            delay: 3,
        });

        // box 4
        gsap.to(".box-4", {
            top: 0,
            zIndex: 0,
            duration: 1,
            delay: 2,
        });

        gsap.to(".box-4 .round-text", {
            filter: "invert(0)",
            position: "static",
            top: "50%",
            left: "50%",
            transform: "translate(0%, 0%)",
            scale: 0.9,
            opacity: 1,
            duration: 1,
            delay: 0.8,
        });

        // box 5
        gsap.to(".box-5", {
            right: 0,
            duration: 1,
            delay: 3,
        });

        // box 6
        gsap.to(".box-6", {
            right: 0,
            duration: 1,
            delay: 2,
        });

        // box 7
        gsap.to(".box-7", {
            top: 0,
            duration: 1,
            delay: 2,
        });

        gsap.from(".box-7 h3 span", {
            x: -15,
            // y: 20,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            delay: 2,
            ease: "power2.out",
        });

        // box 8
        gsap.to(".box-8", {
            top: 0,
            duration: 1,
            delay: 1,
        });

        // box 9
        gsap.to(".box-9", {
            right: 0,
            duration: 1,
            delay: 2,
        });
    }, []);

    const linksRef = useRef([]);
    const linkSpanNormalRef = useRef([]);
    const linkSpanHoverRef = useRef([]);

    useGSAP(() => {
        const newLinks = document.querySelectorAll(".link");
        const newLinkSpanNormal = gsap.utils.toArray(linkSpanNormalRef.current);
        const newLinkSpanHover = gsap.utils.toArray(linkSpanHoverRef.current);

        const handleMouseEnter = (index) => {
            gsap.to(newLinkSpanNormal[index], {
                top: "-50px",
            });
            gsap.to(newLinkSpanHover[index], {
                top: "0%",
            });
        };

        const handleMouseLeave = (index) => {
            gsap.to(newLinkSpanNormal[index], {
                top: "0px",
            });
            gsap.to(newLinkSpanHover[index], {
                top: "100%",
            });
        };

        newLinks.forEach((link, index) => {
            link.addEventListener("mouseenter", () => handleMouseEnter(index));
            link.addEventListener("mouseleave", () => handleMouseLeave(index));
        });

        return () => {
            newLinks.forEach((link, index) => {
                link.removeEventListener("mouseenter", () =>
                    handleMouseEnter(index)
                );
                link.removeEventListener("mouseleave", () =>
                    handleMouseLeave(index)
                );
            });
        };
    }, []);

    return (
        <section ref={heroRef} className="hero-section">
            <div className="box box-1">
                <h1>
                    {name?.split("").map((letter, index) => {
                        return <span key={index}>{letter}</span>;
                    })}
                </h1>
            </div>
            <div className="box box-2">
                <CurrentDay />
                <CurrentTime />
                <span>Mohali, Punjab</span>
            </div>
            <div className="box box-3">
                <div className="box-3-1">
                    {linkData?.map((link, index) => {
                        return (
                            <Link
                                key={index}
                                ref={(el) => (linksRef.current[index] = el)}
                                to={
                                    link?.text === "Contact"
                                        ? `tel:${link?.link}`
                                        : link?.text === "Email"
                                        ? `mailto:${link?.link}`
                                        : link?.link
                                }
                                target={link?.externalLink ? "_blank" : "_self"}
                                className="link block w-full relative overflow-hidden"
                            >
                                <span
                                    ref={(el) =>
                                        (linkSpanNormalRef.current[index] = el)
                                    }
                                    className="normal-text relative top-0"
                                >
                                    {link?.text}
                                </span>
                                <span
                                    ref={(el) =>
                                        (linkSpanHoverRef.current[index] = el)
                                    }
                                    className="hover-text whitespace-nowrap absolute top-full left-0"
                                >
                                    {link?.hoverText}
                                </span>
                            </Link>
                        );
                    })}
                </div>
                <div className="box-3-2">
                    <Link to={ResumeLink} target="_blank">
                        <span className="flex items-center gap-3">
                            DOWNLOAD RESUME{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="#fff"
                                className="rotate-90"
                            >
                                <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                                <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className="box-3-3"></div>
            </div>
            <div className="box box-4">
                <div className="round-text">
                    <RoundText />
                </div>
            </div>
            <div className="box box-5">
                <img
                    src={ImgAnil}
                    alt="Anil Kumar"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="box box-6">{/* 6 */}</div>
            <div className="box box-7">
                <h3 className="text-5xl text-stone-900 font-bold text-center flex flex-wrap">
                    {subTitle?.split("").map((letter, index) => {
                        return (
                            <span
                                key={index}
                                className={letter === " " ? "px-1" : null}
                            >
                                {letter}
                            </span>
                        );
                    })}
                    <span className="px-1"></span>
                    {subTitleWord?.split("").map((letter, index) => {
                        return (
                            <span
                                key={index}
                                className="font-sans text-6xl text-black font-bold"
                            >
                                {letter}
                            </span>
                        );
                    })}
                </h3>
            </div>
            <div className="box box-8">
                <IconDown />
            </div>
            <div className="box box-9">{/* 9 */}</div>
        </section>
    );
};

export default Hero;
