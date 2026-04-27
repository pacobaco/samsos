import { sagaDogProfile } from "./orgProfile";
import { Opportunity } from "./types";
export function scoreOpportunity(opp: Opportunity): Opportunity {
  const text = [opp.title,opp.description,opp.agency,opp.type,opp.naicsCode,opp.setAside].filter(Boolean).join(" ").toLowerCase();
  const breakdown: Record<string, number> = { sagaDogKeywordFit:0, urgency:0, smallBusinessFit:0, technicalFit:0, publicValue:0 };
  for (const term of sagaDogProfile.keywords) if (text.includes(term.toLowerCase())) breakdown.sagaDogKeywordFit += 4;
  if (opp.deadline) breakdown.urgency += 15;
  if (text.includes("small business") || text.includes("set-aside") || text.includes("sbir") || text.includes("sttr")) breakdown.smallBusinessFit += 20;
  if (text.includes("software") || text.includes("data") || text.includes("prototype") || text.includes("technical") || text.includes("research")) breakdown.technicalFit += 20;
  if (text.includes("public") || text.includes("education") || text.includes("health") || text.includes("economic") || text.includes("community")) breakdown.publicValue += 10;
  const score = Math.min(Object.values(breakdown).reduce((a,b)=>a+b,0), 100);
  let priority: Opportunity["priority"] = "P3";
  if (score >= 85) priority = "P0"; else if (score >= 70) priority = "P1"; else if (score >= 50) priority = "P2";
  return { ...opp, score, priority, scoreBreakdown: breakdown };
}
