import { NextRequest, NextResponse } from 'next/server';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { action } = body; // 'verify' or 'reject'
    
    if (action === 'verify') {
      return NextResponse.json({ 
        message: `Transaction ${id} verified. User VIP activated.`,
        data: { id: id, status: "success" }
      });
    } else if (action === 'reject') {
      return NextResponse.json({ 
        message: `Transaction ${id} rejected.`,
        data: { id: id, status: "rejected" }
      });
    }
    
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
