import type { Metadata } from 'next';
import type { SEOData } from '@/types';

/**
 * Generate metadata for a page from SEO JSON data
 */
export function generateMetadata(seoData: SEOData, pageName: string): Metadata {
    const pageData = seoData[pageName];

    if (!pageData) {
        return {
            title: 'Sabu Cakes',
            description: 'Fresh homemade cakes in Coimbatore',
        };
    }

    const metadata: Metadata = {
        title: pageData.title,
        description: pageData.description,
        keywords: pageData.keywords,
        openGraph: {
            title: pageData.openGraph?.title || pageData.title,
            description: pageData.openGraph?.description || pageData.description,
            images: pageData.openGraph?.image ? [pageData.openGraph.image] : [],
            type: 'website',
            locale: 'en_IN',
            siteName: 'Sabu Cakes',
        },
        twitter: {
            card: 'summary_large_image',
            title: pageData.openGraph?.title || pageData.title,
            description: pageData.openGraph?.description || pageData.description,
            images: pageData.openGraph?.image ? [pageData.openGraph.image] : [],
        },
    };

    return metadata;
}

/**
 * Generate JSON-LD structured data for bakery
 */
export function generateBakerySchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Bakery',
        name: 'Sabu Cakes',
        description: 'Fresh homemade cakes in Coimbatore by Sabarika',
        image: '/images/og-home.jpg',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Fantasy Street, Ondipudur',
            addressLocality: 'Coimbatore',
            addressRegion: 'Tamil Nadu',
            postalCode: '641016',
            addressCountry: 'IN',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 11.0,
            longitude: 76.9,
        },
        telephone: '+919345734680',
        email: 'sakthi.vana@gmail.com',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '20:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '09:00',
                closes: '21:00',
            },
        ],
        priceRange: '₹₹',
        servesCuisine: 'Bakery, Desserts',
        founder: {
            '@type': 'Person',
            name: 'Sabarika',
            jobTitle: 'Entrepreneur Chef & CEO',
        },
    };
}

/**
 * Generate JSON-LD structured data for a product (cake)
 */
export function generateProductSchema(cake: {
    name: string;
    description: string;
    price: { half_kg: number; one_kg: number; two_kg: number };
    imageUrl: string;
    available: boolean;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: cake.name,
        description: cake.description,
        image: cake.imageUrl,
        brand: {
            '@type': 'Brand',
            name: 'Sabu Cakes',
        },
        offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'INR',
            lowPrice: cake.price.half_kg,
            highPrice: cake.price.two_kg,
            availability: cake.available
                ? 'https://schema.org/InStock'
                : 'https://schema.org/OutOfStock',
        },
    };
}
