'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import CTAButton from './CTAButton';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/cakes', label: 'All Cakes' },
        { href: '/about', label: 'About' },
        { href: '/faqs', label: 'FAQs' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <header className="sticky top-0 z-30 glass backdrop-blur-md border-b border-gray-200">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-bold gradient-text">
                        🍰 Sabu Cakes
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-gray-700 hover:text-primary transition-colors font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTAs */}
                    <div className="hidden md:flex items-center gap-3">
                        <CTAButton label="Call Now" variant="call" icon="phone" className="btn-sm" />
                        <CTAButton label="Order Now" variant="primary" icon="cart" />
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="block text-gray-700 hover:text-primary transition-colors font-medium py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 pt-4 border-t">
                            <CTAButton label="Call Now" variant="call" icon="phone" />
                            <CTAButton label="Order Now" variant="primary" icon="cart" />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
