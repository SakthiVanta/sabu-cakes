'use client';

import Link from 'next/link';
import CTAButton from './CTAButton';
import { Cake } from '@/types';

interface CakeCardProps {
    cake: Cake;
}

export default function CakeCard({ cake }: CakeCardProps) {
    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100 flex flex-col h-full">
            {/* Cake Image Placeholder */}
            <Link href={`/cakes/${cake.slug}`} className="block">
                <div className="h-56 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center relative overflow-hidden group">
                    <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                        {cake.name.toLowerCase().includes('chocolate') ? '🍫' :
                            cake.name.toLowerCase().includes('fruit') ? '🍓' :
                                cake.name.toLowerCase().includes('truffle') ? '🍩' : '🍰'}
                    </div>
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            View Details
                        </span>
                    </div>
                    {(cake.id === "1" || cake.id === "5" || cake.id === "10") && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                            Popular
                        </div>
                    )}
                </div>
            </Link>

            {/* Card Content */}
            <div className="p-6 flex flex-col flex-grow">
                <Link href={`/cakes/${cake.slug}`}>
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 hover:text-blue-600 transition-colors">
                        {cake.name}
                    </h3>
                </Link>

                {cake.tags && (
                    <div className="flex flex-wrap gap-2 mb-3">
                        {cake.tags.slice(0, 3).map((tag: string) => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed text-sm flex-grow">
                    {cake.description}
                </p>

                {/* Price and CTA */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-auto">
                    <div>
                        <div className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-0.5">Staring from</div>
                        <div className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            ₹{cake.price.half_kg}
                        </div>
                    </div>
                    <CTAButton
                        label="Order"
                        variant="primary"
                        modalType="order"
                        className="shadow-md !px-5 !py-2.5 text-sm"
                    />
                </div>
            </div>
        </div>
    );
}
