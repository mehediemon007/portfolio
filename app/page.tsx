import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
// import Testimonial from "@/components/Testimonial";

export default function Home() {
    return (
        <div className="relative">
            <Hero/>
            <Portfolio/>
            <AboutMe/>
            <Resume/>
            {/* <Testimonial/> */}
            <Contact/>
        </div>
    );
}