// The existing quote endpoint is shared by both forms. Confirm delivery in the
// client's Formspree account before production sign-off.
export async function submitEnquiry(fields: Record<string, unknown>): Promise<void> {
  const response = await fetch('https://formspree.io/f/xgoovnnw', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...fields, _subject: 'Hampshire Roof Care website enquiry' }),
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error('Enquiry submission failed');
}
