import { NextResponse } from "next/server";
import { getOpportunities } from "@/lib/store";
export async function GET(){ return NextResponse.json({ opportunities: getOpportunities() }); }
