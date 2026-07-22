import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../db';
import { episodes   } from '../../../../db/schema';
import { eq } from 'drizzle-orm';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updateData = {
      title: body.title,
      isFreeDefault: body.isFreeDefault
    };
    
    await db.update(episodes).set(updateData).where(eq(episodes.id, id));
    return NextResponse.json({ message: `Episode updated successfully`, data: { id, ...updateData } });
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
    await db.delete(episodes).where(eq(episodes.id, id));
    return NextResponse.json({ message: `Episode deleted successfully` });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 400 });
  }
}
