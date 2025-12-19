import { NextResponse } from 'next/server';
import cakesData from '@/data/cakes.json';
import type { Cake } from '@/types';

// GET - Fetch all cakes
export async function GET() {
    try {
        return NextResponse.json({ success: true, cakes: cakesData.cakes });
    } catch (error) {
        console.error('Error fetching cakes:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch cakes' },
            { status: 500 }
        );
    }
}

// POST - Add new cake (for future CMS)
export async function POST(request: Request) {
    try {
        const newCake: Cake = await request.json();

        // Note: This is a placeholder for CMS functionality
        // In production, you'd write to a database or use fs to update the JSON file

        return NextResponse.json({
            success: true,
            message: 'Cake added successfully (placeholder)',
            cake: newCake
        });
    } catch (error) {
        console.error('Error adding cake:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to add cake' },
            { status: 500 }
        );
    }
}
