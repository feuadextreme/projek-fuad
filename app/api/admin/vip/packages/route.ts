import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../db';
import { subscriptionPlans   } from '../../../../db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const result = await db.select().from(subscriptionPlans);
    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch packages" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newPackage = {
      id: `pkg_${Date.now()}`,
      name: body.name,
      durationDays: body.durationDays || 30,
      price: body.price,
      promoLabel: body.promoLabel || null,
      isActive: body.isActive !== undefined ? body.isActive : true
    };
    
    await db.insert(subscriptionPlans).values(newPackage);
    return NextResponse.json({ message: "VIP package created", data: newPackage }, { status: 201 });
  } catch (error) {
    console.error("POST Package Error:", error);
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
