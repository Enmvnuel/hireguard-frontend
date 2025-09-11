import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-3 lg:py-7 bg-black/80 backdrop-blur-sm border-b-2 border-gray-800">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center text-white">
                {/* Logo */}
                <h1 className="text-white text-2xl font-semibold leading-none">
                    HireGuard
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-baseline flex-nowrap whitespace-nowrap space-x-8 text-base">
                    <a
                        href="#features"
                        className="font-medium hover:text-gray-300"
                    >
                        Product
                    </a>
                    <a
                        href="#resources"
                        className="font-medium hover:text-gray-300"
                    >
                        Resources
                    </a>
                    <a href="#docs" className="font-medium hover:text-gray-300">
                        Docs
                    </a>
                    <a
                        href="#pricing"
                        className="font-medium hover:text-gray-300"
                    >
                        Pricing
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <a
                        href="#login"
                        className="mx-2 font-medium hover:text-gray-300"
                    >
                        Sign In
                    </a>
                    <a
                        href="#signup"
                        className="group relative inline-flex appearance-none items-center justify-center bg-[#fdfcfc21] rounded-md px-3.5 h-9 font-medium text-white hover:bg-[#fdfcfc36] focus:outline-none focus:ring-2 focus:ring-[#fdfcfc36] focus:ring-offset-2 transition-colors"
                    >
                        Get Started
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Open Menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16m-7 6h7"
                                }
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 px-4 pb-4">
                    <div className="flex flex-col space-y-4 text-white">
                        <a href="#features" className="font-medium">
                            Product
                        </a>
                        <a href="#resources" className="font-medium">
                            Resources
                        </a>
                        <a href="#docs" className="font-medium">
                            Docs
                        </a>
                        <a href="#pricing" className="font-medium">
                            Pricing
                        </a>
                        <hr className="border-gray-700" />
                        <a href="#login" className="font-medium">
                            Sign In
                        </a>
                        <a
                            href="#signup"
                            className="text-center bg-[#fdfcfc21] rounded-md py-2 font-medium text-white hover:bg-[#fdfcfc36] transition-colors"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

function HeroSection() {
    return (
        <section id="hero">
            <div className="container mx-auto text-center pt-28 pb-16 md:pt-32 md:pb-24 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white">
                        Ready-made AI copilots and collaboration for your
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-6 text-[#b7b4b4]">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Perferendis fugit animi doloribus eos earum
                        similique odio incidunt.
                    </p>

                    <div className="flex flex-row flex-wrap justify-center items-center gap-3 mt-8">
                        <a
                            href="#"
                            className="inline-block px-6 py-3 min-w-[120px] text-black bg-white rounded-xl font-medium text-center"
                        >
                            Get Started
                        </a>
                        <a
                            href="#"
                            className="inline-block px-6 py-3 min-w-[120px] text-white bg-black rounded-xl font-medium text-center"
                        >
                            Book a demo
                        </a>
                    </div>
                </div>
                <img
                    src="https://liveblocks.io/_next/image?url=%2Fimages%2Fhomepage%2Fbackground-optimized.jpg&w=1920&q=90"
                    alt="Product preview"
                    className="mt-12 mx-auto rounded-2xl max-w-6xl w-full"
                />
            </div>
        </section>
    );
}

function Header() {
    return (
        <div className="relative min-h-screen bg-[#0b0b0f]">
            <Navbar />
            <HeroSection />
        </div>
    );
}

export default Header;
