import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../db';
import { episodes   } from '../../../../../db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await db.select().from(episodes).where(eq(episodes.dramaId, id));
    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const newId = `ep_${Date.now()}`;
    
      const newEpisode = {
        id: newId,
        dramaId: id,
        title: body.title,
        description: body.description || null,
        epNumber: body.epNumber || 1,
        isFreeDefault: body.isFreeDefault || false,
        playbackUrl: body.playbackUrl || null,
        processingStatus: 'ready'
      };
    
    await db.insert(episodes).values(newEpisode);
    return NextResponse.json({ message: "Episode created successfully", data: newEpisode }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
