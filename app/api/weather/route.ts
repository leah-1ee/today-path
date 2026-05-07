import { NextResponse } from "next/server";
import { MOCK_WEATHER } from "@/lib/mockWeather";

export async function GET() {
  return NextResponse.json(MOCK_WEATHER);
}
