import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';
import { validateForm, orderFormSchema, customCakeFormSchema, contactFormSchema } from '@/lib/validation';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { type, ...formData } = body;

        if (!type || !['order', 'custom', 'contact'].includes(type)) {
            return NextResponse.json(
                { success: false, message: 'Invalid form type' },
                { status: 400 }
            );
        }

        // Validate based on type
        let validation;
        if (type === 'order') {
            validation = validateForm(orderFormSchema, formData);
        } else if (type === 'custom') {
            validation = validateForm(customCakeFormSchema, formData);
        } else {
            validation = validateForm(contactFormSchema, formData);
        }

        if (!validation.success) {
            return NextResponse.json(
                { success: false, errors: validation.errors },
                { status: 400 }
            );
        }

        // Send email
        const emailResult = await sendEmail(type as 'order' | 'custom' | 'contact', validation.data!);

        if (!emailResult.success) {
            return NextResponse.json(
                { success: false, message: emailResult.message },
                { status: 500 }
            );
        }

        return NextResponse.json({
            success: true,
            message: 'Your request has been sent successfully! We will contact you soon.',
        });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { success: false, message: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
