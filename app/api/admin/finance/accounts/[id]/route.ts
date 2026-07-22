import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../../db';
import { paymentAccounts   } from '../../../../../db/schema';
import { eq } from 'drizzle-orm';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const updateData = {
      channelType: body.channelType,
      bankOrProviderName: body.bankOrProviderName,
      accountNumber: body.accountNumber,
      accountHolderName: body.accountHolderName,
      qrImageUrl: body.qrImageUrl !== undefined ? body.qrImageUrl : undefined,
      isActive: body.isActive
    };
    await db.update(paymentAccounts).set(updateData).where(eq(paymentAccounts.id, id));
    return NextResponse.json({ message: `Account updated`, data: { id: id, ...updateData } });
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
    await db.delete(paymentAccounts).where(eq(paymentAccounts.id, id));
    return NextResponse.json({ message: `Account deleted` });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 400 });
  }
}
