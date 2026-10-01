// Editorial relationships: link readers to the service relevant to their question.
export const guideServices: Record<string, string[]> = {
  'water-stain-on-ceiling-after-rain': ['roof-repairs', 'leadwork-and-lead-flashing'],
  'slipped-roof-tiles': ['roof-repairs', 'roof-pointing-and-cement-work'],
  'chimney-leaks': ['leadwork-and-lead-flashing', 'roof-pointing-and-cement-work'],
  'flat-roof-bubbling': ['flat-roof-replacement', 'roof-repairs'],
  'how-site-survey-works': ['roof-repairs', 'pitched-roof-replacement', 'flat-roof-replacement'],
  'lead-flashing-explained': ['leadwork-and-lead-flashing', 'roof-repairs'],
};

export const serviceQuestions: Record<string, Array<{ question: string; answer: string }>> = {
  'roof-repairs': [
    { question: 'Does a leaking roof always need replacing?', answer: 'A leak alone does not tell us whether the whole roof needs replacing. The survey looks at the source, the surrounding covering and the condition of the roof so we can explain whether a local repair is suitable.' },
    { question: 'What should I include when asking about a repair?', answer: 'Tell us your postcode, what you have noticed and when it happens, such as during heavy rain. Mention any previous repairs. Photographs taken safely from ground level or inside the property can help us prepare for the survey.' },
  ],
  'pitched-roof-replacement': [
    { question: 'Can I discuss a repair before choosing a replacement?', answer: 'Yes. We assess the existing roof before recommending work. Tell us about previous leaks or repairs so we can explain the options and the scope of any proposed replacement.' },
    { question: 'What affects the replacement quote?', answer: 'Roof size and shape, access and scaffolding, the chosen covering and the condition of the supporting materials all affect the work. The site survey allows us to set out the proposed scope and discuss material choices before quoting.' },
  ],
  'flat-roof-replacement': [
    { question: 'How do you choose a flat roof system?', answer: 'We assess the existing covering, deck, drainage, edges and junctions, then discuss how the roof is used. The recommendation and quote should identify the proposed system and any related work needed.' },
    { question: 'Does the quote include the deck and insulation?', answer: 'That depends on the condition and scope established at the survey. Ask us to identify what will be retained, replaced or upgraded, and to explain the specific material and workmanship guarantee terms before you decide.' },
  ],
  'leadwork-and-lead-flashing': [
    { question: 'Is a chimney leak always caused by flashing?', answer: 'Flashing is one possible source, but the surrounding roof covering, mortar and chimney details also need checking. We inspect the junction and explain the proposed repair rather than assuming the visible damp patch identifies the cause.' },
    { question: 'Can existing leadwork be repaired?', answer: 'The answer depends on its condition and the way it has been installed. Our survey considers whether a repair is suitable or whether a section needs replacement, and the quote explains the proposed work.' },
  ],
  'roof-pointing-and-cement-work': [
    { question: 'Is repointing the same as rebedding ridge tiles?', answer: 'They describe different work. Repointing renews exposed mortar joints; rebedding involves lifting tiles and renewing their bedding. The condition of the tiles and bedding determines which work should be considered.' },
    { question: 'What details help when I enquire about pointing?', answer: 'Tell us whether you have seen cracked mortar, loose-looking ridge tiles or debris below the roof, and whether there is a leak. Do not climb up to check; we can assess the roof during a site survey.' },
  ],
};

// Image subjects recorded during the Business Profile photo review; no town attribution.
export const roofingGallery = [
  { src: '/ourwork-1.jpg', alt: 'Lead valley and abutment work' },
  { src: '/ourwork-2.jpg', alt: 'Completed pitched roof' },
  { src: '/ourwork-3.jpg', alt: 'Lead-covered entrance canopy' },
  { src: '/ourwork-4.jpg', alt: 'Completed flat roof' },
];
