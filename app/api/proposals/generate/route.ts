import { NextRequest, NextResponse } from "next/server";
import { getOpportunity } from "@/lib/store";
import { generateAiProposal } from "@/lib/generators";
export async function POST(req: NextRequest){ const body=await req.json(); const opp=getOpportunity(body.noticeId); if(!opp) return NextResponse.json({ok:false,error:"Opportunity not found"},{status:404}); const proposal=await generateAiProposal(opp); return NextResponse.json({ok:true,proposal}); }
