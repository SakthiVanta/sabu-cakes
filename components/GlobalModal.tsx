'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { X } from 'lucide-react';
import DynamicForm from './DynamicForm';

interface ModalContextType {
    isOpen: boolean;
    modalType: 'order' | 'custom' | 'contact' | null;
    open: (type: 'order' | 'custom' | 'contact', data?: any) => void;
    close: () => void;
    contextData: any;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function useModal() {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within ModalProvider');
    }
    return context;
}

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [modalType, setModalType] = useState<'order' | 'custom' | 'contact' | null>(null);
    const [contextData, setContextData] = useState<any>(null);

    const open = (type: 'order' | 'custom' | 'contact', data?: any) => {
        setModalType(type);
        setContextData(data || null);
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
        setTimeout(() => {
            setModalType(null);
            setContextData(null);
        }, 300);
    };

    return (
        <ModalContext.Provider value={{ isOpen, modalType, open, close, contextData }}>
            {children}
            <GlobalModal />
        </ModalContext.Provider>
    );
}

function GlobalModal() {
    const { isOpen, modalType, close } = useModal();

    if (!isOpen || !modalType) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fadeIn"
                onClick={close}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <div
                    className="glass-blue rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto animate-slideIn"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Header */}
                    <div className="gradient-bg-primary p-6 rounded-t-2xl text-white relative">
                        <button
                            onClick={close}
                            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>

                        <h2 className="text-2xl font-bold">
                            {modalType === 'order' && '🍰 Order Your Cake'}
                            {modalType === 'custom' && '🎨 Custom Cake Request'}
                            {modalType === 'contact' && '📧 Get In Touch'}
                        </h2>
                        <p className="text-white/90 mt-1">
                            {modalType === 'order' && 'Fill in your details and we\'ll get back to you shortly!'}
                            {modalType === 'custom' && 'Tell us about your dream cake!'}
                            {modalType === 'contact' && 'We\'d love to hear from you!'}
                        </p>
                    </div>

                    {/* Content - Dynamic Form */}
                    <div className="p-6 bg-white rounded-b-2xl">
                        <DynamicForm type={modalType} onSuccess={close} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default GlobalModal;
