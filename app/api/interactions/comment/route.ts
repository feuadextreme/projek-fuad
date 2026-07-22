import { NextResponse } from 'next/server';
import { db } from '../../../db';
import { dramaComments, users } from '../../../db/schema';
import { eq, desc } from 'drizzle-orm';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const dramaId = searchParams.get('dramaId');

  if (!dramaId) {
    return NextResponse.json({ success: false, message: 'Missing dramaId' }, { status: 400 });
  }

  try {
    const comments = await db
      .select({
        id: dramaComments.id,
        content: dramaComments.content,
        createdAt: dramaComments.createdAt,
        userId: users.id,
        userName: users.name,
      })
      .from(dramaComments)
      .innerJoin(users, eq(dramaComments.userId, users.id))
      .where(eq(dramaComments.dramaId, dramaId))
      .orderBy(desc(dramaComments.createdAt));

    return NextResponse.json({ success: true, comments });
  } catch (error) {
    console.error('Comment API GET Error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, dramaId, content } = body;

    if (!userId || !dramaId || !content) {
      return NextResponse.json({ success: false, message: 'Missing params' }, { status: 400 });
    }

    const commentId = crypto.randomUUID();
    await db.insert(dramaComments).values({
      id: commentId,
      userId,
      dramaId,
      content,
    });

    return NextResponse.json({ success: true, message: 'Comment posted' });
  } catch (error) {
    console.error('Comment API POST Error:', error);
    return NextResponse.json({ success: false, message: 'Internal Server Error' }, { status: 500 });
  }
}
