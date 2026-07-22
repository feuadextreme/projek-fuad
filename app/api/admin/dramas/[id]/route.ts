import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../db';
import { dramas   } from '../../../../db/schema';
import { eq } from 'drizzle-orm';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await db.select().from(dramas).where(eq(dramas.id, id)).get();
    if (!result) return NextResponse.json({ error: "Drama not found" }, { status: 404 });
    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Filter out undefined/invalid fields if necessary, or pass directly
    const updateData = {
      title: body.title,
      genre: body.genre,
      tag: body.tag,
      cover: body.cover,
      synopsis: body.synopsis,
      status: body.status,
    };
    
    await db.update(dramas).set(updateData).where(eq(dramas.id, id));
    return NextResponse.json({ message: `Drama updated successfully`, data: { id, ...updateData } });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 400 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await db.delete(dramas).where(eq(dramas.id, id));
    return NextResponse.json({ message: `Drama deleted successfully` });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 400 });
  }
}
