import HeroSection from "./components/HeroSection/HeroSection";
import AudienceSection from "./components/AudienceSection/AudienceSection";
import JobGuaranteeSection from "./components/JobGuaranteeSection/JobGuaranteeSection";
import ChallengesSection from "./components/ChallengesSection/ChallengesSection";
import ContactSection from "./components/ContactSection/ContactSection";
import CreativityAISection from "./components/CreativityAISection/CreativityAISection";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import "./App.css";
import Testimonials2 from "./components/Testimonials2/Testimonials2";
import LifeAtLitSection from "./components/LifeAtLitSection/LifeAtLitSection";
import RolesSection from "./components/RolesSection/RolesSection";
import ScholarshipsSection from "./components/ScholarshipsSection/ScholarshipsSection";
import BrandPromiseSection from "./components/BrandPromiseSection/BrandPromiseSection";
import PlacementOutcomesSection from "./components/PlacementOutcomesSection/PlacementOutcomesSection";
import FaqSection from "./components/FaqSection/FaqSection";
import NextChallengeSection from "./components/NextChallengeSection/NextChallengeSection";

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
            <BrandPromiseSection />
            <PlacementOutcomesSection />
            <FaqSection />
            <NextChallengeSection />
             <ContactSection />
        </main>
    );
}
