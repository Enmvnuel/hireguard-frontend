import { useState } from "react";

/**
 * Navigation bar component with responsive mobile menu
 */
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 py-3 lg:py-5 bg-black/80 backdrop-blur-sm border-b-2 border-gray-800">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-white">
                <h1 className="text-white text-2xl font-semibold leading-none">
                    HireGuard
                </h1>
                <div className="hidden md:flex items-baseline flex-nowrap whitespace-nowrap space-x-8 text-base">
                    <a href="#features" className="hover:text-gray-300">
                        Product
                    </a>
                    <a href="#resources" className="hover:text-gray-300">
                        Resources
                    </a>
                    <a href="#docs" className="hover:text-gray-300">
                        Docs
                    </a>
                    <a href="#pricing" className="hover:text-gray-300">
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
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
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

export default Navbar;
