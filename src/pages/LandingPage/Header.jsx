import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";

/**
 * Main header component that combines navigation and hero section
 */
function Header() {
    return (
        <header>
            <Navbar />
            <HeroSection />
        </header>
    );
}

export default Header;
