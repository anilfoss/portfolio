import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Skills = () => {
    useGSAP(() => {
        let tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills .heading",
                start: "50% 50%",
                end: "50% 50%",
                // markers: true,
                scrub: 1,
                ease: "power2.out",
            },
        });

        tl1.from(".skills .heading h2", {
            y: 50,
            opacity: 0,
            duration: 10,
            delay: 5,
        });
    }, []);

    useGSAP(() => {
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills",
                start: "50% 50%",
                end: "100% 50%",
                // markers: true,
                pin: true,
                scrub: 1,
                ease: "power2.out",
            },
        });

        tl2.to(".skill-javascript", {
            scale: 1,
            top: 0,
            opacity: 1,
            filter: "blur(0px)",
        })
            .to(".skill-strapi", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-wordpress", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-html", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-react", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-photoshop", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-zoho", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-redux", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-tailwind", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-figma", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-squarespace", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-elementor", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-vc", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-divi", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-next", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-material", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-webflow", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-bootstrap", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-css", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-typescript", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-nextui", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-prestashop", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-shopify", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            })
            .to(".skill-clickup", {
                scale: 1,
                top: 0,
                opacity: 1,
                filter: "blur(0px)",
                delay: -0.3,
            });
    }, []);

    return (
        <section className="skills flex flex-wrap justify-center content-center flex-col gap-24 p-24 min-h-screen">
            <div className="heading -mt-8 w-full">
                <h2 className="font-sans text-white text-7xl font-bold text-center uppercase tracking-widest leading-normal">
                    Expertise{" "}
                    <span className="text-6xl relative -top-1">&#129492;</span>
                </h2>
            </div>

            <div className="text-xl flex flex-wrap justify-center content-center gap-8 mx-auto w-full max-w-6xl">
                <div className="skill skill-react bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        React JS
                    </span>
                </div>
                <div className="skill skill-next bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Next JS
                    </span>
                </div>
                <div
                    className={`skill skill-javascript bg-white opacity-0 blur-2xl scale-90 relative top-12`}
                >
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Javascript
                    </span>
                </div>
                <div className="skill skill-typescript bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Typescript
                    </span>
                </div>
                <div className="skill skill-redux bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Redux Toolkit
                    </span>
                </div>
                <div className="skill skill-nextui bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Next UI
                    </span>
                </div>
                <div className="skill skill-material bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Material UI
                    </span>
                </div>
                <div className="skill skill-tailwind bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Tailwind
                    </span>
                </div>
                <div className="skill skill-bootstrap bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Bootstrap
                    </span>
                </div>
                <div className="skill skill-strapi bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Strapi
                    </span>
                </div>
                <div className="skill skill-prestashop bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Prestashop
                    </span>
                </div>
                <div className="skill skill-wordpress bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Wordpress
                    </span>
                </div>
                <div className="skill skill-shopify bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Shopify
                    </span>
                </div>
                <div className="skill skill-squarespace bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Squarespace
                    </span>
                </div>
                <div className="skill skill-webflow bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Webflow
                    </span>
                </div>
                <div className="skill skill-divi bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Divi
                    </span>
                </div>
                <div className="skill skill-elementor bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Elementor
                    </span>
                </div>
                <div className="skill skill-vc bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Visual Composer
                    </span>
                </div>
                <div className="skill skill-html bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Html
                    </span>
                </div>
                <div className="skill skill-css bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Css
                    </span>
                </div>
                <div className="skill skill-photoshop bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Photoshop
                    </span>
                </div>
                <div className="skill skill-figma bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Figma
                    </span>
                </div>
                <div className="skill skill-zoho bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        Zoho
                    </span>
                </div>
                <div className="skill skill-clickup bg-white opacity-0 blur-2xl scale-90 relative top-12">
                    <span className="bg-black uppercase block px-14 pt-2 pb-3 border-2 border-white origin-top-left rotate-0 hover:-rotate-2 transition-all">
                        clickUp
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
