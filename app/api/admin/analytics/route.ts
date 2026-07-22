import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data representing the analytics dashboard (KPIs, Top Dramas, Funnel)
  const data = {
    kpis: {
      totalActiveUsers: 124500,
      activeVipSubscribers: 8240,
      revenueMonthly: 215400000,
      rewardedAdViews: 1200000,
      growth: {
        users: 12.5,
        vip: 5.2,
        revenue: 18.0,
      }
    },
    topDramas: [
      {
        id: "d1",
        title: "Pembalasan Sang Miliarder",
        genre: "Miliarder",
        episodes: 85,
        views: 450000,
        completionRate: 78,
        cover: "https://images.unsplash.com/photo-1536440136628-849c177e76a1"
      },
      {
        id: "d2",
        title: "Cinta Bersemi di Kantor",
        genre: "Romantis",
        episodes: 60,
        views: 320000,
        completionRate: 65,
        cover: "https://images.unsplash.com/photo-1518770660439-4636190af475"
      }
    ],
    funnel: {
      paywallViews: 45000,
      checkoutStarted: 11000,
      paymentSuccess: 3600
    }
  };

  return NextResponse.json(data);
}
