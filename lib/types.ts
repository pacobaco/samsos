export type Priority = "P0" | "P1" | "P2" | "P3";
export type Opportunity = { noticeId:string; title:string; agency?:string; description?:string; deadline?:string; postedDate?:string; url?:string; type?:string; naicsCode?:string; setAside?:string; score?:number; priority?:Priority; scoreBreakdown?:Record<string,number>; };
export type SubmissionStatus = "identified"|"requirements_generated"|"procedure_generated"|"drafting"|"review"|"ready"|"submitted"|"won"|"lost"|"archived";
export type SubmissionRecord = { noticeId:string; title:string; agency?:string; priority?:Priority; score?:number; status:SubmissionStatus; requirements?:string; procedure?:string; proposal?:string; deadline?:string; createdAt:string; updatedAt:string; nextAction:string; };
