export const DEAL_STAGES = {
  DISCOVERY: 'DISCOVERY',
  PROPOSAL: 'PROPOSAL',
  NEGOTIATION: 'NEGOTIATION',
  CONTRACT_SENT: 'CONTRACT_SENT',
  CLOSED_WON: 'CLOSED_WON',
  CLOSED_LOST: 'CLOSED_LOST',
} as const;

export type DealStageType = typeof DEAL_STAGES[keyof typeof DEAL_STAGES];

export const DEAL_STAGE_LABELS: Record<DealStageType, string> = {
  DISCOVERY: 'Discovery',
  PROPOSAL: 'Proposal',
  NEGOTIATION: 'Negotiation',
  CONTRACT_SENT: 'Contract Sent',
  CLOSED_WON: 'Closed Won',
  CLOSED_LOST: 'Closed Lost',
};

export const DEAL_STAGE_COLORS: Record<DealStageType, string> = {
  DISCOVERY: 'bg-blue-500',
  PROPOSAL: 'bg-purple-500',
  NEGOTIATION: 'bg-yellow-500',
  CONTRACT_SENT: 'bg-orange-500',
  CLOSED_WON: 'bg-green-500',
  CLOSED_LOST: 'bg-red-500',
};
