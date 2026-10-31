import HeroSection from "./components/HeroSection/HeroSection";
import AudienceSection from "./components/AudienceSection/AudienceSection";
import JobGuaranteeSection from "./components/JobGuaranteeSection/JobGuaranteeSection";
import ChallengesSection from "./components/ChallengesSection/ChallengesSection";
import CreativityAISection from "./components/CreativityAISection/CreativityAISection";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import "./App.css";
import Testimonials2 from "./components/Testimonials2/Testimonials2";
import LifeAtLitSection from "./components/LifeAtLitSection/LifeAtLitSection";
import RolesSection from "./components/RolesSection/RolesSection";
import ScholarshipsSection from "./components/ScholarshipsSection/ScholarshipsSection";

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
            <RolesSection />
            <LifeAtLitSection />
            <ScholarshipsSection />
        </main>
    );
}
