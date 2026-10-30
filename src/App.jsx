import HeroSection from "./components/HeroSection/HeroSection";
import AudienceSection from "./components/AudienceSection/AudienceSection";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import "./App.css";

export default function App() {
    return (
        <main>
            <SmoothScroll />
            <HeroSection />
            <AudienceSection />
        </main>
    );
}
