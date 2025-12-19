'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsAppButton() {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP || '+919345734680';
    const message = encodeURIComponent('Hi! I would like to order a cake from Sabu Cakes. Can you help me?');
    const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${message}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 gradient-bg-secondary text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform animate-pulse"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} />
        </a>
    );
}
