import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../../app/db';
import { episodes } from '../../../../../../app/db/schema';
import { eq } from 'drizzle-orm';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; episodeId: string }> }
) {
  try {
    const { episodeId } = await params;
    await db.delete(episodes).where(eq(episodes.id, episodeId));
    return NextResponse.json({ message: "Episode deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; episodeId: string }> }
) {
  try {
    const { episodeId } = await params;
    const body = await request.json();
    const updateData = {
      title: body.title,
      description: body.description,
      playbackUrl: body.playbackUrl || body.videoUrl,
      isFreeDefault: body.isFreeDefault,
    };
    await db.update(episodes).set(updateData).where(eq(episodes.id, episodeId));
    return NextResponse.json({ message: "Episode updated successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
