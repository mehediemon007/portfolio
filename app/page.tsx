import AboutMe from "./_components/AboutMe";
import Contact from "./_components/Contact";
import Hero from "./_components/Hero";
import Portfolio from "./_components/Portfolio";
import Resume from "./_components/Resume";
import Testimonial from "./_components/Testimonial";

export default function Home() {
    return (
        <div className="relative">
            <Hero/>
            <Portfolio/>
            <AboutMe/>
            <Resume/>
            <Testimonial/>
            <Contact/>
        </div>
    );
}