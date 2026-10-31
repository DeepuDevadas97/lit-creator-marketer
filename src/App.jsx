import HeroSection from "./components/HeroSection/HeroSection";
import AudienceSection from "./components/AudienceSection/AudienceSection";
import JobGuaranteeSection from "./components/JobGuaranteeSection/JobGuaranteeSection";
import ChallengesSection from "./components/ChallengesSection/ChallengesSection";
import CreativityAISection from "./components/CreativityAISection/CreativityAISection";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import "./App.css";
import Testimonials2 from "./components/Testimonials2/Testimonials2";
import LifeAtLitSection from "./components/LifeAtLitSection/LifeAtLitSection";

export default function App() {
    return (
        <main>
            <SmoothScroll />
            <HeroSection />
            <AudienceSection />
            <JobGuaranteeSection />
            <ChallengesSection />
            <CreativityAISection />
            <Testimonials2 />
            <LifeAtLitSection/>
        </main>
    );
}
