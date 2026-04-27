import { NextResponse } from "next/server";
import { getOpportunities, getSubmissions } from "@/lib/store";
export async function GET(){ const opportunities=getOpportunities(); const submissions=getSubmissions(); return NextResponse.json({generatedAt:new Date().toISOString(),summary:{opportunities:opportunities.length,p0:opportunities.filter(o=>o.priority==="P0").length,p1:opportunities.filter(o=>o.priority==="P1").length,submissions:submissions.length},topOpportunities:opportunities.slice(0,10),submissions}); }
