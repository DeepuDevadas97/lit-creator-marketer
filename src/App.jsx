import HeroSection from "./components/HeroSection/HeroSection";
import AudienceSection from "./components/AudienceSection/AudienceSection";
import JobGuaranteeSection from "./components/JobGuaranteeSection/JobGuaranteeSection";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import "./App.css";

export default function App() {
    return (
        <main>
            <SmoothScroll />
            <HeroSection />
            <AudienceSection />
            <JobGuaranteeSection />
        </main>
    );
}
