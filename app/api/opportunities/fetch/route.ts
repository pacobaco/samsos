import { NextResponse } from "next/server";
import { fetchSamOpportunities } from "@/lib/samClient";
import { setOpportunities } from "@/lib/store";
export async function POST(){ try{ const opportunities=await fetchSamOpportunities(); setOpportunities(opportunities); return NextResponse.json({ok:true,count:opportunities.length,opportunities}); } catch(err:any){ return NextResponse.json({ok:false,error:err.message||String(err)},{status:500}); } }
