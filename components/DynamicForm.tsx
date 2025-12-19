'use client';

import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface DynamicFormProps {
    type: 'order' | 'custom' | 'contact';
    onSuccess: () => void;
}

export default function DynamicForm({ type, onSuccess }: DynamicFormProps) {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [cakes, setCakes] = useState<Array<{ name: string; slug: string }>>([]);

    // Load cakes for select dropdown
    useEffect(() => {
        if (type === 'order') {
            fetch('/api/cakes')
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        setCakes(data.cakes.map((c: any) => ({ name: c.name, slug: c.slug })));
                    }
                })
                .catch((err) => console.error('Failed to load cakes:', err));
        }
    }, [type]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type, ...formData }),
            });

            const data = await response.json();

            if (!data.success) {
                if (data.errors) {
                    setErrors(data.errors);
                } else {
                    setErrors({ general: data.message || 'Something went wrong' });
                }
            } else {
                setSuccess(true);
                setTimeout(() => {
                    onSuccess();
                }, 2000);
            }
        } catch (error) {
            setErrors({ general: 'Network error. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="text-center py-8">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold gradient-text mb-2">Success!</h3>
                <p className="text-gray-600">Your message has been sent. We'll contact you soon!</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Order form */}
            {type === 'order' && (
                <>
                    <FormField
                        label="Your Name *"
                        name="customerName"
                        value={formData.customerName || ''}
                        onChange={handleChange}
                        error={errors.customerName}
                        placeholder="Enter your full name"
                    />
                    <FormField
                        label="Phone Number *"
                        name="phone"
                        type="tel"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        error={errors.phone}
                        placeholder="+91 XXXXX XXXXX"
                    />
                    <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="your@email.com"
                    />
                    <div>
                        <label className="label">Select Cake *</label>
                        <select
                            name="cakeName"
                            value={formData.cakeName || ''}
                            onChange={handleChange}
                            className={`input ${errors.cakeName ? 'input-error' : ''}`}
                        >
                            <option value="">Choose a cake...</option>
                            {cakes.map((cake) => (
                                <option key={cake.slug} value={cake.name}>
                                    {cake.name}
                                </option>
                            ))}
                        </select>
                        {errors.cakeName && <div className="error-text">{errors.cakeName}</div>}
                    </div>
                    <div>
                        <label className="label">Cake Weight *</label>
                        <select
                            name="weight"
                            value={formData.weight || ''}
                            onChange={handleChange}
                            className={`input ${errors.weight ? 'input-error' : ''}`}
                        >
                            <option value="">Choose weight...</option>
                            <option value="half_kg">0.5 KG</option>
                            <option value="one_kg">1 KG</option>
                            <option value="two_kg">2 KG</option>
                        </select>
                        {errors.weight && <div className="error-text">{errors.weight}</div>}
                    </div>
                    <FormField
                        label="Delivery Date *"
                        name="deliveryDate"
                        type="text"
                        value={formData.deliveryDate || ''}
                        onChange={handleChange}
                        error={errors.deliveryDate}
                        placeholder="DD/MM/YYYY"
                    />
                    <FormField
                        label="Delivery Address *"
                        name="deliveryAddress"
                        type="textarea"
                        value={formData.deliveryAddress || ''}
                        onChange={handleChange}
                        error={errors.deliveryAddress}
                        placeholder="Enter your complete address in Coimbatore"
                        rows={3}
                    />
                    <FormField
                        label="Message on Cake (Optional)"
                        name="cakeMessage"
                        value={formData.cakeMessage || ''}
                        onChange={handleChange}
                        error={errors.cakeMessage}
                        placeholder="E.g., Happy Birthday!"
                    />
                    <FormField
                        label="Special Requests / Allergies"
                        name="specialRequests"
                        type="textarea"
                        value={formData.specialRequests || ''}
                        onChange={handleChange}
                        error={errors.specialRequests}
                        placeholder="Any special requirements or allergies?"
                        rows={3}
                    />
                </>
            )}

            {/* Custom cake form */}
            {type === 'custom' && (
                <>
                    <FormField
                        label="Your Name *"
                        name="customerName"
                        value={formData.customerName || ''}
                        onChange={handleChange}
                        error={errors.customerName}
                        placeholder="Enter your full name"
                    />
                    <FormField
                        label="Phone Number *"
                        name="phone"
                        type="tel"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        error={errors.phone}
                        placeholder="+91 XXXXX XXXXX"
                    />
                    <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="your@email.com"
                    />
                    <div>
                        <label className="label">Occasion *</label>
                        <select
                            name="occasion"
                            value={formData.occasion || ''}
                            onChange={handleChange}
                            className={`input ${errors.occasion ? 'input-error' : ''}`}
                        >
                            <option value="">Choose occasion...</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="other">Other Celebration</option>
                        </select>
                        {errors.occasion && <div className="error-text">{errors.occasion}</div>}
                    </div>
                    <div>
                        <label className="label">Number of People to Serve *</label>
                        <select
                            name="servings"
                            value={formData.servings || ''}
                            onChange={handleChange}
                            className={`input ${errors.servings ? 'input-error' : ''}`}
                        >
                            <option value="">Choose servings...</option>
                            <option value="10-20">10-20 people</option>
                            <option value="20-30">20-30 people</option>
                            <option value="30-50">30-50 people</option>
                            <option value="50+">50+ people</option>
                        </select>
                        {errors.servings && <div className="error-text">{errors.servings}</div>}
                    </div>
                    <FormField
                        label="Flavor Preference *"
                        name="flavorPreference"
                        value={formData.flavorPreference || ''}
                        onChange={handleChange}
                        error={errors.flavorPreference}
                        placeholder="E.g., Chocolate, Vanilla, Mixed"
                    />
                    <FormField
                        label="Design Description *"
                        name="designDescription"
                        type="textarea"
                        value={formData.designDescription || ''}
                        onChange={handleChange}
                        error={errors.designDescription}
                        placeholder="Describe your dream cake design, theme, colors, decorations, etc."
                        rows={4}
                    />
                    <FormField
                        label="Delivery Date *"
                        name="deliveryDate"
                        value={formData.deliveryDate || ''}
                        onChange={handleChange}
                        error={errors.deliveryDate}
                        placeholder="DD/MM/YYYY"
                    />
                    <FormField
                        label="Reference Image URL (Optional)"
                        name="referenceImages"
                        value={formData.referenceImages || ''}
                        onChange={handleChange}
                        error={errors.referenceImages}
                        placeholder="Paste a link to your reference image"
                    />
                </>
            )}

            {/* Contact form */}
            {type === 'contact' && (
                <>
                    <FormField
                        label="Your Name *"
                        name="name"
                        value={formData.name || ''}
                        onChange={handleChange}
                        error={errors.name}
                        placeholder="Enter your name"
                    />
                    <FormField
                        label="Phone Number *"
                        name="phone"
                        type="tel"
                        value={formData.phone || ''}
                        onChange={handleChange}
                        error={errors.phone}
                        placeholder="+91 XXXXX XXXXX"
                    />
                    <FormField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        error={errors.email}
                        placeholder="your@email.com"
                    />
                    <FormField
                        label="Subject *"
                        name="subject"
                        value={formData.subject || ''}
                        onChange={handleChange}
                        error={errors.subject}
                        placeholder="What is this about?"
                    />
                    <FormField
                        label="Your Message *"
                        name="message"
                        type="textarea"
                        value={formData.message || ''}
                        onChange={handleChange}
                        error={errors.message}
                        placeholder="Tell us how we can help you..."
                        rows={4}
                    />
                </>
            )}

            {errors.general && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {errors.general}
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="btn btn-primary w-full text-lg py-3"
            >
                {loading ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        Sending...
                    </>
                ) : (
                    'Send Request'
                )}
            </button>
        </form>
    );
}

// Helper component for form fields
function FormField({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    placeholder,
    rows,
}: {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: any) => void;
    error?: string;
    placeholder?: string;
    rows?: number;
}) {
    return (
        <div>
            <label className="label">{label}</label>
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`input ${error ? 'input-error' : ''}`}
                    placeholder={placeholder}
                    rows={rows || 3}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`input ${error ? 'input-error' : ''}`}
                    placeholder={placeholder}
                />
            )}
            {error && <div className="error-text">{error}</div>}
        </div>
    );
}
