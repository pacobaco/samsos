import { NextResponse } from "next/server";
import { getOpportunities, setOpportunities } from "@/lib/store";
import { scoreOpportunity } from "@/lib/scorer";
export async function POST(){ const ranked=getOpportunities().map(scoreOpportunity).sort((a,b)=>(b.score||0)-(a.score||0)); setOpportunities(ranked); return NextResponse.json({ok:true,opportunities:ranked}); }
