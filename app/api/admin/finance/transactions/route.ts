import { NextRequest, NextResponse } from 'next/server';

let transactions = [
  {
    id: "txn_1",
    user: { id: "usr_8912", name: "Budi Santoso", email: "budi@example.com" },
    package: { id: "pkg_2", name: "VIP Bulanan" },
    amount: 45027,
    bankCode: "BCA",
    proofUrl: "https://example.com/proof1.jpg",
    status: "pending"
  }
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || 'pending';
  
  const result = transactions.filter(t => t.status === status);
  return NextResponse.json({ data: result });
}
