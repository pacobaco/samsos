import { NextRequest, NextResponse } from "next/server";
import { getSubmission, updateSubmission } from "@/lib/store";
export async function GET(_: NextRequest, {params}:{params:{noticeId:string}}){ const record=getSubmission(decodeURIComponent(params.noticeId)); if(!record) return NextResponse.json({ok:false,error:"Submission not found"},{status:404}); return NextResponse.json({submission:record}); }
export async function PATCH(req: NextRequest, {params}:{params:{noticeId:string}}){ const patch=await req.json(); const record=updateSubmission(decodeURIComponent(params.noticeId), patch); if(!record) return NextResponse.json({ok:false,error:"Submission not found"},{status:404}); return NextResponse.json({ok:true,submission:record}); }
