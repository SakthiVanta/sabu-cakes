import { z } from 'zod';

// Order form validation schema
export const orderFormSchema = z.object({
    customerName: z.string().min(2, 'Name must be at least 2 characters').max(50),
    phone: z.string().regex(/^[+]?[0-9]{10,15}$/, 'Invalid phone number'),
    email: z.string().email('Invalid email address').optional().or(z.literal('')),
    cakeName: z.string().min(1, 'Please select a cake'),
    weight: z.enum(['half_kg', 'one_kg', 'two_kg']),
    deliveryDate: z.string().min(1, 'Delivery date is required'),
    deliveryTime: z.enum(['morning', 'afternoon', 'evening']).optional(),
    deliveryAddress: z.string().min(10, 'Please provide complete address').max(200),
    cakeMessage: z.string().max(50).optional(),
    specialRequests: z.string().max(300).optional(),
});

// Custom cake form validation schema
export const customCakeFormSchema = z.object({
    customerName: z.string().min(2, 'Name must be at least 2 characters').max(50),
    phone: z.string().regex(/^[+]?[0-9]{10,15}$/, 'Invalid phone number'),
    email: z.string().email('Invalid email address').optional().or(z.literal('')),
    occasion: z.enum(['birthday', 'anniversary', 'wedding', 'corporate', 'other']),
    servings: z.enum(['10-20', '20-30', '30-50', '50+']),
    flavorPreference: z.string().min(1, 'Flavor preference is required'),
    designDescription: z.string().min(20, 'Please provide detailed description').max(500),
    deliveryDate: z.string().min(1, 'Delivery date is required'),
    budget: z.enum(['500-1000', '1000-2000', '2000-5000', '5000+']).optional(),
    referenceImages: z.string().url('Invalid URL').optional().or(z.literal('')),
    additionalNotes: z.string().max(300).optional(),
});

// Contact form validation schema
export const contactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters').max(50),
    phone: z.string().regex(/^[+]?[0-9]{10,15}$/, 'Invalid phone number'),
    email: z.string().email('Invalid email address').optional().or(z.literal('')),
    subject: z.string().min(5, 'Subject is too short').max(100),
    message: z.string().min(10, 'Message is too short').max(500),
});

// Type exports
export type OrderFormData = z.infer<typeof orderFormSchema>;
export type CustomCakeFormData = z.infer<typeof customCakeFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;

// Generic form validation function
export function validateForm<T>(schema: z.ZodSchema<T>, data: unknown): { success: boolean; data?: T; errors?: Record<string, string> } {
    try {
        const validatedData = schema.parse(data);
        return { success: true, data: validatedData };
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errors: Record<string, string> = {};
            error.issues.forEach((issue: z.ZodIssue) => {
                if (issue.path.length > 0) {
                    errors[issue.path[0].toString()] = issue.message;
                }
            });
            return { success: false, errors };
        }
        return { success: false, errors: { general: 'Validation failed' } };
    }
}
