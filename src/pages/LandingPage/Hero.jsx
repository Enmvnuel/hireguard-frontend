import React from "react";

function Hero() {
    return (
        <>
            <nav className="flex justify-between items-center p-2.5 bg-white text-black max-w-4xl mx-auto mt-5 rounded-2xl border-1 border-gray-300 mb-8">
                <div className="flex space-x-2 text-2xl font-semibold">
                    <img src="logo.png" className="h-9" alt="Logo" />
                    HireGuard
                </div>
                <ul className="text-base flex space-x-4 text-gray-600 font-normal">
                    <li>
                        <a href="#features">Features</a>
                    </li>
                    <li>
                        <a href="#pricing">Pricing</a>
                    </li>
                    <li>
                        <a href="#docs">Docs</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <ul className="flex space-x-2">
                    <li>
                        <a
                            href="#"
                            className="border border-gray-300 px-3 py-2 rounded-xl hover:bg-black hover:text-white transition"
                        >
                            Sign In
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="border text-white border-black px-4 py-2 rounded-xl bg-black hover:bg-gray-700 transition"
                        >
                            Get Started
                        </a>
                    </li>
                </ul>
            </nav>
            <section>
                <h1>Welcome to Our Website</h1>
                <p>Your journey to a better experience starts here.</p>
            </section>
        </>
    );
}

export default Hero;
