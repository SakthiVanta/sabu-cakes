import CTAButton from "@/components/CTAButton";
import { Heart, Award, Sparkles, Palette } from "lucide-react";

export default async function AboutPage() {
    const aboutData = await import("@/data/about.json");

    return (
        <div className="py-16">
            {/* Hero Section */}
            <section className="gradient-bg-primary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="text-7xl mb-6">👩‍🍳</div>
                    <h1 className="text-5xl font-bold mb-4">{aboutData.title}</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">{aboutData.subtitle}</p>
                </div>
            </section>

            {/* Sections */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 space-y-16">
                    {aboutData.sections.map((section: any, idx: number) => (
                        <div
                            key={idx}
                            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                } gap-8 items-center`}
                        >
                            <div className="w-full md:w-1/2">
                                <div className="h-64 md:h-80 bg-gradient-soft rounded-2xl flex items-center justify-center text-8xl">
                                    🍰
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <h2 className="text-3xl font-bold gradient-text mb-4">{section.heading}</h2>
                                <p className="text-gray-600 text-lg leading-relaxed">{section.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold gradient-text mb-4">Our Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            What makes Sabu Cakes truly special
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {aboutData.values.map((value: any, idx: number) => {
                            const icons = { Sparkles, Award, Heart, Palette };
                            const Icon = icons[value.icon as keyof typeof icons] || Sparkles;

                            return (
                                <div key={idx} className="card text-center group hover:scale-105">
                                    <div className="mb-4 flex justify-center">
                                        <div className="p-4 gradient-bg-primary rounded-full text-white">
                                            <Icon size={32} />
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Journey */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold gradient-text mb-4">Our Journey</h2>
                    </div>

                    <div className="space-y-8">
                        {aboutData.journey.map((item: any, idx: number) => (
                            <div key={idx} className="flex gap-6">
                                <div className="flex-shrink-0 w-24 h-24 gradient-bg-soft rounded-full flex items-center justify-center text-2xl font-bold text-white">
                                    {item.year}
                                </div>
                                <div className="flex-1 card">
                                    <p className="text-gray-700 text-lg">{item.milestone}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold gradient-text mb-4">Let's Create Something Special</h2>
                    <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                        Ready to experience Sabarika's passion for baking? Order your perfect cake today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTAButton label="Order Now" variant="primary" modalType="order" icon="cart" className="text-lg px-8 py-4" />
                        <CTAButton label="Custom Cake" variant="outline" modalType="custom" className="text-lg px-8 py-4" />
                    </div>
                </div>
            </section>
        </div>
    );
}
