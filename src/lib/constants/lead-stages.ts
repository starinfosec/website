export const LEAD_STAGES = {
  NEW_LEAD: 'NEW_LEAD',
  QUALIFIED: 'QUALIFIED',
  PROPOSAL_SENT: 'PROPOSAL_SENT',
  NEGOTIATION: 'NEGOTIATION',
  CLOSED_WON: 'CLOSED_WON',
  CLOSED_LOST: 'CLOSED_LOST',
} as const;

export type LeadStageType = typeof LEAD_STAGES[keyof typeof LEAD_STAGES];

export const LEAD_STAGE_LABELS: Record<LeadStageType, string> = {
  NEW_LEAD: 'New Lead',
  QUALIFIED: 'Qualified',
  PROPOSAL_SENT: 'Proposal Sent',
  NEGOTIATION: 'Negotiation',
  CLOSED_WON: 'Closed Won',
  CLOSED_LOST: 'Closed Lost',
};

export const LEAD_STAGE_COLORS: Record<LeadStageType, string> = {
  NEW_LEAD: 'bg-blue-500',
  QUALIFIED: 'bg-purple-500',
  PROPOSAL_SENT: 'bg-yellow-500',
  NEGOTIATION: 'bg-orange-500',
  CLOSED_WON: 'bg-green-500',
  CLOSED_LOST: 'bg-red-500',
};

export const LEAD_SOURCES = {
  WEBSITE: 'WEBSITE',
  INSTAGRAM: 'INSTAGRAM',
  LINKEDIN: 'LINKEDIN',
  REFERRAL: 'REFERRAL',
  OTHER: 'OTHER',
} as const;

export type LeadSourceType = typeof LEAD_SOURCES[keyof typeof LEAD_SOURCES];

export const LEAD_SOURCE_LABELS: Record<LeadSourceType, string> = {
  WEBSITE: 'Website',
  INSTAGRAM: 'Instagram',
  LINKEDIN: 'LinkedIn',
  REFERRAL: 'Referral',
  OTHER: 'Other',
};
