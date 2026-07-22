import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../db';
import { subscriptionPlans   } from '../../../../../db/schema';
import { eq } from 'drizzle-orm';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updateData = {
      name: body.name,
      durationDays: body.durationDays,
      price: body.price,
      promoLabel: body.promoLabel,
      isActive: body.isActive
    };
    await db.update(subscriptionPlans).set(updateData).where(eq(subscriptionPlans.id, id));
    return NextResponse.json({ 
      message: `VIP package updated successfully`,
      data: { id: id, ...updateData }
    });
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
    await db.delete(subscriptionPlans).where(eq(subscriptionPlans.id, id));
    return NextResponse.json({ message: `VIP package deleted successfully` });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 400 });
  }
}
