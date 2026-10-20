# Milktree Agency | Hampshire Roofcare

## October on-page content — draft prepared 15 October 2026

Status: local editorial draft, not implemented or published. Asa should check the roofing advice and service commitments before implementation. Existing service areas remain unchanged. No prices, roof lifespans, customer stories, accreditations or guarantees have been invented.

### New guide specification

- Proposed path: `/guides/roof-repair-or-replacement`
- Title: `Roof Repair or Replacement? | Hampshire Roof Care`
- Description: `Unsure whether your roof needs a repair or replacement? Questions to ask at a roof survey, what to compare in a quote and how to plan your next step.`
- H1: `Does your roof need a repair or a replacement?`
- Purpose: help a homeowner prepare for a survey; connect existing symptom guides to the repairs and pitched-replacement service pages.

### Draft article

A leak or slipped tile can leave you wondering whether you need a small repair or a much bigger job. The useful starting point is to establish what has failed, how far the problem extends and what condition the surrounding roof is in. A photograph or the age of the roof alone cannot settle that decision.

#### Questions to ask about a repair

Ask the roofer to show you the affected area and explain the likely cause. Is the proposed work limited to one location, or are there similar problems elsewhere? What will be repaired, and what parts of the roof will remain as they are?

A useful repair proposal should make its scope clear. Ask how the work addresses the identified problem, what access is needed, and whether there are other issues to monitor. If a previous repair has not resolved a leak, share that history before agreeing to another job.

See our [roof repair service](/services/roof-repairs) and [slipped roof tile guide](/guides/slipped-roof-tiles) for related information.

#### Questions to ask about replacement

If replacement is recommended, ask why a repair would not be a suitable option. Request an explanation of the condition observed, which parts are included in the replacement and any areas that could not be inspected.

Ask about the proposed covering, the work beneath it, access arrangements and how any additional findings would be handled. The written proposal should distinguish the agreed scope from items that may need a separate decision. This makes it easier to understand what you are comparing when you receive more than one quotation.

Our [pitched roof replacement service](/services/pitched-roof-replacement) explains the next step for homeowners considering that work.

#### Compare the scope, not just the headline price

Two quotes may describe different jobs. Before choosing, check whether they cover the same roof areas, materials, access, removal of old materials and making good. Ask each contractor to explain exclusions and any guarantee in writing, including what it covers and who provides it.

You do not need to decide between repair and replacement before asking for a survey. Ask for the reasons behind the recommendation and a clear account of your options. Where something remains uncertain, ask how and when it can be checked.

#### Prepare for the conversation

Note when you first noticed the issue, whether it changes after rain and what work has been done previously. Existing photographs and earlier quotes can help explain the history. There is no need to climb onto the roof to prepare for an enquiry.

Tell us your location, what you have noticed and whether the issue has happened before. [Contact Hampshire Roofcare](/contact) to discuss the next step, or read [what happens during a site survey](/guides/how-site-survey-works).

### Existing-page edits to implement with the guide

| Page | Proposed addition | Review needed |
| --- | --- | --- |
| Roof repairs | A short “Repair or replacement?” section: “Not sure how much work is needed? Explain the symptoms and any previous repairs when you enquire. Our repair-or-replacement guide lists questions to ask before agreeing to the work.” Link to the new guide. | Confirm actual survey/quotation process; add a genuine repair example when supplied. |
| Pitched replacement | A “What should your quotation explain?” checklist covering roof areas, materials, access, exclusions and handling additional findings. Link to new guide and survey guide. | Asa to confirm technical scope and wording; no assumed guarantee terms. |
| Slipped-tile guide | Add a preparation section asking for location, when first noticed and previous work; link to repairs, new decision guide and contact. Keep practical advice clear and avoid DIY roof-access instructions. | Roofer review of existing urgency claims; do not promise response times. |
| Guides index | Add a descriptive link to the new decision guide. Ensure the new route appears in the generated sitemap and static output. | Test title, description, self-canonical, one H1, links and mobile reading order. |

Use an original project only when the client supplies the actual location, work description, photo rights and approved wording. The small Search Console signals for New Forest and lead flashing can inform a later refinement; they do not justify duplicated town pages.

### Implementation acceptance

Add the guide using the existing content model and route generation. Include contextual links from both service pages and the slipped-tile guide, then rebuild. Run `npm run check`, inspect the preview on mobile, check the new page's static HTML/metadata and verify existing routes. Include the already prepared public-email correction in the reviewed release. Only record the content as live after an authorised deployment and public checks.
