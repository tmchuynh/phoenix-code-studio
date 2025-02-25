import fs from "fs";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

/**
 * Handles the GET request to check if a specified image file exists in the public directory.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {Promise<NextResponse>} - A promise that resolves to a JSON response indicating whether the file exists.
 *
 * The request should include a query parameter `fileName` which specifies the name of the file to check.
 * If `fileName` is not provided, the response will have a status of 400 with an error message.
 * If the file exists, the response will have a status of 200 with `fileExists` set to true.
 * If the file does not exist, the response will have a status of 404 with `fileExists` set to false.
 */
export async function GET(req: NextRequest): Promise<NextResponse> {
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
