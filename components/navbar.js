"use client";
import React, { useState } from 'react';
import { Plus, Menu, X } from 'lucide-react';
import Link from 'next/link';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/portfolio', label: 'Portfolio' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-sm dark:bg-black/80">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="font-babylonica text-2xl font-light tracking-wider dark:text-white">
                        OmariShots
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm tracking-wide hover:text-neutral-600 transition-colors dark:text-white dark:hover:text-neutral-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-1 hover:bg-neutral-100 rounded-full transition-colors dark:hover:bg-neutral-800"
                            aria-label="Show more"
                        >
                            <Plus className="w-5 h-5 dark:text-white" />
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors dark:hover:bg-neutral-800"
                        aria-label="Toggle mobile menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 dark:text-white" />
                        ) : (
                            <Menu className="w-6 h-6 dark:text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pt-4 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md dark:text-white dark:hover:bg-neutral-800"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="px-3 py-2">
                            <button
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="p-1 hover:bg-neutral-100 rounded-full transition-colors dark:hover:bg-neutral-800"
                                aria-label="Show more"
                            >
                                <Plus className="w-5 h-5 dark:text-white" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;