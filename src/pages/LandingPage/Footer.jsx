function Footer() {
    return (
        <footer className="py-8 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="flex items-center gap-2">
                        <img
                            src="/src/assets/img/logo.png"
                            alt="HireGuard"
                            className="w-9 h-8"
                        />
                        <h1 className="text-2xl font-semibold text-center md:text-left">
                            HireGuard
                        </h1>
                    </div>

                    <p className="text-gray-400 text-sm text-center order-last md:order-none">
                        &copy; {new Date().getFullYear()} HireGuard. All rights
                        reserved.
                    </p>

                    <ul className="flex items-center gap-1">
                        <li>
                            <a
                                href="https://github.com/hireguard"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-full p-2 text-gray-400 hover:text-white focus:text-white transition-colors"
                                aria-label="GitHub"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 1.667A8.333 8.333 0 0 0 1.667 10c0 3.683 2.391 6.808 5.7 7.917.416.066.55-.192.55-.417v-1.408c-2.309.5-2.8-1.117-2.8-1.117-.384-.967-.925-1.225-.925-1.225-.759-.517.058-.5.058-.5.833.058 1.275.858 1.275.858.725 1.267 1.95.892 2.425.692.075-.542.292-.908.525-1.117-1.85-.208-3.792-.925-3.792-4.1 0-.925.317-1.666.859-2.258-.084-.208-.375-1.075.083-2.2 0 0 .7-.225 2.292.85A7.851 7.851 0 0 1 10 5.7c.708 0 1.425.092 2.083.275 1.592-1.075 2.292-.85 2.292-.85.458 1.125.167 1.992.083 2.2.542.592.859 1.333.859 2.258 0 3.184-1.95 3.884-3.809 4.092.3.258.575.767.575 1.542V17.5c0 .225.134.492.559.417C15.95 16.8 18.333 13.683 18.333 10A8.333 8.333 0 0 0 10 1.667Z" />
                                </svg>
                                <span className="sr-only">GitHub</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/company/hireguard"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-full p-2 text-gray-400 hover:text-white focus:text-white transition-colors"
                                aria-label="LinkedIn"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current"
                                >
                                    <path d="M15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333ZM15.4167 15.4167V11C15.4167 10.2795 15.1304 9.5885 14.621 9.07903C14.1115 8.56955 13.4205 8.28333 12.7 8.28333C11.9917 8.28333 11.1667 8.71667 10.7667 9.36667V8.44167H8.44167V15.4167H10.7667V11.3083C10.7667 10.6667 11.2833 10.1417 11.925 10.1417C12.2344 10.1417 12.5312 10.2646 12.75 10.4834C12.9688 10.7022 13.0917 10.9989 13.0917 11.3083V15.4167H15.4167ZM5.73333 7.13333C6.10464 7.13333 6.46073 6.98583 6.72328 6.72328C6.98583 6.46073 7.13333 6.10464 7.13333 5.73333C7.13333 4.95833 6.50833 4.325 5.73333 4.325C5.35982 4.325 5.0016 4.47338 4.73749 4.73749C4.47338 5.0016 4.325 5.35982 4.325 5.73333C4.325 6.50833 4.95833 7.13333 5.73333 7.13333V7.13333ZM6.89167 15.4167V8.44167H4.58333V15.4167H6.89167V15.4167Z" />
                                </svg>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.youtube.com/@hireguard"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-full p-2 text-gray-400 hover:text-white focus:text-white transition-colors"
                                aria-label="YouTube"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="fill-current"
                                >
                                    <path d="M19.5788 5.18568C19.465 4.76286 19.2421 4.37734 18.9325 4.06772C18.6229 3.7581 18.2373 3.53523 17.8145 3.42142C16.2574 3 10.0004 3 10.0004 3C10.0004 3 3.74333 3 2.18621 3.42142C1.76339 3.53523 1.37788 3.7581 1.06826 4.06772C0.758637 4.37734 0.535769 4.76286 0.421959 5.18568C0.131211 6.7737 -0.00988161 8.3855 0.000537445 9.99988C-0.00988161 11.6143 0.131211 13.2261 0.421959 14.8141C0.535769 15.2369 0.758637 15.6224 1.06826 15.932C1.37788 16.2417 1.76339 16.4645 2.18621 16.5783C3.74333 16.9998 10.0004 16.9998 10.0004 16.9998C10.0004 16.9998 16.2574 16.9998 17.8145 16.5783C18.2373 16.4645 18.6229 16.2417 18.9325 15.932C19.2421 15.6224 19.465 15.2369 19.5788 14.8141C19.8695 13.2261 20.0106 11.6143 20.0002 9.99988C20.0106 8.3855 19.8695 6.7737 19.5788 5.18568V5.18568ZM8.0004 12.9998V6.99993L13.1932 9.99988L8.0004 12.9998Z" />
                                </svg>
                                <span className="sr-only">YouTube</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
