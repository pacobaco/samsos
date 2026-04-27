import { getOpportunity } from "@/lib/store";
import { generateProcedure, generateRequirements } from "@/lib/generators";
import { notFound } from "next/navigation";
export default function OpportunityDetail({ params }: { params: { noticeId: string } }) {
  const opp=getOpportunity(decodeURIComponent(params.noticeId)); if(!opp) return notFound();
  return <div className="grid"><section className="card"><span className={`badge ${opp.priority?.toLowerCase()}`}>{opp.priority}</span><h1>{opp.title}</h1><p className="muted">{opp.agency}</p><p>{opp.description}</p><p><strong>Score:</strong> {opp.score}/100</p><p><strong>Deadline:</strong> {opp.deadline || "Not specified"}</p></section><section className="card"><h2>Score Breakdown</h2><pre className="code">{JSON.stringify(opp.scoreBreakdown,null,2)}</pre></section><section className="card"><h2>Requirements</h2><pre className="code">{generateRequirements(opp)}</pre></section><section className="card"><h2>Submission Procedure</h2><pre className="code">{generateProcedure(opp)}</pre></section></div>;
}
