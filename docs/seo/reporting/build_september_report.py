from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, Image
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from pathlib import Path
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from svglib.svglib import svg2rlg
from reportlab.graphics import renderPDF
ROOT=Path(__file__).resolve().parents[3]
BRAND=ROOT/"docs/seo/brand"
pdfmetrics.registerFont(TTFont("ReportSans", str(BRAND/"fonts/Satoshi-Regular.ttf")))
pdfmetrics.registerFont(TTFont("ReportSans-Bold", str(BRAND/"fonts/Satoshi-Bold.ttf")))
pdfmetrics.registerFont(TTFont("ReportHeading", str(BRAND/"fonts/InstrumentSans-Bold.ttf")))
pdfmetrics.registerFontFamily("ReportSans", normal="ReportSans", bold="ReportSans-Bold", italic="ReportSans", boldItalic="ReportSans-Bold")

OUT=ROOT/'output/pdf/Hampshire-Roof-Care-September-SEO-Report.pdf'
G=colors.HexColor('#141200'); C=colors.HexColor('#141200'); INK=colors.HexColor('#171717'); MUT=colors.HexColor('#555555'); PALE=colors.HexColor('#F5F5F0'); LINE=colors.HexColor('#DDDDD6'); YELLOW=colors.HexColor('#FFEE02')
styles=getSampleStyleSheet()
for name,size,lead,col,font in [('TitleX',31,35,G,'ReportHeading'),('H1X',25,29,G,'ReportHeading'),('H2X',14,18,G,'ReportHeading'),('BodyX',10.5,14.5,INK,'ReportSans'),('SmallX',8.5,12,MUT,'ReportSans'),('LabelX',9,12,C,'ReportSans-Bold'),('CardX',25,30,G,'ReportSans-Bold')]:
 styles.add(ParagraphStyle(name,fontName=font,fontSize=size,leading=lead,textColor=col,spaceAfter=7))
styles.add(ParagraphStyle('CellX',parent=styles['BodyX'],fontSize=9.5,leading=13,spaceAfter=0))
styles.add(ParagraphStyle('WhiteX',parent=styles['CellX'],textColor=colors.white,fontName='ReportSans-Bold'))
W=A4[0]-96
story=[]
def p(text,style='BodyX'):return Paragraph(text,styles[style])
def add(text,style='BodyX'):story.append(p(text,style))
def gap(n=7):story.append(Spacer(1,n))
def h(kicker,title,sub):
 add(kicker.upper(),'LabelX');add(title,'H1X');add(sub);gap(6)
def section(title,text):story.append(KeepTogether([p(title,'H2X'),p(text),Spacer(1,5)]))
def table(headers,rows,widths):
 data=[[p(v,'WhiteX') for v in headers]]+[[p(v,'CellX') for v in row] for row in rows]
 t=Table(data,colWidths=widths,hAlign='LEFT',repeatRows=1)
 t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),G),('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),8),('RIGHTPADDING',(0,0),(-1,-1),8),('TOPPADDING',(0,0),(-1,-1),8),('BOTTOMPADDING',(0,0),(-1,-1),8),('ROWBACKGROUNDS',(0,1),(-1,-1),[PALE,colors.white]),('LINEBELOW',(0,1),(-1,-1),0.4,LINE)]));story.append(t);gap(12)
def note(title,text):
 t=Table([[p(title,'H2X')],[p(text)]],colWidths=[W]);t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),PALE),('LEFTPADDING',(0,0),(-1,-1),16),('RIGHTPADDING',(0,0),(-1,-1),16),('TOPPADDING',(0,0),(-1,0),13),('BOTTOMPADDING',(0,-1),(-1,-1),8)]));story.append(t);gap(12)
def source(label,url):add(f'<link href="{url}" color="#141200"><u>{label}</u></link>','SmallX')
def page():story.append(PageBreak())

# 1: Executive report
gap(35)
add('SEPTEMBER 2026 · SEO SETUP & FOUNDATIONS','LabelX')
add('A stronger foundation<br/>for local enquiries','TitleX')
add('Hampshire Roof Care Company','H2X')
add('September setup scope, finalised 1 October 2026.<br/>Includes the October action plan and a current local-market review.','SmallX');gap(14)
add('The website is now easier for Google to read, clearer for homeowners to navigate, and equipped to measure visits and enquiry actions. The focus has been on fixing the foundations before building local visibility.');gap(7)
metrics=[('23','pages discovered<br/>through the sitemap'),('5 + 4','service and local-area<br/>pages improved'),('2','September enquiries<br/>verified in Formspree')]
t=Table([[p(n,'CardX') for n,_ in metrics],[p(l,'SmallX') for _,l in metrics]],colWidths=[W/3]*3);t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),YELLOW),('LEFTPADDING',(0,0),(-1,-1),14),('TOPPADDING',(0,0),(-1,0),13),('BOTTOMPADDING',(0,1),(-1,1),12)]));story.append(t);gap(21)
section('What has changed','Core technical issues have been corrected, service and advice pages are better connected, analytics is live, and Google Business Profile setup is complete and awaiting verification.')
section('What the early evidence tells us','Google has processed the sitemap and accepted an indexing request for the roof-repairs page. Formspree shows two September enquiries: a slipped-tile repair on 13 September and a reroofing quote on 26 September. The business confirms inbox delivery. Neither is attributed to SEO; outcomes are not yet recorded.')
note('October priority','Publish useful new content, improve the repair and replacement pages, and reduce mobile loading delays. Add a real local project page when evidence is supplied, then prepare a Google review link and QR code after profile approval.')
add('This is a setup report, not a September traffic-growth report. Measurement was activated on 1 October; a reliable before-and-after organic-performance comparison is not yet available.','SmallX')
page()

# 2
h('01 / Website improvements','Making the website easier to find and use','The work covers the existing website and service areas, with improvements designed to help both Google and potential customers.')
table(['Completed work','Value for the business'],[
('Google-readable pages','Page content, headings and search information now arrive in the page itself, reducing dependence on extra scripts before Google can read them.'),
('Clear page titles and main headings','Services and Hampshire coverage are easier to identify. Duplicate company names were removed from all six guide titles.'),
('One preferred website address','Search signals now use the same www address. A fresh sitemap lists 23 search-ready pages; policy pages are kept out.'),
('Correct missing-page handling','Invalid addresses now return a proper “page not found” response instead of appearing to be valid pages.'),
('Useful service and location content','All five service pages have relevant survey questions. Four area pages link to the services homeowners are looking for.'),
('Better routes from advice to enquiry','Six guides now connect to relevant services. Those links remain available on mobile, with article content placed before secondary information.'),
('Clearer FAQs and images','FAQ answers are included in page HTML and controls are more accessible. Gallery captions describe the work without implying unverified town locations.'),
('More reliable contact experience','Contact-form success and error handling was repaired, mobile layout issues were fixed and the nonfunctional photo-upload prompt was removed.'),
],[165,W-165])
section('Quality control completed','Build, analytics and SEO checks passed across 26 page routes plus the missing-page page. Checks covered unique titles, sitemap coverage, internal links, structured data and mobile interactions.')
add('Unsupported review totals and experience/project statistics were replaced with service information. Existing feedback was received in person, according to the business. Customer-approved wording and permission are needed for published testimonials; insurance and guarantee wording still need supporting records.','SmallX')
page()

# 3
h('02 / Google & enquiry measurement','From setup to measurable progress','The reporting tools are connected. October will establish the first useful measurement baseline.')
section('Google Search Console: connected','The domain is verified and linked to Analytics. Google successfully processed the 23-page sitemap. Its live test confirmed that the roof-repairs page is available for indexing, and the indexing request was accepted. Discovery and submission do not mean every page is already indexed.')
section('Google Analytics: live and tested','Analytics is configured for UK time and GBP. A live test visit reached the correct property with the correct page title. Tracking starts after analytics consent, and visitors can change their choice in the footer.')
table(['What we will measure','What it means'],[
('Accepted website enquiry','The form provider accepted the request. Marked as the primary enquiry event when the visitor has consented to analytics.'),
('Phone / email link clicks','Useful expressions of interest, kept separate from completed calls or emails.'),
('Organic visits and search visibility','Visits from search, pages found in Google, search clicks and impressions. These need a complete reporting period before comparison.'),
('Qualified enquiries / booked work','Business-confirmed outcomes. These are more meaningful than traffic alone and need follow-up from the team.'),
],[165,W-165])
section('Google Business Profile: awaiting verification','The profile is prepared with services, coverage, contact information, a description, logo and work photos. The setup record lists nine services and seven work photos. Public visibility will be checked once Google approves verification.')
note('September enquiries: checked in Formspree','Two submissions are dated 13 September (slipped-tile repair) and 26 September (reroofing quote). Inbox delivery is business-confirmed. They pre-date the 1 October setup completion, and their traffic source is unknown. They are existing website enquiries, not evidence of SEO uplift.')
add('Reviews are scheduled twice monthly, on the 1st and 15th at 9am UK time. Reporting preparation is configured; no always-on cloud reporting collector is being claimed.','SmallX')
page()

# 4
h('03 / Local competitor snapshot','How nearby roofers present themselves','Three relevant businesses were reviewed for service overlap and local coverage. This is a website-positioning comparison, observed on 1 October, not a ranking or traffic league table.')
section('South Hants Roofing | Chandler’s Ford & Hampshire','Its website highlights its Chandler’s Ford base, coverage across Southampton, Winchester and the New Forest, separate roofing-system pages, a gallery, and stated heritage-building experience. The positioning combines local identity with technical specialisms.')
add('<b>Our response:</b> make the existing services equally easy to understand, then add a genuine local project showing the problem, proposed work and finished result. Only use specialist or guarantee claims that the business can substantiate.')
source('Source: South Hants Roofing - About us','https://southhantsroofing.co.uk/about-us/');gap(7)
section('Ringway UK Roofing Service | Southampton & surrounding areas','Its homepage combines a callback form and WhatsApp route with service links, named coverage areas and a link to its Checkatrade page. The emphasis is on making contact easy and providing an external place to check customer feedback.')
add('<b>Our response:</b> retain the clear survey and phone routes, use the confirmed public email, asa@hampshireroofcare.co.uk, consistently and make it easy for genuine customers to leave Google reviews after profile approval.')
source('Source: Ringway UK Roofing Service - homepage','https://www.ringwayroofing.co.uk/');gap(7)
section('Forest Park Roofing | New Forest','Its site names New Forest towns and shows photographs captioned with roofing materials and locations, including Lyndhurst and Lymington. It also presents a service list, gallery and testimonials, making local work examples a visible part of its proposition.')
add('<b>Our response:</b> build a small library of permission-cleared work photos with accurate town, roof type and job details. One well-documented project will offer more useful proof than repeating the same gallery as if it belongs to every town.')
source('Source: Forest Park Roofing - homepage','https://www.forestparkroofing.co.uk/');gap(7)
note('The market opportunity','Local competitors make services, trust and contact options prominent. Hampshire Roof Care can compete on clear explanations and evidenced local work, supported by a faster mobile experience. This is a strategic inference from the pages reviewed, not a forecast of rankings.')
add('Competitor claims are described as presented on their websites; credentials, review totals and commercial performance were not independently verified.','SmallX')
page()

# 5
h('04 / Mobile speed baseline','The next measurable improvement','Google PageSpeed Insights tested the live homepage and roof-repairs page on 1 October 2026, using a simulated mobile device on a slow 4G connection.')
table(['Audit result','Homepage','Roof repairs'],[
('Performance score / 100','56','69'),
('Basic SEO checks / 100','100','100'),
('Accessibility checks / 100','93','98'),
('Browser best-practice checks / 100','58','100'),
('First visible content','5.5 seconds','3.0 seconds'),
('Main content visible (LCP)','12.2 seconds','12.8 seconds'),
('Layout movement (CLS)','0','0'),
],[W-210,105,105])
section('What is working','Both tested pages passed the audit’s basic SEO checks, and neither showed layout movement during the test. These are useful technical signals, not proof of high Google rankings or a complete accessibility sign-off.')
section('What needs attention','The homepage transferred about 17.6 MiB during the test. Vimeo accounted for roughly 93% of that payload. The roof-repairs page also loaded slowly; its audit identified oversized images with an estimated 2,541 KiB of potential savings. Both pages showed delayed rendering and blocking resources.')
section('Recommended October fix','Use a lightweight first view on mobile and defer the background video; serve appropriately sized modern images; reduce resources that delay visible text; then repeat the same mobile tests. Review Vimeo-related cookie/browser warnings and remaining contrast/heading issues as part of the release.')
add('Targets for the next comparison: materially reduce initial downloads and time to main content while preserving stable layout. Audit savings are estimates and must not be added together or treated as achieved improvements.','SmallX')
source('Open the homepage mobile audit','https://pagespeed.web.dev/analysis/https-www-hampshireroofcare-co-uk/pqdhvvj9na?form_factor=mobile')
source('Open the roof-repairs mobile audit','https://pagespeed.web.dev/analysis/https-www-hampshireroofcare-co-uk-services-roof-repairs/e0a90q1gmq?form_factor=mobile')
add('Method: one run per page, Lighthouse 13.5.0, emulated Moto G Power, initial load; captured at 14:27 and 14:28 UK time. Scores vary between runs. No real-user Chrome performance data was available, so this is a laboratory baseline, not a Core Web Vitals pass/fail result.','SmallX')
page()

# 6: Explicit content deliverables
h('05 / October content plan','More useful pages. More ways to be found.','New content will support repair and replacement enquiries, alongside better existing pages. September’s enquiries inform these topics; search demand is not yet measured.')
table(['Planned work','Content and intended value'],[
('New advice page','<b>Roof repair or replacement: how to decide</b><br/>Explain survey checks, repair limitations and what a quote should cover. Help homeowners compare options; link to both services.'),
('Two service-page updates','<b>Roof repairs + pitched roof replacement</b><br/>Strengthen survey steps, scope, FAQs and next steps using verified business facts. Connect useful advice to a quote.'),
('Existing guide update','<b>Slipped roof tiles: how urgent is it?</b><br/>Clarify safe next steps and assessment, informed by the repair enquiry. Link to roof repairs and preserve the existing address.'),
('New local project page','<b>One completed roofing job, subject to evidence</b><br/>Show the actual town, problem, work and approved photos. Link from its service and area pages. The business supplies the job facts.'),
],[145,W-145])
section('How the pages connect','Link the decision guide to repairs and pitched replacement, and the project page to its service and area. Each page will offer a clear route to arrange a survey.')
section('What every release includes','Unique titles and descriptions, clear headings, descriptive image text, relevant links and checked enquiry routes. New pages enter the sitemap and receive mobile and indexing checks.')
note('Delivery target for October','One new guide, two improved service pages and one refreshed guide. Add the project page once approved material arrives; if delayed, complete the core content first.')
add('Keep the existing coverage: Southampton, Winchester, the New Forest and Chandler’s Ford. Avoid duplicate town pages; refine topics as Search Console data becomes available.','SmallX')
source('Content approach: Google’s people-first content guidance','https://developers.google.com/search/docs/fundamentals/creating-helpful-content')
page()

# 7: Review schedule and business inputs
h('06 / October delivery & reviews','A clear plan for the month ahead','Two one-hour reviews remain scheduled for the 1st and 15th at 09:00 UK time. AI preparation, drafting and validation happen around these sessions.')
table(['Review','Agenda and deliverable'],[
('1 October<br/>Foundation review','Review setup and September enquiries; agree the new guide and service-page briefs; prioritise mobile speed. <b>Output:</b> content plan and performance baseline.'),
('15 October<br/>Content & progress review','Review prepared guide and service edits, mobile test results, indexing and enquiry quality. Check profile verification. <b>Output:</b> approved release batch and remaining October actions.'),
],[125,W-125])
section('Alongside content: a faster mobile experience','Defer the heavy homepage video, resize service images and reduce delays before visible text appears. Re-test the same two pages after changes and confirm enquiry routes still work.')
section('After verification: Google review link + QR code','Current feedback has been received in person; it is not presented as Google reviews. Once the Business Profile is approved, create and test its review link and QR code, then prepare a short request the client can share with existing and previous customers. Invite honest feedback without incentives or selecting only happy customers.')
section('Contact details confirmed','The client-facing public email is <b>asa@hampshireroofcare.co.uk</b>. Use it consistently in website contact links, business information and future reports. It does not, by itself, confirm which mailbox Formspree is configured to notify.')
note('What we need from the business','Provide one completed job with its town, roof type, problem, work done and approved photos; confirm permission and wording for any in-person testimonials; supply insurance/guarantee evidence; and tell us whether the two September enquiries became quotes or booked jobs.')
add('October reporting will track search visibility, organic visits, accepted enquiries and business-confirmed outcomes separately. The November report will contain the first full October measurement period. Rankings and traffic growth are outcomes to measure, not promises.','SmallX')
source('Google guidance: create a review link or QR code','https://support.google.com/business/answer/16816815?hl=en-GB')
add('Other tracked tasks: notice/contact consistency and a permanent redirect from the non-www address. Verification timing is controlled by Google. Sources: project checks, Google setup records, Formspree inspected 1 October, business confirmations and linked research/audits.','SmallX')

LOGO=svg2rlg(str(BRAND/'milktree-logo.svg'))
def draw_logo(c,x,y,width):
 scale=width/LOGO.width
 c.saveState();c.translate(x,y);c.scale(scale,scale);renderPDF.draw(LOGO,c,0,0);c.restoreState()
def frame(c,doc):
 c.saveState(); pw,ph=A4
 c.setFillColor(colors.black);c.rect(0,ph-(92 if doc.page==1 else 55),pw,92 if doc.page==1 else 55,fill=1,stroke=0)
 draw_logo(c,48,ph-(60 if doc.page==1 else 37),165 if doc.page==1 else 105)
 c.setFillColor(YELLOW);c.setFont('ReportSans-Bold',8)
 c.drawRightString(pw-48,ph-(49 if doc.page==1 else 31),'SEO REPORT  /  SEPTEMBER 2026')
 c.setFillColor(YELLOW);c.rect(48,ph-(101 if doc.page==1 else 64),28,3,fill=1,stroke=0)
 c.setFillColor(colors.black);c.rect(0,0,pw,35,fill=1,stroke=0)
 c.setFont('ReportSans',7.5);c.setFillColor(colors.white);c.drawString(48,14,'Milktree Agency  /  Hampshire Roof Care Company')
 c.setFillColor(YELLOW);c.drawRightString(pw-48,14,f'{doc.page:02}')
 c.restoreState()
doc=SimpleDocTemplate(str(OUT),pagesize=A4,rightMargin=48,leftMargin=48,topMargin=81,bottomMargin=50,title='Hampshire Roof Care - September SEO Report and October Plan',author='Milktree Agency',subject='September setup scope finalised 1 October 2026; September enquiries, mobile audit, competitors and October content plan')
doc.build(story,onFirstPage=frame,onLaterPages=frame)
print(OUT)
