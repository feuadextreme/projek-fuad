import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../../db';
import { adSettings   } from '../../../../db/schema';

export async function GET() {
  try {
    let result = await db.select().from(adSettings).get();
    
    // Seed default if empty
    if (!result) {
      const defaultSettings = {
        id: "global_settings",
        adsEnabled: true,
        freeEpisodeCount: 2,
        episodesUnlockedPerAd: 2,
        dailyAdUnlockLimit: 10,
      };
      await db.insert(adSettings).values(defaultSettings);
      result = defaultSettings;
    }
    
    return NextResponse.json({ data: result });
  } catch (error) {
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const updateData = {
      adsEnabled: body.adsEnabled,
      freeEpisodeCount: body.freeEpisodeCount,
      episodesUnlockedPerAd: body.episodesUnlockedPerAd,
      dailyAdUnlockLimit: body.dailyAdUnlockLimit,
      androidUnitId: body.androidUnitId,
      iosUnitId: body.iosUnitId,
    };
    
    await db.update(adSettings).set(updateData).where(undefined); // Applies to all (should only be 1 row anyway)
    return NextResponse.json({ message: "Ad settings updated successfully", data: updateData });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }
}
