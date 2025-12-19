import { NextResponse } from 'next/server';
import { loadJSON, writeJSON } from '@/lib/loadJSON';
import type { Cake } from '@/types';

// GET - Fetch single cake by slug
export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const data = await loadJSON<{ cakes: Cake[] }>('cakes');
        const cake = data.cakes.find((c) => c.slug === slug);

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

// PUT - Update cake
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const updatedCake: Cake = await request.json();
        const data = await loadJSON<{ cakes: Cake[] }>('cakes');

        const index = data.cakes.findIndex((c) => c.slug === slug);
        if (index === -1) {
            return NextResponse.json(
                { success: false, message: 'Cake not found' },
                { status: 404 }
            );
        }

        data.cakes[index] = updatedCake;
        await writeJSON('cakes', data);

        return NextResponse.json({ success: true, message: 'Cake updated successfully', cake: updatedCake });
    } catch (error) {
        console.error('Error updating cake:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to update cake' },
            { status: 500 }
        );
    }
}

// DELETE - Remove cake
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        const { slug } = await params;
        const data = await loadJSON<{ cakes: Cake[] }>('cakes');

        const filteredCakes = data.cakes.filter((c) => c.slug !== slug);

        if (filteredCakes.length === data.cakes.length) {
            return NextResponse.json(
                { success: false, message: 'Cake not found' },
                { status: 404 }
            );
        }

        data.cakes = filteredCakes;
        await writeJSON('cakes', data);

        return NextResponse.json({ success: true, message: 'Cake deleted successfully' });
    } catch (error) {
        console.error('Error deleting cake:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to delete cake' },
            { status: 500 }
        );
    }
}
