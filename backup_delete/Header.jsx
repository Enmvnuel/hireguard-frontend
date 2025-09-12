import { useState } from "react";

const navLinks = [
    { href: "#", label: "Blog" },
    { href: "#", label: "Docs" },
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="relative">
            <div className="flex justify-between items-center p-4 lg:p-5 text-white border-b border-gray-200">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center space-x-1 text-2xl lg:text-3xl font-bold">
                        <h1>HireGuard</h1>
                    </div>

                    <button
                        className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 z-50 relative"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-5 h-0.5 bg-black transition-all duration-300 ${
                                isMenuOpen
                                    ? "rotate-45 translate-y-1.5 bg-white"
                                    : ""
                            }`}
                        ></span>
                        <span
                            className={`w-5 h-0.5 bg-black transition-all duration-300 ${
                                isMenuOpen ? "opacity-0" : ""
                            }`}
                        ></span>
                        <span
                            className={`w-5 h-0.5 bg-black transition-all duration-300 ${
                                isMenuOpen
                                    ? "-rotate-45 -translate-y-1.5 bg-white"
                                    : ""
                            }`}
                        ></span>
                    </button>

                    <nav className="hidden md:block">
                        <ul className="flex text-base lg:text-lg space-x-4 lg:space-x-8 font-medium justify-center items-center">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="hover:text-gray-600 transition-colors duration-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="#"
                                    className="px-4 lg:px-6 py-1 rounded-xl border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
                                >
                                    Login
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="px-4 lg:px-6 py-2 text-white rounded-xl bg-black hover:bg-gray-800 transition-all duration-200"
                                >
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div
                className={`fixed inset-0 bg-black/40 backdrop-blur-md transition-all duration-500 md:hidden z-40 ${
                    isMenuOpen ? "" : "opacity-0 invisible"
                }`}
                onClick={toggleMenu}
            >
                <div className="flex items-center justify-center min-h-screen p-4">
                    <nav
                        className="text-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ul className="space-y-8">
                            {navLinks.map((link, index) => (
                                <li
                                    key={link.label}
                                    className={`transform transition-all duration-700 ${
                                        isMenuOpen
                                            ? "translate-y-0 opacity-100"
                                            : "translate-y-10 opacity-0"
                                    }`}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <a
                                        href={link.href}
                                        className="block text-4xl font-medium text-white hover:text-gray-300 transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li
                                className={`transform transition-all duration-700 ${
                                    isMenuOpen
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: `${
                                        navLinks.length * 100
                                    }ms`,
                                }}
                            >
                                <a
                                    href="#"
                                    className="block text-4xl font-medium text-white hover:text-gray-300 transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Login
                                </a>
                            </li>
                            <li
                                className={`transform transition-all duration-700 ${
                                    isMenuOpen
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-10 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: `${
                                        (navLinks.length + 1) * 100
                                    }ms`,
                                }}
                            >
                                <a
                                    href="#"
                                    className="block text-4xl font-medium text-white hover:text-gray-300 transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Get Started
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

function HeroSection() {
    return <section id="hero"></section>;
}

function Header() {
    return (
        <div className="relative min-h-screen">
            <Navbar />
            <HeroSection />
        </div>
    );
}

export default Header;
