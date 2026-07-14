import type { FooterContactActionId } from "../site-footer.types";

type FooterIconProps = { type: FooterContactActionId };

export function FooterIcon({ type }: FooterIconProps) {
  if (type === "call") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.8 4.8 5.2c-.8.5-1.2 1.4-1 2.3 1.2 6.5 6.2 11.5 12.7 12.7.9.2 1.8-.2 2.3-1l1.4-2.4c.4-.7.2-1.6-.5-2l-3.1-1.8c-.6-.4-1.4-.2-1.9.3l-1.1 1.4a12 12 0 0 1-4.3-4.3l1.4-1.1c.6-.5.7-1.3.3-1.9L9.2 4.3c-.4-.7-1.3-.9-2-.5Z"/><path d="M15.8 4.6a5.2 5.2 0 0 1 3.6 3.6"/><path d="M15.9 1.8a8.1 8.1 0 0 1 6.3 6.3"/></svg>;
  }
  if (type === "whatsapp") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 11.7a8.2 8.2 0 0 1-12 7.2L4 20l1.1-4.1a8.2 8.2 0 1 1 15.1-4.2Z"/><path d="M8.6 7.9c.3-.5.6-.5 1-.5h.4c.2 0 .4.1.5.5l.8 2c.1.3 0 .6-.2.8l-.7.8a7.5 7.5 0 0 0 3.7 3.2l.9-1.1c.2-.3.5-.4.8-.2l2 .9c.3.1.5.4.4.7-.2 1-.9 1.8-1.9 2-1.2.2-3.2-.4-5.2-2.2-2.3-2-3.4-4.3-3.3-5.5 0-.5.3-1 .8-1.4Z"/></svg>;
  }
  if (type === "instagram") {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.7" r=".8"/></svg>;
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.4 21v-8h2.8l.4-3h-3.2V8.1c0-.9.3-1.6 1.7-1.6h1.7V3.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H8v3h2.8v8h3.6Z"/></svg>;
}
