import { NextResponse } from 'next/server';
import cakesData from '@/data/cakes.json';
import type { Cake } from '@/types';

// GET - Fetch single cake by slug
export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const cake = cakesData.cakes.find((c) => c.slug === slug);

        if (!cake) {
            return NextResponse.json(
                { success: false, message: 'Cake not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, cake });
    } catch (error) {
        console.error('Error fetching cake:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch cake' },
            { status: 500 }
        );
    }
}

// PUT - Update cake (placeholder for CMS)
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const updatedCake: Cake = await request.json();

        // Note: This is a placeholder for CMS functionality
        // In production, you'd write to a database or use fs to update the JSON file

        return NextResponse.json({
            success: true,
            message: 'Cake updated successfully (placeholder)',
            cake: updatedCake
        });
    } catch (error) {
        console.error('Error updating cake:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to update cake' },
            { status: 500 }
        );
    }
}

// DELETE - Remove cake (placeholder for CMS)
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;

        // Note: This is a placeholder for CMS functionality
        // In production, you'd write to a database or delete from JSON file

        return NextResponse.json({
            success: true,
            message: 'Cake deleted successfully (placeholder)'
        });
    } catch (error) {
        console.error('Error deleting cake:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to delete cake' },
            { status: 500 }
        );
    }
}
