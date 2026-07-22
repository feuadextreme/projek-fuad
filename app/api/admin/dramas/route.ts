import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../db';
import { dramas   } from '../../../db/schema';
import { like } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    
    let result;
    if (query) {
      result = await db.select().from(dramas).where(like(dramas.title, `%${query}%`));
    } else {
      result = await db.select().from(dramas);
    }
    
    return NextResponse.json({ data: result });
  } catch (error) {
    console.error("GET Dramas Error:", error);
    return NextResponse.json({ error: "Failed to fetch dramas" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newId = `drm_${Date.now()}`;
    
    const newDrama = {
      id: newId,
      title: body.title,
      genre: body.genre || null,
      tag: body.tag || null,
      cover: body.cover || null,
      synopsis: body.synopsis || null,
      status: body.status || 'DRAFT'
    };
    
    await db.insert(dramas).values(newDrama);
    return NextResponse.json({ message: "Drama created successfully", data: newDrama }, { status: 201 });
  } catch (error) {
    console.error("POST Drama Error:", error);
    return NextResponse.json({ error: "Invalid request body or database error" }, { status: 400 });
  }
}
