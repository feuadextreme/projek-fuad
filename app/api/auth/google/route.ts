import { NextResponse } from 'next/server';
import { db } from '../../../db';
import { users } from '../../../db/schema';
import { eq } from 'drizzle-orm';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, avatar } = body;

    if (!email || !name) {
      return NextResponse.json({ success: false, message: 'Email dan nama diperlukan' }, { status: 400 });
    }

    // Check if user already exists
    const existingUsers = await db.select().from(users).where(eq(users.email, email));
    
    let userId;
    if (existingUsers.length > 0) {
      userId = existingUsers[0].id;
    } else {
      userId = crypto.randomUUID();
      await db.insert(users).values({
        id: userId,
        email: email,
        name: name,
        authProvider: 'google',
      });
    }

    return NextResponse.json({ success: true, userId, name, email, avatar });
  } catch (error) {
    console.error('Google Auth API Error:', error);
    return NextResponse.json({ success: false, message: 'Terjadi kesalahan internal', error: String(error) }, { status: 500 });
  }
}
