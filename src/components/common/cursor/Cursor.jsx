import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import IconDragVertical from "../icons/iconDragVertical";
import useResize from "../../../hooks/useResize";

gsap.registerPlugin(useGSAP);

const Cursor = () => {
    const cursorRef = useRef(null);
    const dragVerticalRef = useRef(null);

    const screenWidth = useResize();

    const moveCursor = (e) => {
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
        });
    };

    // set cursor location
    useGSAP(() => {
        window.addEventListener("mousemove", moveCursor);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    // resize on links
    useGSAP(() => {
        const links = gsap.utils.toArray("a");

        const resizeOnLinkEnter = () => {
            gsap.to(cursorRef.current, {
                marginTop: screenWidth > 1921 ? "-1.25vw" : "-25px",
                marginLeft: screenWidth > 1921 ? "-1.25vw" : "-25px",
                width: screenWidth > 1921 ? "2.5vw" : "50px",
                height: screenWidth > 1921 ? "2.5vw" : "50px",
            });
        };

        const resizeOnLinkLeave = () => {
            gsap.to(cursorRef.current, {
                marginTop: screenWidth > 1921 ? "-0.5vw" : "-10px",
                marginLeft: screenWidth > 1921 ? "-0.5vw" : "-10px",
                width: screenWidth > 1921 ? "1vw" : "20px",
                height: screenWidth > 1921 ? "1vw" : "20px",
            });
        };

        links.forEach((link) => {
            link.addEventListener("mouseenter", resizeOnLinkEnter);
            link.addEventListener("mouseleave", resizeOnLinkLeave);
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener("mouseenter", resizeOnLinkEnter);
                link.removeEventListener("mouseleave", resizeOnLinkLeave);
            });
        };
    }, []);

    // resize on images
    useGSAP(() => {
        const images = gsap.utils.toArray("img");

        const resizeOnImageEnter = () => {
            gsap.to(cursorRef.current, {
                backgroundColor: "rgba(255,255,255,0.7)",
                marginTop: screenWidth > 1921 ? "-1.25vw" : "-30px",
                marginLeft: screenWidth > 1921 ? "-1.25vw" : "-30px",
                width: screenWidth > 1921 ? "2.5vw" : "60px",
                height: screenWidth > 1921 ? "2.5vw" : "60px",
                mixBlendMode: "inherit",
                onUpdate: () => {
                    cursorRef.current.style.backdropFilter = "blur(3px)";
                },
            });
        };

        const resizeOnImageLeave = () => {
            gsap.to(cursorRef.current, {
                backgroundColor: "#fff",
                marginTop: screenWidth > 1921 ? "-0.5vw" : "-10px",
                marginLeft: screenWidth > 1921 ? "-0.5vw" : "-10px",
                width: screenWidth > 1921 ? "1vw" : "20px",
                height: screenWidth > 1921 ? "1vw" : "20px",
                mixBlendMode: "difference",
                onUpdate: () => {
                    cursorRef.current.style.backdropFilter = "none";
                },
            });
        };

        images.forEach((image) => {
            image.addEventListener("mouseenter", resizeOnImageEnter);
            image.addEventListener("mouseleave", resizeOnImageLeave);
        });

        return () => {
            images.forEach((image) => {
                image.removeEventListener("mouseenter", resizeOnImageEnter);
                image.removeEventListener("mouseleave", resizeOnImageLeave);
            });
        };
    }, []);

    // resize on project images
    useGSAP(() => {
        const projectImages = document.querySelector(
            ".project-wrapper .swiper-wrapper"
        );
        const projectImageText = document.querySelector(".drag-vertical");

        if (projectImages === null) return;

        const resizeOnProjectImageEnter = () => {
            gsap.to(projectImageText, {
                color: "#000",
                opacity: "1",
                transform: "scale(1)",
            });
        };

        const resizeOnProjectImageLeave = () => {
            gsap.to(projectImageText, {
                opacity: "0",
                transform: "scale(0)",
            });
        };

        projectImages.addEventListener("mouseenter", resizeOnProjectImageEnter);
        projectImages.addEventListener("mouseleave", resizeOnProjectImageLeave);

        return () => {
            projectImages.removeEventListener(
                "mouseenter",
                resizeOnProjectImageEnter
            );
            projectImages.removeEventListener(
                "mouseleave",
                resizeOnProjectImageLeave
            );
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="cursor bg-white text-center grid place-content-center -ml-2.5 -mt-2.5 w-5 h-5 3xl:w-[1vw] 3xl:h-[1vw] fixed z-[2] rounded-full pointer-events-none select-none mix-blend-difference"
        >
            <span
                ref={dragVerticalRef}
                className="drag-vertical bg-transparent leading-tight opacity-0 scale-0 pointer-events-none select-none"
            >
                <IconDragVertical />
            </span>
        </div>
    );
};

export default Cursor;
