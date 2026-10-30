import HeroSection from "./components/HeroSection/HeroSection";
import AudienceSection from "./components/AudienceSection/AudienceSection";
import JobGuaranteeSection from "./components/JobGuaranteeSection/JobGuaranteeSection";
import ChallengesSection from "./components/ChallengesSection/ChallengesSection";
import CreativityAISection from "./components/CreativityAISection/CreativityAISection";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import "./App.css";

export default function App() {
    return (
        <main>
            <SmoothScroll />
            <HeroSection />
            <AudienceSection />
            <JobGuaranteeSection />
            <ChallengesSection />
            <CreativityAISection />
        </main>
    );
}
