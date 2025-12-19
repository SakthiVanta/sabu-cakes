import Link from 'next/link';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white mt-20">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                🍰 Sabu Cakes
                            </h3>
                            <p className="text-blue-200 font-medium">By Sabarika</p>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Freshly baked homemade cakes in Coimbatore, crafted with love and premium ingredients.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/sabucakes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:scale-110 transition-transform shadow-lg"
                                aria-label="Instagram"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://facebook.com/sabucakes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:scale-110 transition-transform shadow-lg"
                                aria-label="Facebook"
                            >
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-xl mb-6 text-blue-300">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/cakes" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    All Cakes
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    About Sabarika
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Cakes */}
                    <div>
                        <h4 className="font-bold text-xl mb-6 text-blue-300">Popular Cakes</h4>
                        <ul className="space-y-3">
                            <li><Link href="/cakes/black-forest-cake" className="text-gray-300 hover:text-blue-400 transition-colors">Black Forest</Link></li>
                            <li><Link href="/cakes/choco-truffle-cake" className="text-gray-300 hover:text-blue-400 transition-colors">Chocolate Truffle</Link></li>
                            <li><Link href="/cakes/rasmalai-cake" className="text-gray-300 hover:text-blue-400 transition-colors">Rasmalai Cake</Link></li>
                            <li><Link href="/cakes/tiramisu" className="text-gray-300 hover:text-blue-400 transition-colors">Tiramisu</Link></li>
                            <li><Link href="/cakes/blueberry-cake" className="text-gray-300 hover:text-blue-400 transition-colors">Blueberry Cake</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-xl mb-6 text-blue-300">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin size={22} className="text-blue-400 flex-shrink-0 mt-0.5" />
                                <span className="leading-relaxed">Fantasy Street, Ondipudur, Coimbatore, Tamil Nadu</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                                <a href="tel:+919345734680" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    +91 93457 34680
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                                <a href="mailto:sakthi.vana@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                                    sakthi.vana@gmail.com
                                </a>
                            </li>
                        </ul>
                        <div className="mt-6 p-4 bg-white/10 backdrop-blur rounded-lg border border-white/20">
                            <p className="text-sm font-semibold text-blue-300 mb-1">Working Hours</p>
                            <p className="text-gray-300 text-sm">Open Daily: 9 AM - 9 PM</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p className="text-gray-400 mb-3">© 2024 Sabu Cakes by Sabarika. All rights reserved.</p>
                    <p className="text-blue-300 font-medium">Made with ❤️ in Coimbatore</p>
                    <div className="flex justify-center gap-6 mt-6 text-sm">
                        <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
                        <span className="text-gray-600">|</span>
                        <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
