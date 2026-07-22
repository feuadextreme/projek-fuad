import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../../db';
import { episodes } from '../../../../../../db/schema';
import { eq } from 'drizzle-orm';

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; episodeId: string }> }
) {
  try {
    const { episodeId } = await params;
    
    // Ambil episode untuk mendapatkan playbackUrl
    const episode = await db.select().from(episodes).where(eq(episodes.id, episodeId)).get();
    if (!episode) {
      return NextResponse.json({ error: "Episode not found" }, { status: 404 });
    }

    // Hapus file dari Bunny.net Storage jika URL ada
    if (episode.playbackUrl && episode.playbackUrl.includes('b-cdn.net')) {
      const endpoint = process.env.BUNNY_STORAGE_ENDPOINT;
      const apiKey = process.env.BUNNY_STORAGE_API_KEY;

      if (endpoint && apiKey) {
        try {
          const urlObj = new URL(episode.playbackUrl);
          const fileName = urlObj.pathname.split('/').pop();
          if (fileName) {
            const deleteUrl = `${endpoint}/${fileName}`;
            const response = await fetch(deleteUrl, {
              method: 'DELETE',
              headers: { 'AccessKey': apiKey }
            });
            if (!response.ok) {
              console.error(`Failed to delete from Bunny CDN: ${response.status} ${await response.text()}`);
            }
          }
        } catch (e) {
          console.error("Error processing Bunny.net delete", e);
        }
      }
    }

    // Hapus dari database
    await db.delete(episodes).where(eq(episodes.id, episodeId));
    return NextResponse.json({ message: "Episode deleted successfully" });
  } catch (error) {
    console.error(error);
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
