function Hero() {
    return (
        <>
            <nav className="flex justify-between items-center p-2.5 bg-white text-black max-w-4xl mx-auto mt-5 rounded-2xl border-1 border-gray-200 mb-8">
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
            <section id="hero">
                <div className="flex flex-col items-center text-center mt-20">
                    <div className="max-w-2xl">
                        <h1 className="text-6xl">
                            The DevEx & Application layer for Kubernetes
                        </h1>
                        <p className="text-lg my-6 text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Magnam qui accusantium laudantium tempore ad,
                            numquam nam quam harum. Id suscipit est in obcaecati
                        </p>
                        <div className="space-x-2 text-base font-medium">
                            <a
                                href="#"
                                className="border text-white border-black px-5 py-2 rounded-xl bg-black hover:bg-gray-700 transition"
                            >
                                Get Started
                            </a>
                            <a
                                href="#"
                                className="border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-100 transition"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-4 mt-10">
                    <div className="border-15 border-[#f1f1f1] rounded-2xl">
                        <img src="assets/img/hero.png" alt="Hero" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
