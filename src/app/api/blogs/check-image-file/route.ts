import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const fileName = url.searchParams.get("fileName");

  console.log("Requested file:", fileName);

  if (!fileName) {
    return NextResponse.json(
      { error: "No fileName provided" },
      { status: 400 }
    );
  }

  const filePath = path.join(process.cwd(), "public", fileName);

  if (fs.existsSync(filePath)) {
    console.log(`File exists at ${filePath}`);
    return NextResponse.json({ fileExists: true }, { status: 200 });
  } else {
    console.log(`File does not exist at ${filePath}`);
    return NextResponse.json({ fileExists: false }, { status: 404 });
  }
}
