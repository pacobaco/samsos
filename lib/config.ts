export const config = {
  orgName: process.env.ORG_NAME || "Saga Dog Corp",
  samApiKey: process.env.SAM_API_KEY || "",
  openaiApiKey: process.env.OPENAI_API_KEY || "",
  openaiModel: process.env.OPENAI_MODEL || "gpt-4.1-mini",
  samEndpoint: "https://api.sam.gov/opportunities/v2/search",
  defaultKeyword: process.env.SAM_KEYWORD || "artificial intelligence software data cybersecurity research",
  postedFrom: process.env.SAM_POSTED_FROM || "04/01/2026",
  postedTo: process.env.SAM_POSTED_TO || "04/24/2026",
  limit: Number(process.env.SAM_LIMIT || "10")
};
