"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import faqsData from "@/data/faqs.json";

export default function FAQsPage() {
    return (
        <div className="py-16">
            <section className="gradient-bg-primary text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Everything you need to know about ordering from Sabu Cakes
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FAQList />
                </div>
            </section>
        </div>
    );
}

function FAQList() {
    const faqs = faqsData.faqs;
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const categories = Array.from(
        new Set(faqs.map((faq) => faq.category))
    );

    return (
        <div className="space-y-8">
            {categories.map((category) => (
                <div key={category}>
                    <h2 className="text-2xl font-bold gradient-text mb-4">
                        {category}
                    </h2>

                    <div className="space-y-4">
                        {faqs
                            .filter((faq) => faq.category === category)
                            .map((faq) => {
                                const id = Number(faq.id);

                                return (
                                    <FAQItem
                                        key={id}
                                        question={faq.question}
                                        answer={faq.answer}
                                        isOpen={openIndex === id}
                                        onClick={() =>
                                            setOpenIndex(openIndex === id ? null : id)
                                        }
                                    />
                                );
                            })}
                    </div>
                </div>
            ))}
        </div>
    );
}

function FAQItem({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="border rounded-lg overflow-hidden">
            <button
                type="button"
                onClick={onClick}
                className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors text-left"
            >
                <span className="font-semibold text-lg pr-4">
                    {question}
                </span>

                {isOpen ? (
                    <ChevronUp size={24} className="flex-shrink-0" />
                ) : (
                    <ChevronDown size={24} className="flex-shrink-0" />
                )}
            </button>

            {isOpen && (
                <div className="p-4 pt-0 text-gray-600 border-t">
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
}
