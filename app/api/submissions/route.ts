import { NextRequest, NextResponse } from "next/server";
import { createSubmission, getOpportunity, getSubmissions } from "@/lib/store";
export async function GET(){ return NextResponse.json({submissions:getSubmissions()}); }
export async function POST(req: NextRequest){ const {noticeId}=await req.json(); const opp=getOpportunity(noticeId); if(!opp) return NextResponse.json({ok:false,error:"Opportunity not found"},{status:404}); return NextResponse.json({ok:true,submission:createSubmission(opp)}); }
