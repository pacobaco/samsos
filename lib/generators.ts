import OpenAI from "openai";
import { config } from "./config";
import { sagaDogProfile } from "./orgProfile";
import { Opportunity } from "./types";

export function generateRequirements(opp: Opportunity) {
  return `# Submission Requirements Checklist

## Opportunity
${opp.title}

## Notice ID
${opp.noticeId}

## Manual Verification Required
- Eligibility requirements
- SAM.gov entity registration status
- UEI/CAGE details
- Proposal due date and time zone
- Submission portal or email destination
- Required attachments
- Technical volume instructions
- Cost/pricing volume instructions
- Evaluation factors
- Amendment tracking procedure

## Draft Package
- Cover letter
- Technical proposal
- Management approach
- Cost proposal
- Compliance matrix
- Required forms

## Caution
Verify every requirement against the official SAM.gov notice and amendments.`;
}

export function generateProcedure(opp: Opportunity) {
  return `# Submission Procedure

## Opportunity
${opp.title}

1. Open the official notice and download attachments.
2. Confirm eligibility and set-aside restrictions.
3. Build a compliance matrix.
4. Draft technical and cost volumes.
5. Conduct compliance, pricing, and executive review.
6. Submit through the verified official channel.
7. Save confirmation receipt and final package.
8. Track agency messages and award status.`;
}

export async function generateAiProposal(opp: Opportunity) {
  if (!config.openaiApiKey) return `# Proposal Draft\n\nOPENAI_API_KEY is not configured.\n\n${config.orgName} proposes applied AI, data systems, software prototyping, and technical reporting support for ${opp.title}.`;
  const client = new OpenAI({ apiKey: config.openaiApiKey });
  const result = await client.chat.completions.create({
    model: config.openaiModel,
    temperature: 0.3,
    messages: [
      { role: "system", content: "You are a federal proposal drafting assistant. Be precise, conservative, and do not fabricate credentials, certifications, or award amounts." },
      { role: "user", content: `Generate a concise formal proposal offer.\n\nOrganization:\n${JSON.stringify(sagaDogProfile, null, 2)}\n\nOpportunity:\n${JSON.stringify(opp, null, 2)}\n\nSections: Executive Offer, Understanding of Need, Technical Approach, Deliverables, Timeline, Compliance Notes, Closing` }
    ]
  });
  return result.choices[0]?.message?.content || "No content generated.";
}
