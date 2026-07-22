import { NextResponse } from 'next/server';
import { db } from '../../../db';
import { dramaLikes } from '../../../db/schema';
import { eq, and } from 'drizzle-orm';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dramaId = searchParams.get('dramaId');
  const userId = searchParams.get('userId');

  if (!dramaId) {
    return NextResponse.json({ success: false, message: 'Missing dramaId' }, { status: 400 });
  }

  try {
    const allLikes = await db.select().from(dramaLikes).where(eq(dramaLikes.dramaId, dramaId));
    let hasLiked = false;
    
    if (userId) {
      hasLiked = allLikes.some(like => like.userId === userId);
    }

    return NextResponse.json({ success: true, count: allLikes.length, hasLiked });
  } catch (error) {
    console.error('Like API GET Error:', error);
    return NextResponse.json({ success: false, message: String(error) }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, dramaId, action } = body; // action is 'like' or 'unlike'

    if (!userId || !dramaId || !action) {
      return NextResponse.json({ success: false, message: 'Missing params' }, { status: 400 });
    }

    if (action === 'unlike') {
      await db.delete(dramaLikes).where(and(eq(dramaLikes.dramaId, dramaId), eq(dramaLikes.userId, userId)));
    } else {
      // Check if already liked
      const existing = await db.select().from(dramaLikes).where(and(eq(dramaLikes.dramaId, dramaId), eq(dramaLikes.userId, userId)));
      if (existing.length === 0) {
        await db.insert(dramaLikes).values({
          id: crypto.randomUUID(),
          userId,
          dramaId,
        });
      }
    }

    // Get new count
    const allLikes = await db.select().from(dramaLikes).where(eq(dramaLikes.dramaId, dramaId));
    return NextResponse.json({ success: true, count: allLikes.length, hasLiked: action === 'like' });
  } catch (error) {
    console.error('Like API POST Error:', error);
    return NextResponse.json({ success: false, message: String(error) }, { status: 500 });
  }
}
