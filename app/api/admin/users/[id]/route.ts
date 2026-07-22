import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../db';
import { users } from '../../../../db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    let user = await db.select().from(users).where(eq(users.id, id)).get();
    
    // Auto-create guest_123 for frontend testing if not exists
    if (!user && id === 'guest_123') {
      await db.insert(users).values({
        id: 'guest_123',
        email: 'guest@microdrama.com',
        name: 'Guest User',
        authProvider: 'local',
        vipStatus: 'none'
      });
      user = await db.select().from(users).where(eq(users.id, id)).get();
    }

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ 
      message: "User details fetched",
      data: user 
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
