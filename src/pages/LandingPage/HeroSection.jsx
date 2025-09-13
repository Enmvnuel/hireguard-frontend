import Customers from "../../common/Customers.jsx";

/**
 * Hero section component with main heading, description, and call-to-action buttons
 */
function HeroSection() {
    return (
        <section id="hero" className="pt-28 pb-16 md:pt-32 md:pb-24 px-4">
            <div className="container mx-auto text-center max-w-4xl">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium text-white">
                    Ready-made AI copilots and collaboration for your
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mt-6 text-[#b7b4b4]">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis fugit animi doloribus eos earum similique odio
                    incidunt.
                </p>

                <div className="flex flex-row flex-wrap justify-center items-center gap-3 mt-8">
                    <a
                        href="#"
                        className="inline-block px-6 py-3 min-w-[120px] text-black bg-white rounded-xl font-medium text-center hover:bg-gray-100 transition-colors"
                        aria-label="Get started with HireGuard"
                    >
                        Get Started
                    </a>
                    <a
                        href="#"
                        className="inline-block px-6 py-3 min-w-[120px] text-white bg-black rounded-xl font-medium text-center hover:bg-gray-800 transition-colors"
                        aria-label="Book a demo of HireGuard"
                    >
                        Book a demo
                    </a>
                </div>
            </div>
            <img
                src="https://liveblocks.io/_next/image?url=%2Fimages%2Fhomepage%2Fbackground-optimized.jpg&w=1920&q=90"
                alt="HireGuard product preview showcasing AI collaboration features"
                className="mt-12 mx-auto rounded-2xl max-w-7xl w-full"
                loading="lazy"
            />
            <Customers />
        </section>
    );
}

export default HeroSection;
