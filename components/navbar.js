import Link from "next/link";
import { useState } from "react";

export default function Navbar({}) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <nav className="bg-[#0E172A] drop-shadow fixed top-0 left-0 right-0">
            <div className="mx-auto max-w-5xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">

                    {/* Mobile menu button */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none" aria-controls="mobile-menu" aria-expanded="false"
                            onClick={() => setShowMobileMenu(!showMobileMenu)}>
                            <span className="sr-only">Open main menu</span>
                            {showMobileMenu ? 
                                // Icon when menu is open: outline/x-mark (Heroicon)
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                :
                                // Icon when menu is closed: outline/bars-3 (Heroicon)
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            }
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        {/* <div className="flex flex-shrink-0 items-center">
                            <a href="/">
                                <img className="block h-8 w-auto lg:hidden" src="https://cdn-icons-png.flaticon.com/512/30/30544.png?w=740&t=st=1663368767~exp=1663369367~hmac=0f807197ac988f558cbc7d2f448bf8ccf6991f698ff6514ffec21cc5e6eb0471" alt="Jason Chen" />
                            </a>
                            <a href="/">
                                <img className="hidden h-8 w-auto lg:block" src="https://cdn-icons-png.flaticon.com/512/30/30544.png?w=740&t=st=1663368767~exp=1663369367~hmac=0f807197ac988f558cbc7d2f448bf8ccf6991f698ff6514ffec21cc5e6eb0471" alt="Jason Chen" />
                            </a>
                        </div> */}
                    </div>
                    
                    {/* Nav Links */}
                    <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden sm:block">
                            <div className="flex gap-3">
                                <Link href="/">
                                    <button className="hover:underline px-3 py-2 rounded-md">Home</button>
                                </Link>
                                <Link href="#about" scroll={false}>
                                    <button className="hover:underline px-3 py-2 rounded-md">About</button>
                                </Link>
                                <Link href="#projects" scroll={false}>
                                    <button className="hover:underline px-3 py-2 rounded-md">Projects</button>
                                </Link>
                                <Link href="#contact" scroll={false}>
                                    <button className="hover:underline px-3 py-2 rounded-md">Contact</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
                        
            {showMobileMenu ? 
                // Mobile Menu
                <div className="sm:hidden fixed w-48 h-screen bg-[#0E172A] right-0">
                    <div className="flex flex-col gap-1 px-2 py-2">
                        <Link href="/">
                            <button className="hover:underline px-3 py-2 rounded-md w-fit self-end mr-8">Home</button>
                        </Link>
                        <Link href="#about" scroll={false}>
                            <button className="hover:underline px-3 py-2 rounded-md w-fit self-end mr-8">About</button>
                        </Link>
                        <Link href="#projects" scroll={false}>
                            <button className="hover:underline px-3 py-2 rounded-md w-fit self-end mr-8">Projects</button>
                        </Link>
                        <Link href="#contact" scroll={false}>
                            <button className="hover:underline px-3 py-2 rounded-md w-fit self-end mr-8">Contact</button>
                        </Link>
                    </div>
                </div>
                :
                null
            }
        </nav>
    );
}
