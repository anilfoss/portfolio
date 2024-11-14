import AboutMe from "../components/home/AboutMe";
import Experience from "../components/home/Experience";
import Hero from "../components/home/Hero";
import Marquee2 from "../components/home/Marquee2";
import Projects from "../components/home/Projects";
import ThankYou from "../components/home/ThankYou";
import Skills from "../components/home/Skills";

const Home = () => {
    return (
        <>
            <Hero />
            <Marquee2 />
            <AboutMe />
            <Skills />
            <Projects />
            <Experience />
            <ThankYou />
        </>
    );
};

export default Home;
