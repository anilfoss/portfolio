import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import IconDragVertical from "../icons/iconDragVertical";

gsap.registerPlugin(useGSAP);

const Cursor = () => {
    const cursorRef = useRef(null);
    const dragVerticalRef = useRef(null);

    const moveCursor = (e) => {
        gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.5,
        });
    };

    // set cursor location
    useGSAP(() => {
        gsap.set(cursorRef, {
            xPercent: 100,
            yPercent: 100,
        });

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
                marginTop: "-25px",
                marginLeft: "-25px",
                width: "50px",
                height: "50px",
            });
        };

        const resizeOnLinkLeave = () => {
            gsap.to(cursorRef.current, {
                marginTop: "-10px",
                marginLeft: "-10px",
                width: "20px",
                height: "20px",
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
                marginTop: "-30px",
                marginLeft: "-30px",
                width: "60px",
                height: "60px",
                mixBlendMode: "inherit",
                backdropFilter: "blur(3px)",
            });
        };

        const resizeOnImageLeave = () => {
            gsap.to(cursorRef.current, {
                backgroundColor: "#fff",
                marginTop: "-10px",
                marginLeft: "-10px",
                width: "20px",
                height: "20px",
                mixBlendMode: "difference",
                backdropFilter: "none",
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
            className="cursor bg-white text-center grid place-content-center -ml-2.5 -mt-2.5 w-5 h-5 fixed z-[2] rounded-full pointer-events-none select-none mix-blend-difference"
        >
            <span
                ref={dragVerticalRef}
                className="drag-vertical bg-transparent text-[80%] leading-tight opacity-0 scale-0 pointer-events-none select-none"
            >
                <IconDragVertical />
            </span>
        </div>
    );
};

export default Cursor;
