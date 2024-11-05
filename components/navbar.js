"use client";
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-sm dark:bg-black/80">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className=" font-babylonica text-2xl font-light tracking-wider dark:text-white">
                        OmariShots
                    </Link>

                    <div className="flex items-center space-x-8">
                        <Link
                            href="/portfolio"
                            className="text-sm tracking-wide hover:text-neutral-600 transition-colors dark:text-white dark:hover:text-neutral-300"
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm tracking-wide hover:text-neutral-600 transition-colors dark:text-white dark:hover:text-neutral-300"
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-sm tracking-wide hover:text-neutral-600 transition-colors dark:text-white dark:hover:text-neutral-300"
                        >
                            Contact
                        </Link>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-1 hover:bg-neutral-100 rounded-full transition-colors dark:hover:bg-neutral-800"
                            aria-label="Show more"
                        >
                            <Plus className="w-5 h-5 dark:text-white" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;