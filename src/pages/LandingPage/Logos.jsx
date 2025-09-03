import React from "react";

function Logos() {
    return (
        <section id="logos" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-sm font-semibold text-gray-600 tracking-wider uppercase mb-10">
                    Con la confianza de las empresas líderes del sector
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-14 lg:gap-x-16">
                    <img
                        className="h-8 md:h-10 w-auto text-gray-500 hover:text-black transition-colors duration-300"
                        src="/assets/img/logos/Google.svg"
                        alt="Google"
                    />
                    <img
                        className="h-8 md:h-10 w-auto text-gray-500 hover:text-black transition-colors duration-300"
                        src="/assets/img/logos/Red_Hat.svg"
                        alt="Red Hat"
                    />
                    <img
                        className="h-7 md:h-9 w-auto text-gray-500 hover:text-black transition-colors duration-300"
                        src="/assets/img/logos/Microsoft.svg"
                        alt="Microsoft"
                    />
                    <img
                        className="h-6 md:h-8 w-auto text-gray-500 hover:text-black transition-colors duration-300"
                        src="/assets/img/logos/Amazon.svg"
                        alt="Amazon"
                    />
                    <img
                        className="h-6 md:h-8 w-auto text-gray-500 hover:text-black transition-colors duration-300"
                        src="/assets/img/logos/Meta.svg"
                        alt="Meta"
                    />
                </div>
            </div>
        </section>
    );
}

export default Logos;
