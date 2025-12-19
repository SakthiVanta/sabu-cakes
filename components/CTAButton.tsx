'use client';

import { useModal } from './GlobalModal';
import { Phone, ShoppingCart } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

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
            const phone = process.env.NEXT_PUBLIC_WHATSAPP || '+91 90038 17379';
            const message = encodeURIComponent('Hi! I would like to order a cake from Sabu Cakes. Can you help me?');
            window.open(`https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
        } else if (variant === 'call') {
            const phone = process.env.NEXT_PUBLIC_PHONE || '+91 90038 17379';
            window.open(`tel:${phone.replace(/\s/g, '')}`, '_self');
        } else {
            open(modalType);
        }
    };

    const IconComponent: any = {
        whatsapp: FaWhatsapp,
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
