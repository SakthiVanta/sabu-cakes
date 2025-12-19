'use client';

import { useModal } from './GlobalModal';
import { MessageCircle, Phone, ShoppingCart } from 'lucide-react';

interface CTAButtonProps {
    label?: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'call';
    modalType?: 'order' | 'custom' | 'contact';
    className?: string;
    icon?: 'whatsapp' | 'phone' | 'cart' | 'none';
}

export default function CTAButton({
    label = 'Order Now',
    variant = 'primary',
    modalType = 'order',
    className = '',
    icon = 'none',
}: CTAButtonProps) {
    const { open } = useModal();

    const handleClick = () => {
        if (variant === 'whatsapp') {
            const phone = process.env.NEXT_PUBLIC_WHATSAPP || '+919345734680';
            const message = encodeURIComponent('Hi! I would like to order a cake from Sabu Cakes. Can you help me?');
            window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
        } else if (variant === 'call') {
            const phone = process.env.NEXT_PUBLIC_PHONE || '+919345734680';
            window.open(`tel:${phone}`, '_self');
        } else {
            open(modalType);
        }
    };

    const IconComponent = {
        whatsapp: MessageCircle,
        phone: Phone,
        cart: ShoppingCart,
        none: null,
    }[icon];

    return (
        <button
            onClick={handleClick}
            className={`btn btn-${variant} ${className}`}
        >
            {IconComponent && <IconComponent size={20} />}
            {label}
        </button>
    );
}
