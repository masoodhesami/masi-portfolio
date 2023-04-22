'use client'


import React from "react";
export default function Navbar({}) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between py-3 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <button
                            className="text-black bg-rose-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars">x</i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto md:font-medium">
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center font-light text-md leading-snug text-black hover:opacity-75 underline decoration-2 underline-offset-8"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center font-light text-md leading-snug opacity-60 hover:opacity-80"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Portfolio</span>
                                </a>
                            </li>
                            <li className="nav-item">
                            <a
                                    className="px-3 py-2 flex items-center font-light text-md leading-snug opacity-60 hover:opacity-80"
                                    href="#pablo"
                                >
                                    <span className="ml-2">About</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className="px-3 py-2 flex items-center font-light text-md leading-snug opacity-60  hover:opacity-80"
                                    href="#pablo"
                                >
                                    <span className="ml-2">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}