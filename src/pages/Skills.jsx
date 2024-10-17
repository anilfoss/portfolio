import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Skills = () => {
    useGSAP(() => {
        let tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".skills",
                start: "top 50%",
                end: "top 0%",
                // markers: true,
                scrub: 1,
                ease: "power3.out",
            },
        });

        tl2.from(".skills .heading h2", {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0,
            ease: "power1.inOut",
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
        <section className="skills">
            <div className="heading">
                <h2>
                    Expertise <span>&#129492;</span>
                </h2>
            </div>

            <div className="skill-wrapper">
                <div className="skill skill-react">
                    <span>React JS</span>
                </div>
                <div className="skill skill-next">
                    <span>Next JS</span>
                </div>
                <div className={`skill skill-javascript`}>
                    <span>Javascript</span>
                </div>
                <div className="skill skill-typescript">
                    <span>Typescript</span>
                </div>
                <div className="skill skill-redux">
                    <span>Redux Toolkit</span>
                </div>
                <div className="skill skill-nextui">
                    <span>Next UI</span>
                </div>
                <div className="skill skill-material">
                    <span>Material UI</span>
                </div>
                <div className="skill skill-tailwind">
                    <span>Tailwind</span>
                </div>
                <div className="skill skill-bootstrap">
                    <span>Bootstrap</span>
                </div>
                <div className="skill skill-strapi">
                    <span>Strapi</span>
                </div>
                <div className="skill skill-prestashop">
                    <span>Prestashop</span>
                </div>
                <div className="skill skill-wordpress">
                    <span>Wordpress</span>
                </div>
                <div className="skill skill-shopify">
                    <span>Shopify</span>
                </div>
                <div className="skill skill-squarespace">
                    <span>Squarespace</span>
                </div>
                <div className="skill skill-webflow">
                    <span>Webflow</span>
                </div>
                <div className="skill skill-divi">
                    <span>Divi</span>
                </div>
                <div className="skill skill-elementor">
                    <span>Elementor</span>
                </div>
                <div className="skill skill-vc">
                    <span>Visual Composer</span>
                </div>
                <div className="skill skill-html">
                    <span>Html</span>
                </div>
                <div className="skill skill-css">
                    <span>Css</span>
                </div>
                <div className="skill skill-photoshop">
                    <span>Photoshop</span>
                </div>
                <div className="skill skill-figma">
                    <span>Figma</span>
                </div>
                <div className="skill skill-zoho">
                    <span>Zoho</span>
                </div>
                <div className="skill skill-clickup">
                    <span>clickUp</span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
