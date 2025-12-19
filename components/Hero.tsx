'use client';

import CTAButton from './CTAButton';

export default function Hero() {
    return (
        <section className="relative overflow-hidden gradient-bg-hero text-white py-20 md:py-32">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float" />
                <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fadeIn">
                        Fresh Homemade Cakes
                    </h1>
                    <p className="text-xl md:text-2xl mb-4 text-white/90 animate-fadeIn">
                        Baked with Love by Sabarika in Coimbatore
                    </p>
                    <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto animate-fadeIn">
                        Experience the joy of authentic homemade cakes made with premium ingredients. From classic favorites to innovative fusion flavors - every cake tells a story!
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fadeIn">
                        <CTAButton label="Order Your Cake" variant="primary" modalType="order" icon="cart" className="text-lg px-8 py-4" />
                        <CTAButton label="WhatsApp Us" variant="whatsapp" icon="whatsapp" className="text-lg px-8 py-4 bg-white text-primary hover:bg-gray-100 border-0" />
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 animate-fadeIn">
                        <div className="text-center">
                            <div className="text-3xl mb-2">✨</div>
                            <div className="font-semibold">100% Homemade</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">🎂</div>
                            <div className="font-semibold">18+ Varieties</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">🚚</div>
                            <div className="font-semibold">Same-Day Delivery</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-2">💝</div>
                            <div className="font-semibold">Custom Designs</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
