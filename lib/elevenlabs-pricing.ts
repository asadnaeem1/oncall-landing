// ElevenLabs Agents pricing, copied by hand from https://elevenlabs.io/pricing/agents.
//
// ElevenLabs has no pricing API, and the site has no backend, so these numbers
// are static. Update them (and `asOf`) when ElevenLabs changes its prices.
//
// Only agent call minutes are modelled. Telephony (Twilio / SIP), LLM tokens
// and SMS are billed separately and are deliberately out of scope.

export const PRICING_URL = "https://elevenlabs.io/pricing/agents";

export type AgentPlan = {
  name: string;
  monthlyFee: number; // USD
  includedMinutes: number;
  concurrentCalls: number;
};

export type AgentPricing = {
  perMinute: number; // USD per call minute (included and additional)
  burstPerMinute: number; // USD per minute above the concurrency limit
  plans: AgentPlan[];
  asOf: string; // date the numbers were read from the pricing page
};

export const AGENT_PRICING: AgentPricing = {
  perMinute: 0.08,
  burstPerMinute: 0.16,
  plans: [
    { name: "Pro", monthlyFee: 99, includedMinutes: 1238, concurrentCalls: 20 },
    { name: "Scale", monthlyFee: 299, includedMinutes: 3738, concurrentCalls: 30 },
    { name: "Business", monthlyFee: 990, includedMinutes: 12375, concurrentCalls: 40 },
  ],
  asOf: "2026-11-20",
};
