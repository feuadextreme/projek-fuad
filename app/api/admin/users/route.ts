import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../db';
import { users } from '../../../db/schema';
import { like, or } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  
  try {
    let result;
    if (query) {
      result = await db.select().from(users).where(
        or(
          like(users.email, `%${query}%`),
          like(users.name, `%${query}%`),
          like(users.id, `%${query}%`)
        )
      );
    } else {
      result = await db.select().from(users);
    }
    
    return NextResponse.json({ data: result });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
