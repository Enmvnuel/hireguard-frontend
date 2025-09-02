function Hero() {
    return (
        <div className="px-4">
            <div className="fixed top-0 left-0 right-0 z-50 px-4">
                <nav className="flex justify-between items-center p-2.5 bg-white text-black max-w-4xl mx-auto mt-5 rounded-2xl border border-gray-200">
                    <div className="flex-shrink-0 flex items-center space-x-2 text-2xl font-semibold">
                        <img
                            src="logo.png"
                            className="h-9"
                            alt="Logo de HireGuard"
                        />
                        <span>HireGuard</span>
                    </div>
                    <ul className="hidden md:flex text-base space-x-4 text-gray-600 font-normal">
                        <li>
                            <a href="#features" className="hover:text-black">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#solutions" className="hover:text-black">
                                Solutions
                            </a>
                        </li>
                        <li>
                            <a href="#docs" className="hover:text-black">
                                Docs
                            </a>
                        </li>
                        <li>
                            <a href="#pricing" className="hover:text-black">
                                Pricing
                            </a>
                        </li>
                    </ul>
                    <ul className="hidden md:flex items-center space-x-2">
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
                    <div className="md:hidden">
                        <a
                            href="#"
                            className="border text-white border-black px-4 py-2 rounded-xl bg-black hover:bg-gray-700 transition"
                        >
                            Get Started
                        </a>
                    </div>
                </nav>
            </div>
            <section id="hero" className="pt-28 md:pt-40">
                <div className="flex flex-col items-center text-center">
                    <div className="max-w-2xl">
                        <h1 className="text-4xl md:text-6xl">
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
                                className="inline-block border text-white border-black px-5 py-2 rounded-xl bg-black hover:bg-gray-700 transition"
                            >
                                Get Started
                            </a>
                            <a
                                href="#"
                                className="inline-block border border-gray-300 px-5 py-2 rounded-xl hover:bg-gray-100 transition"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center p-4 mt-10">
                    <div className="border-[15px] border-[#f1f1f1] rounded-2xl shadow-lg">
                        <div className="border border-gray-200 rounded-lg overflow-hidden">
                            <img
                                src="assets/img/hero.png"
                                alt="Hero"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
