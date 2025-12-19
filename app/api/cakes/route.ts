import { NextResponse } from 'next/server';
import { loadJSON, writeJSON } from '@/lib/loadJSON';
import type { Cake } from '@/types';

// GET - Fetch all cakes
export async function GET() {
    try {
        const data = await loadJSON<{ cakes: Cake[] }>('cakes');
        return NextResponse.json({ success: true, cakes: data.cakes });
    } catch (error) {
        console.error('Error fetching cakes:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch cakes' },
            { status: 500 }
        );
    }
}

// POST - Add new cake (CMS ready)
export async function POST(request: Request) {
    try {
        const newCake: Cake = await request.json();
        const data = await loadJSON<{ cakes: Cake[] }>('cakes');

        data.cakes.push(newCake);
        await writeJSON('cakes', data);

        return NextResponse.json({ success: true, message: 'Cake added successfully', cake: newCake });
    } catch (error) {
        console.error('Error adding cake:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to add cake ' },
            { status: 500 }
        );
    }
}
