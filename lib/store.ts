import { mockOpportunities, mockSubmissions } from "./mockData";
import { Opportunity, SubmissionRecord, SubmissionStatus } from "./types";
let opportunities: Opportunity[] = [...mockOpportunities];
let submissions: SubmissionRecord[] = [...mockSubmissions];
export function getOpportunities(){ return opportunities.sort((a,b)=>(b.score||0)-(a.score||0)); }
export function setOpportunities(next: Opportunity[]){ opportunities = next; }
export function getOpportunity(id:string){ return opportunities.find(o=>o.noticeId===id); }
export function getSubmissions(){ return submissions.sort((a,b)=>(b.score||0)-(a.score||0)); }
export function getSubmission(id:string){ return submissions.find(s=>s.noticeId===id); }
export function createSubmission(opp: Opportunity){ const existing=getSubmission(opp.noticeId); if(existing) return existing; const now=new Date().toISOString(); const record: SubmissionRecord = { noticeId:opp.noticeId,title:opp.title,agency:opp.agency,priority:opp.priority,score:opp.score,status:"identified",deadline:opp.deadline,createdAt:now,updatedAt:now,nextAction:"Generate requirements checklist and submission procedure."}; submissions.push(record); return record; }
export function updateSubmission(id:string, patch: Partial<SubmissionRecord>){ const record=getSubmission(id); if(!record) return null; Object.assign(record, patch, {updatedAt:new Date().toISOString()}); if(patch.status) record.nextAction=nextActionForStatus(patch.status); return record; }
function nextActionForStatus(status: SubmissionStatus){ switch(status){case "identified":return "Generate requirements checklist and submission procedure.";case "requirements_generated":return "Generate submission procedure and begin proposal draft.";case "procedure_generated":return "Create proposal draft and compliance matrix.";case "drafting":return "Complete technical and cost volumes.";case "review":return "Run compliance, pricing, and final executive review.";case "ready":return "Submit through verified official channel before deadline.";case "submitted":return "Save receipt and monitor agency messages/amendments.";case "won":return "Prepare award onboarding and delivery kickoff.";case "lost":return "Archive package and request debrief if available.";case "archived":return "No immediate action.";}}
