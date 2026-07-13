export type ConnectedDecisionId =
  | "foundation"
  | "legal"
  | "compliance"
  | "finance"
  | "growth"
  | "advisory";

export interface ConnectedDecisionItem {
  id: ConnectedDecisionId;
  label: string;
  eyebrow: string;
  heading: string;
  description: string;
  insight: string;
  links: Array<{ label: string; href: string }>;
}
