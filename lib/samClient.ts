import axios from "axios";
import { config } from "./config";
import { Opportunity } from "./types";
import { scoreOpportunity } from "./scorer";

export async function fetchSamOpportunities(): Promise<Opportunity[]> {
  if (!config.samApiKey || config.samApiKey === "your_sam_gov_api_key") throw new Error("Missing SAM_API_KEY.");
  const params = { api_key: config.samApiKey, limit: config.limit, offset: 0, postedFrom: config.postedFrom, postedTo: config.postedTo, keyword: config.defaultKeyword };
  const res = await axios.get(config.samEndpoint, { params });
  const raw = res.data?.opportunitiesData || [];
  return raw.map((item: any) => scoreOpportunity({
    noticeId: item.noticeId || item.solicitationNumber || item.title || makeId(item),
    title: item.title || "Untitled Opportunity",
    agency: item.fullParentPathName || item.organizationName || item.department || "",
    description: item.description || item.title || "",
    deadline: item.responseDeadLine || item.responseDeadline || "",
    postedDate: item.postedDate || "",
    url: item.uiLink || "",
    type: item.type || item.noticeType || "",
    naicsCode: item.naicsCode || "",
    setAside: item.typeOfSetAsideDescription || item.typeOfSetAside || ""
  }));
}
function makeId(item: unknown): string { const raw=JSON.stringify(item).slice(0,64); let hash=0; for(let i=0;i<raw.length;i++){ hash=((hash<<5)-hash)+raw.charCodeAt(i); hash|=0;} return `samsos-${Math.abs(hash)}`; }
