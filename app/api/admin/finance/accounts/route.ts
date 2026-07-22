import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../db';
import { paymentAccounts   } from '../../../../db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    const result = await db.select().from(paymentAccounts);
    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch accounts" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const newAccount = {
      id: `acc_${Date.now()}`,
      channelType: body.channelType || 'bank',
      bankOrProviderName: body.bankOrProviderName,
      accountNumber: body.accountNumber,
      accountHolderName: body.accountHolderName,
      qrImageUrl: body.qrImageUrl || null,
      isActive: body.isActive !== undefined ? body.isActive : true
    };
    
    await db.insert(paymentAccounts).values(newAccount);
    return NextResponse.json({ message: "Account created", data: newAccount }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
