import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }
    if (!file.name.toLowerCase().endsWith('.mp4') && file.type !== 'video/mp4') {
      return NextResponse.json({ error: "Only MP4 files are allowed" }, { status: 400 });
    }

    const zone = process.env.BUNNY_STORAGE_ZONE;
    const endpoint = process.env.BUNNY_STORAGE_ENDPOINT;
    const apiKey = process.env.BUNNY_STORAGE_API_KEY;
    const pullZone = process.env.BUNNY_PULL_ZONE;

    if (!zone || !endpoint || !apiKey || !pullZone) {
      console.error("Missing Bunny.net configuration in .env");
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const timestamp = Date.now();
    const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
    const fileName = `${timestamp}_${cleanFileName}`;
    const uploadUrl = `${endpoint}/${fileName}`;

    const arrayBuffer = await file.arrayBuffer();
    let buffer = Buffer.from(arrayBuffer);

    // Apply Web Optimization (Fast Start) by moving moov atom
    try {
      if (file.name.toLowerCase().endsWith('.mp4') || file.type === 'video/mp4') {
        const { faststart } = require('moov-faststart');
        const optimizedBuffer = faststart(buffer);
        if (optimizedBuffer) {
          buffer = optimizedBuffer;
          console.log("Video successfully web-optimized (moov atom moved to faststart)");
        }
      }
    } catch (e: any) {
      console.warn("Could not optimize video for fast start, uploading original:", e.message);
    }

    const response = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        "AccessKey": apiKey,
        "Content-Type": file.type || "video/mp4",
      },
      body: buffer,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Bunny API Error:", errorText);
      throw new Error(`Upload failed with status: ${response.status}`);
    }

    const cdnUrl = `https://${pullZone}/${fileName}`;
    
    return NextResponse.json({ url: cdnUrl, message: "Upload successful" }, { status: 200 });
  } catch (error: any) {
    console.error("Upload error:", error);
    return NextResponse.json({ error: error.message || "Failed to upload file" }, { status: 500 });
  }
}
