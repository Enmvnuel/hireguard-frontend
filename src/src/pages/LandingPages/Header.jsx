function Header() {
    return (
        <>
            <div className="flex justify-between items-center p-5 text-black border-b border-gray-200">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center space-x-1 text-3xl font-semibold">
                        <h1>HireGuard</h1>
                    </div>
                    <div>
                        <ul className="hidden md:flex text-lg space-x-8 font-medium justify-center items-center">
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li>
                                <a href="#">Docs</a>
                            </li>
                            <a href="#">
                                <li className="px-6 py-1 rounded-xl border-2 border-black">
                                    Login
                                </li>
                            </a>
                            <a href="#">
                                <li className="px-6 py-1.5 text-white rounded-xl  bg-black">
                                    Get Started
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>
            <section id="hero">
                <div className="container mx-auto text-center py-20 max-w-4xl">
                    <h1 className="text-7xl font-medium">
                        Import data from your users 10x faster
                    </h1>
                    <p className="text-2xl mt-6 text-gray-500">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Perferendis fugit animi doloribus eos earum
                        similique odio incidunt.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="#"
                            className="inline-block mt-8 px-9 py-3 text-white bg-black rounded-xl font-medium"
                        >
                            Get Started
                        </a>
                        <a
                            href="#"
                            className="inline-block mt-8 px-7 py-2.5  border-black border-2 rounded-xl font-medium"
                        >
                            Book a demo
                        </a>
                    </div>
                    <img
                        src="./src/assets/img/hero.png"
                        className="mt-12 mx-auto border-10 border-gray-200 rounded-2xl"
                    />
                    <div className="mt-12 space-y-2  justify-center items-center">
                        <p className="text-2xl font-bold">Backed by</p>
                        <img
                            src="./src/assets/img/ycombinator.png"
                            className="justify-center items-center mx-auto h-12"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;
