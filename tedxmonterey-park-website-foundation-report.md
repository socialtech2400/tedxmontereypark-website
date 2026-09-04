# TEDxMonterey Park Website Foundation Report

**Research date:** September 3, 2026  
**Purpose:** Provide the strategic, structural, content, and functional basis for the TEDxMonterey Park website.  
**Event references:** [TEDxPasadena](https://www.tedxpasadena.com/) and [TEDxManhattanBeach](https://tedxmanhattanbeach.org/)  
**Design references:** [Refero Styles](https://styles.refero.design/), [Curated](https://curated.design/), [Landing Love](https://www.landing.love/), and especially [The Component Gallery](https://component.gallery/)

## Executive recommendation

Build TEDxMonterey Park as a mobile-first, event-led website that combines TEDxManhattanBeach's transactional clarity with TEDxPasadena's community and participation focus.

The homepage should immediately answer four questions: **What is happening? When and where is it? Why should I care? What should I do next?** The primary call to action should change with the event lifecycle. Right now, that action is **Apply to Speak**. Later it should become **Get Tickets**, then **Plan Your Visit**, and after the event, **Watch the Talks**.

The first release should be a focused speaker-recruitment site, because the supplied campaign assets advertise deadlines in September 2026. A fuller event site can follow without delaying the application pathway.

**Ticketing decision:** Use **Eventbrite** with one public **General Admission ticket priced at $75.00**, matching TEDxPasadena 2026's listed starting price. Keep Eventbrite's default buyer-paid fee setting and display the price everywhere as **$75 + Eventbrite fees**. At Eventbrite's published standard U.S. rates, a one-ticket order is approximately $82 before any applicable tax; Eventbrite must show the exact total before payment.

### Immediate content issues to resolve

1. **The weekday/date combinations on both speaker-call graphics are wrong.** September 12, 2026 is a Saturday, not Friday. September 18, 2026 is a Friday, not Thursday. Confirm whether the dates or weekdays are authoritative before publishing either asset or building a deadline countdown.
2. **The QR destination has not been verified.** Publish a short, visible application URL beside every QR code. A QR-only action is unusable for many visitors who are already viewing the page on their phones.
3. **Verify the event logo against the current TEDx approval and logo system.** TED says new series must use the full licensed event name and follow its updated logo rules. Multiword place names and logo arrangements have specific requirements. Use the official logo generator or approved source files before treating the supplied artwork as the site's master logo. See [Your TEDx Logo](https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/branding-promotions/logo-and-design/your-tedx-logo).
4. **Do not use the recruitment flyers as the website's main content.** Their copy, dates, venue, and application details should be live HTML so they remain readable, searchable, responsive, and accessible.

## What was reviewed

The audit covered the desktop and mobile homepages, navigation, major secondary pages, calls to action, forms, external integrations, content hierarchy, and basic semantic/accessibility signals. No form was submitted and no transaction was attempted.

Pages inspected included:

- TEDxPasadena: [Home](https://www.tedxpasadena.com/), [Past Event](https://www.tedxpasadena.com/past-events), [Gallery](https://www.tedxpasadena.com/past-event-gallery), [Upcoming Event](https://www.tedxpasadena.com/blank), [Become a Speaker](https://www.tedxpasadena.com/become-a-speaker), [Sponsorship Application](https://www.tedxpasadena.com/blank-1), and [Volunteer Registration](https://www.tedxpasadena.com/blank-3).
- TEDxManhattanBeach: [Home](https://tedxmanhattanbeach.org/), [About](https://tedxmanhattanbeach.org/about/), [2026 Speakers](https://tedxmanhattanbeach.org/speakers-2026/), [Partners](https://tedxmanhattanbeach.org/partners/), [Expo](https://tedxmanhattanbeach.org/expo/), [Talks](https://tedxmanhattanbeach.org/tedxmb-talks/), and [Volunteer](https://tedxmanhattanbeach.org/volunteer/).
- Design discovery: [Refero Styles](https://styles.refero.design/) and its type-led and dark editorial references; [Curated Websites](https://curated.design/) and [Curated Sections](https://curated.design/sections/); [Landing Love](https://www.landing.love/) and its [education examples](https://www.landing.love/categories/education/); and The Component Gallery's [component catalog](https://component.gallery/components).
- Component deep dives: [Header](https://component.gallery/components/header), [Navigation](https://component.gallery/components/navigation), [Hero](https://component.gallery/components/hero), [Button](https://component.gallery/components/button), [Card](https://component.gallery/components/card), [Accordion](https://component.gallery/components/accordion), [Alert](https://component.gallery/components/alert), [Form](https://component.gallery/components/form), [Video](https://component.gallery/components/video), and [Skip link](https://component.gallery/components/skip-link).
- Ticketing research: [TEDx Pasadena 2026 on Eventbrite](https://www.eventbrite.com/e/tedx-pasadena-2026-tickets-1980342593005), Eventbrite's current [organizer pricing](https://www.eventbrite.com/organizer/pricing/), and TED's current [Licensing Tiers](https://www.ted.com/participate/organize-a-local-tedx-event/before-you-start/event-types/licensing-tiers).
- Official TEDx guidance: [Your Event Website](https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/branding-promotions/your-event-website), [Branding and Promotions](https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/branding-promotions), [Your TEDx Logo](https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/branding-promotions/logo-and-design/your-tedx-logo), and [Your Event Page](https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/branding-promotions/your-event-page).

## How the design-reference libraries should shape the site

The four design sources serve different purposes. They should not be blended into a collage or copied page-for-page.

| Source | Best use for this project | What to take | What not to take |
|---|---|---|---|
| [The Component Gallery](https://component.gallery/) | Primary implementation reference | Component anatomy, naming, states, accessibility patterns, and comparisons across established design systems | Its own typography, dark grid aesthetic, or any one library's styling as the Monterey Park brand |
| [Refero Styles](https://styles.refero.design/) | Visual-direction and token language | A disciplined description of palette, type scale, spacing, shapes, and do/don't rules | Generated tokens or typefaces without checking TEDx rules, readability, licensing, and content needs |
| [Curated](https://curated.design/) | Live-site and page-section research | Real hero, footer, FAQ, team, newsletter, and catalog compositions; evidence of how a pattern works in context | Trend-driven layouts that obscure date, venue, or the primary action |
| [Landing Love](https://www.landing.love/) | Motion reference | Specific transitions, pacing, and storytelling moments captured in full-page recordings | Scroll hijacking, decorative 3D, cursor effects, or animation that delays essential event information |

At the time of review, The Component Gallery indexed 60 component types across 95 design systems and 2,671 examples. This breadth is most useful as a comparison tool: review several documented implementations, identify the common semantic contract, then build one consistent TEDxMonterey Park version.

Curated's section library separates complete sites from recurring page sections, including heroes, footers, FAQs, team areas, newsletters, and catalogs. Use those collections to compare one problem at a time. Landing Love is strongest when used the same way: select a specific motion problem, such as a hero entrance or talk-card hover, rather than selecting an animated site to imitate wholesale.

Refero's relevant direction is a type-led, editorial system with near-black and off-white surfaces, oversized sans-serif headlines, disciplined spacing, hairline dividers, and red used as punctuation. That is compatible with TEDx in principle. The Monterey Park site should adapt the restraint, not copy the example's custom fonts, tiny labels, ghost-only actions, or red values. The final red token must come from the approved TEDx identity files.

### Reference-selection workflow for design and build

For each page or component:

1. Define the user problem and required states before opening a gallery.
2. Collect no more than three relevant examples: one from Component Gallery, one live composition from Curated, and one motion example from Landing Love only if motion improves comprehension.
3. Record the source URL, the principle being borrowed, the accessibility implication, and what must be changed for TEDxMonterey Park.
4. Rebuild the pattern using the site's own tokens, content, and semantic HTML. Do not trace a reference or copy its brand assets.
5. Test the component in its longest-content, mobile, keyboard, loading, error, closed, and reduced-motion states before approval.

## Reference-site comparison

| Area | TEDxPasadena | TEDxManhattanBeach | Direction for TEDxMonterey Park |
|---|---|---|---|
| First screen | Large branded image; event facts and action are not immediately visible | Theme, date, venue, and Buy Tickets dominate the hero | Use Manhattan Beach's event clarity, but keep copy concise and the official event logo on a solid background |
| Navigation | Home, Past Event, Gallery, Upcoming Event | About, Speakers, Partners, Expo, Talks, Volunteer | Use audience-oriented labels and one persistent, phase-specific action |
| Homepage narrative | Mission, TEDx explanation, speaker, sponsor, and volunteer invitations | Event promotion, speakers, mission, participation, support, newsletter | Lead with the current event, then explain the experience and invite participation |
| Speakers | Detailed application page and embedded form; past-event speaker cards link directly to YouTube talks | Current-year speaker grid links to individual bio pages; applications may be closed | Combine an easy-to-scan speaker grid with individual bios and a clearly dated application state |
| Tickets | No visible ticket pathway in the reviewed website state; its 2026 Eventbrite listing started at $75 | Prominent Eventbrite ticket button on home, speakers, and expo pages | Use Eventbrite, set General Admission to $75 + fees, and make ticket status a global component: Coming Soon, On Sale, Low Availability, Sold Out, or Join Waitlist |
| Applications | Speaker, sponsor, and volunteer forms are embedded within the site | Volunteer, exhibitor, and partner workflows use Jotform; tickets use Eventbrite | Either approach works, but preserve brand continuity, accessible validation, confirmation emails, and analytics |
| Past content | One long event page links speaker profiles directly to individual YouTube videos; separate 264-image gallery | Curated talks hub, featured talks by year, yearly archives, and a YouTube channel link | Prefer Manhattan Beach's curated talk archive; use a small edited gallery rather than exposing every file |
| Community roles | Speaker, sponsor, and volunteer are prominent on the homepage | Speaker, volunteer, expo, partnership, donation, and newsletter pathways | Group these under Get Involved to reduce top-level navigation clutter |
| Partners | Sponsor invitation on home; sponsor recognition on the past-event page | Dedicated partner page with tiered recognition and separate application links | Maintain a dedicated Partners page; do not place sponsor names or logos on the homepage |
| Email and social | Instagram link appears on the upcoming-event page; no sitewide signup observed | Mailing-list form and Instagram, Facebook, X, and LinkedIn links appear sitewide | Use a sitewide email signup and only the social channels the team can keep active |
| Mobile | Responsive hamburger menu; content becomes a single column | Responsive hamburger menu; hero retains date, venue, and ticket CTA | Keep the primary action visible within the first phone screen and make the menu control accessible by name |
| Platform signal | Wix | WordPress with Divi; Jotform and Eventbrite integrations | Select the platform based on who will maintain it, not on visual preference alone |
| Compliance footer | Copyright only on reviewed pages | Required TEDx license statement, nonprofit identity, privacy link, social links, signup | Include the required license statement on every page plus privacy, accessibility, and contact links |

## What each reference site teaches

### TEDxPasadena: community-first and form-rich

TEDxPasadena makes participation feel open. Its homepage explains who can contribute and why, while dedicated speaker, sponsor, and volunteer forms convert that invitation into action. The speaker form asks for the idea, the applicant's relationship to it, potential impact, relevant speaking experience, motivation, and a short video. The sponsor form gathers interest level, contribution type, and approximate commitment. The volunteer form routes people by team interest.

Its past-event page also makes individual talks discoverable by linking each speaker card to a YouTube video. This is stronger than a photo gallery alone because the talks are the enduring product of a TEDx event.

The tradeoff is weak event orientation. The reviewed homepage does not put a date, venue, or event CTA in the first screen. Page titles such as “Home | Community Speak Even” do not clearly represent the event, some live URLs retain temporary slugs such as `/blank-1`, the gallery exposes image filenames, and many inspected images lack descriptive alternative text. These are useful warnings for launch QA.

### TEDxManhattanBeach: event-first and archive-rich

TEDxManhattanBeach is clearer about the immediate event. Its hero presents the theme, date, venue, and Buy Tickets action. Current speakers have their own index and bio pages. The Talks section curates featured talks by year and gives visitors a path into the complete YouTube archive. Partners, expo exhibitors, volunteers, email subscribers, and ticket buyers each have distinct journeys.

Its footer is a strong reusable pattern: license statement, organization context, privacy link, social accounts, and mailing-list signup appear consistently. The site also demonstrates how a recurring TEDx program can mature from a single event page into a durable media archive.

The tradeoff is fragmentation. Eventbrite and multiple Jotform destinations take visitors out of the branded experience. A current speaker-inquiry button points to `#` while saying inquiries are closed, which is a dead interaction rather than a useful next step. The mobile hamburger control did not expose a meaningful accessible name during semantic inspection. Heading levels also prioritize visual styling over a clean document outline on several pages.

## Recommended site strategy

### Design for five event states

The site should not require a redesign every time the event moves forward. Store the current state in the CMS and change the homepage action and announcement automatically.

| Event state | Primary CTA | Supporting content |
|---|---|---|
| Speaker recruitment | Apply to Speak | Deadline, eligibility, process, FAQ, visible application URL |
| Pre-sale | Join the List | Theme reveal, early speaker announcements, email signup |
| Tickets on sale | Get Tickets | $75 + Eventbrite fees, date, venue, speakers, experience, accessibility, and ticket FAQ |
| Event week/day | Plan Your Visit | Schedule, directions, parking/transit, check-in, accessibility, updates |
| Post-event | Watch the Talks | Talk videos, speaker pages, edited gallery, next-event signup |

Each state needs an explicit fallback. If applications close, replace the application button with **Join the Speaker Interest List** or **Get Notified Next Year**. If tickets sell out, use **Join the Waitlist**. Never leave a dead button.

## Recommended information architecture

### Primary navigation

1. **Event** — theme, date, time, venue, event experience, schedule, venue/accessibility, FAQ
2. **Speakers** — current speakers, individual bios, and application pathway while open
3. **Talks** — post-event videos organized by year, speaker, and topic
4. **Get Involved** — speak, volunteer, partner/sponsor, exhibit or perform if applicable
5. **About** — TEDx explanation, Monterey Park story, team, contact
6. **Primary CTA** — phase-specific button such as Apply to Speak or Get Tickets

The TEDxMonterey Park logo should always link to Home. On mobile, the menu may nest the Get Involved options and previous talk years, but the primary CTA should remain visible without opening the menu.

### Supporting and legal pages

- Partners and Sponsors
- News or Updates, if the team can publish consistently
- Contact
- Privacy Policy
- Accessibility Statement
- Terms or ticket policy, if required by the ticketing platform
- Custom 404 page with links back to Event, Speakers, and Home

## Recommended homepage layout

### 1. Current-status bar

Use one short update with a date: “Speaker applications close September 18” or “Tickets are now on sale.” It should link to the relevant detail page and disappear automatically when stale.

### 2. Header

Use the approved TEDxMonterey Park logo, compact navigation, and one visually dominant CTA. Keep the logo on solid black or white, consistent with TEDx logo guidance.

### 3. Event hero

Include:

- **Reimagining Tomorrow**
- Saturday, February 27, 2027
- 11:00 AM–4:30 PM
- ELAC Recital Hall, East Los Angeles College
- A one-sentence event promise
- Primary CTA: Apply to Speak, then Get Tickets when sales open
- Ticket price when on sale: $75 + Eventbrite fees
- Secondary CTA: Learn About the Event

The supplied materials describe the promise as a day for people and ideas rethinking what comes next for the community and beyond. Keep that local-community emphasis, but do not bury the practical details beneath a full-screen image.

### 4. Why this event, here, now

Explain the Monterey Park connection in two or three short paragraphs: the community the event serves, the kinds of ideas it hopes to surface, and the experience attendees should expect. This is where Pasadena's inclusive tone is most useful.

### 5. Speaker or theme preview

During recruitment, show who should apply and what makes an idea suitable. After selection, replace this section with three to six speaker cards and a View All Speakers link.

### 6. Experience preview

Use three or four cards for Talks, Community, Performance or Exhibits, and Conversation. Publish only experiences that the organizing team has committed to deliver.

### 7. Get involved

Provide separate pathways for Speaker, Volunteer, and Partner. Every card should show its current state and deadline. Link partner recognition to a separate Partners page.

### 8. Talks and event memory

After the first event, feature three talks with meaningful titles, speaker names, thumbnails, captions, and duration. Link to the full archive and official YouTube destinations. Use a small editorial photo selection rather than an unfiltered gallery.

### 9. Mailing list

Set a clear expectation: what subscribers will receive and how often. Use an accessible email field, explicit consent language, success/error confirmation, and double opt-in if supported.

### 10. Footer

Include the exact required sentence: **“This independent TEDx event is operated under license from TED.”** Add the official TEDx program link, privacy policy, accessibility statement, contact email, selected social channels, and copyright. TED's current [event website guidance](https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/branding-promotions/your-event-website) requires the TEDx explanation and license statement, and says sponsor names or logos must live on a separate page rather than the homepage.

## Recommended component system

Build a small owned system around the site's real journeys. The Component Gallery should remain the comparison index; it is not a package dependency. If the final platform supports React, accessible primitives may accelerate implementation, but the acceptance criteria below remain the same in WordPress, a site builder, or a custom stack.

| Website need | Component contract | Required states and behavior | Component Gallery reference |
|---|---|---|---|
| Dated event update | Announcement alert | Informational, urgent, expired, dismissible only when appropriate; message includes a real link and expiration rule | [Alert](https://component.gallery/components/alert) |
| Global wayfinding | Header, navigation, mobile drawer, CTA button | Current page, open/closed mobile menu, keyboard and Escape handling, visible focus, labelled menu control, CTA visible on small screens | [Header](https://component.gallery/components/header), [Navigation](https://component.gallery/components/navigation), [Drawer](https://component.gallery/components/drawer), [Button](https://component.gallery/components/button) |
| First-screen event summary | Hero | Theme, date, time, venue, one-sentence promise, primary and secondary actions; essential copy remains live text | [Hero](https://component.gallery/components/hero) |
| Speaker, talk, role, and experience previews | Card, image, badge, link | Entire card is not a nested-link trap; clear heading, metadata, status, descriptive image treatment, and one obvious destination | [Card](https://component.gallery/components/card), [Image](https://component.gallery/components/image), [Badge](https://component.gallery/components/badge) |
| Speaker application and inquiries | Form, fieldset, label, inputs, file upload, alert | Default, focus, valid, invalid, submitting, success, failure, closed, and saved-draft states; persistent labels and error summary | [Form](https://component.gallery/components/form), [Fieldset](https://component.gallery/components/fieldset), [File upload](https://component.gallery/components/file-upload) |
| Frequently asked questions | Accordion or native disclosure | Button or `summary` is keyboard-operable; expanded state is exposed; questions remain searchable and printable | [Accordion](https://component.gallery/components/accordion) |
| Talks archive | Search, filters, pagination, empty state | Query reflected in the URL, clear/reset control, useful zero-results guidance, stable back-button behavior, server-rendered fallback | [Search input](https://component.gallery/components/search-input), [Pagination](https://component.gallery/components/pagination), [Empty state](https://component.gallery/components/empty-state) |
| Talk playback | Video plus transcript/captions links | Consent-aware loading, captions, transcript, duration, poster image, and a direct official-platform link | [Video](https://component.gallery/components/video) |
| Site close and compliance | Footer | License statement, TEDx link, privacy, accessibility, contact, social channels, and copyright on every page | [Footer](https://component.gallery/components/footer) |
| Keyboard and assistive-technology foundation | Skip link and visually hidden utility | Skip link is the first focusable item; hidden text adds meaning without duplicating visible labels | [Skip link](https://component.gallery/components/skip-link), [Visually hidden](https://component.gallery/components/visually-hidden) |

Do not make a carousel the default for speakers, partners, or talks. A visible grid is easier to scan, link, print, and navigate. Use tabs only when they switch closely related panels; use ordinary links for event years and any destination that must be shareable or indexed.

### Shared component rules

- One component name and one behavioral contract per pattern across the site.
- Buttons perform actions; links navigate. Styling must not blur the distinction.
- Every interactive component includes hover, focus-visible, active, disabled, loading, success, and error behavior where those states apply.
- Status labels use text as well as color.
- Minimum touch targets are 44 by 44 CSS pixels where practical.
- Components support 200% zoom, long speaker names, translated copy, missing images, and no JavaScript for essential information.
- Use native HTML behavior before adding custom scripting. Document any exception.

## Functional requirements

### Core content management

Use structured content rather than hard-coded page sections. At minimum, the CMS should manage:

- Event facts: theme, date, time, venue, city, status, Eventbrite URL, $75 face price, fee-label copy, sales window, inventory, and capacity status
- Announcements: message, start date, expiration date, link
- Speakers: name, pronouns if supplied, photo, short label, biography, idea summary, talk title, video URL, year
- Talks: title, speaker, year, topic, thumbnail, official video URL, duration, transcript or captions link
- Team members: name, role, biography, photo
- Partners: name, tier, logo, URL, year, alt text
- FAQs: category, question, answer, sort order
- Forms and deadlines: open/closed state, opening date, closing date, confirmation message

### Speaker application

The application should be usable without a QR code and should include:

- Applicant name, email, phone, city, role, and professional or community background
- Proposed talk title and one-sentence idea
- Explanation of the idea, evidence or experience supporting it, and intended audience impact
- Why the applicant is the right person to present it
- Links to research, writing, or prior speaking, where relevant
- A short video URL or clearly explained upload option
- Availability for coaching, rehearsals, and the event
- Agreement to content, privacy, and recording terms
- Save-and-return capability if the form is long, or a deliberately short first-stage application
- Accessible inline validation and a confirmation page/email that states next steps and timing
- Submission timestamp, source tracking, and a reference number for organizer follow-up

Include the official program expectation that speakers do not pay to participate. TED's current [website guidance](https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/branding-promotions/your-event-website) includes this in the required TEDx explanation.

### Volunteer application

Collect contact details, role interests, relevant experience, availability before and on event day, accessibility needs, age confirmation if necessary, and consent. Useful team categories from the Pasadena example include event planning, marketing, speaker curation, production, and guest experience.

### Partner inquiry

Keep partner information and recognition off the homepage. On a dedicated page, explain allowed forms of support, benefits subject to TEDx rules, in-kind options, approximate commitment levels, deadlines, and a single inquiry form. Route submissions to an accountable owner and send an immediate confirmation.

### Ticketing

Use **Eventbrite** as the ticketing platform. It is the strongest operational fit because both event research and the team's stated default point to it, while the platform provides hosted payments, embedded checkout, custom registration questions, promo codes, waitlists, automated reminders, reporting, and mobile check-in.

Set the public ticket configuration as follows:

| Setting | Decision |
|---|---|
| Public ticket type | General Admission |
| Face price | **$75.00** |
| Public website copy | **$75 + Eventbrite fees** |
| Fee handling | Buyer pays Eventbrite fees, which is Eventbrite's default |
| Quantity limit | Tie inventory to the lower of approved TEDx license capacity, venue capacity, and safe operational capacity |
| Sales status | Coming Soon, On Sale, Low Availability, Sold Out, or Join Waitlist |
| Checkout | Embedded Eventbrite checkout where technically reliable, with a clearly labelled direct Eventbrite link as fallback |

The $75 face price matches TEDxPasadena 2026's Eventbrite starting price. Eventbrite currently publishes a U.S. service fee of 3.7% + $1.79 per paid ticket and a 2.9% payment-processing fee per order. On a single $75 ticket, that produces an estimated checkout total of about $82 before any applicable tax. Because fees and tax rules can change, Eventbrite's checkout is the authoritative total. If the team later promises an exact **$75 total**, it must switch Eventbrite to organizer-paid fees and revise the revenue forecast before publishing that promise.

The price is below the current $150-per-ticket ceiling for a Community-tier TEDx license. Confirm the event's assigned licensing tier and capacity in the official approval email before sales open; the license's audience cap and pricing ceiling control if they differ from this report.

Before publishing the listing:

- Use an organization-owned account and shared operations email, with secure recovery and at least two trained administrators.
- Keep one public paid tier unless the attendee experience genuinely differs. Do not create artificial VIP scarcity.
- Add complimentary, speaker, volunteer, sponsor, or community-access tickets as hidden or code-controlled allocations rather than public price confusion.
- Collect only the attendee data needed for admission, communications, accessibility support, and reporting.
- Publish what the ticket includes, the refund and transfer policy, door and program times, accessibility contact, and any age restrictions before checkout.
- Configure waitlist, order confirmation, reminder, cancellation, refund, and event-change messages before launch.
- Track `Get Tickets` clicks on the website and completed orders in Eventbrite; use campaign parameters for email, social, QR, and partner links.
- Reconcile Eventbrite inventory with venue and license capacity after every complimentary or offline allocation.

### Email, forms, and operations

- Send transactional confirmation emails immediately after every form submission.
- Route different forms to distinct queues or owners.
- Protect forms with spam controls that do not create unnecessary accessibility barriers.
- Define retention and deletion rules for applicant and volunteer data.
- Do not collect data the organizing team will not use.
- Provide a manual export and backup process.
- Test closed, duplicate, invalid, and failed-submission states before launch.

### Analytics

Track actions that map to real decisions:

- Apply to Speak clicks and completed applications
- Get Tickets clicks and confirmed purchases if the provider supports it
- Volunteer and partner inquiry completions
- Mailing-list signups
- Speaker bio views and talk plays
- Traffic source/campaign, especially QR, social, email, and partner referrals
- Device category and form abandonment

Use campaign-specific URLs or UTM parameters for printed QR codes so results can be attributed without changing the destination form.

## Recommended visual direction

### Concept: civic editorial stage

The website should feel like a contemporary event program made for Monterey Park: direct enough to use under time pressure, expressive enough to create anticipation, and grounded in real people and local place. Use a bold editorial grid, assertive sans-serif typography, large event facts, sharp image crops, and occasional asymmetry. The mood is energetic and public-facing, not corporate, futuristic, or nightlife-oriented.

Design calibration for the first build:

| Dial | Target | Meaning for this site |
|---|---:|---|
| Visual variance | 6/10 | Editorial composition and a few deliberate overlaps, while forms and event logistics stay conventional |
| Motion intensity | 4/10 | A small number of purposeful transitions; the site remains complete and understandable without animation |
| Information density | 4/10 | Strong breathing room with compact event facts and practical pages that scan quickly |

### Visual system

- **Palette:** near-black, white or warm white, neutral grays, and one approved TEDx red. Red is punctuation for the primary action, deadlines, rules, and small graphic markers. Do not turn every section red.
- **Typography:** one robust sans-serif family with enough weights for display and body use. Create hierarchy through scale, weight, spacing, and case before adding a second family. Avoid custom display faces until licensing, multilingual coverage, and performance are verified.
- **Grid:** four columns on phones and twelve on wider screens. Practical content aligns to a stable reading column; hero and photo-led sections may break the grid intentionally.
- **Shape:** mostly square corners with one restrained small-radius option. Use hairline dividers and tonal surface changes instead of heavy shadows or a collection of unrelated card shapes.
- **Photography:** prioritize speakers, attendees, volunteers, venue, and Monterey Park context. Use art-directed crops and consistent treatment rather than generic stock technology imagery.
- **Iconography:** a single simple line-icon family, used only where an icon makes an action or fact faster to recognize.

The Refero direction reviewed for this report uses a near-black gallery canvas, oversized type, thin rules, and a rare red accent. Borrow that discipline while keeping body text larger, CTA buttons unmistakable, and light reading surfaces available. The site's visual identity must remain TEDxMonterey Park, not a reproduction of the Refero example.

### Homepage composition

Avoid a generic centered headline floating over a full-screen photograph. Use an asymmetric split or layered editorial composition: live event facts and CTA in the dominant reading area, with the approved event mark and one art-directed image or typographic theme treatment adjacent. The date, venue, and action must fit in the first common laptop viewport and the first phone screen without requiring animation to reveal them.

Use varied section rhythm instead of repeating equal-width card rows. A possible sequence is: compact status bar; structured event hero; full-width local story; offset speaker preview; practical experience grid; strong recruitment band; talks strip; email signup; compliance footer.

### Motion rules from Landing Love research

- Use one short hero entrance sequence, approximately 250–450 milliseconds, limited to opacity and transform.
- Allow restrained hover or focus movement on talk and speaker links, never on essential form controls.
- Use an occasional section reveal only when it helps show hierarchy. Content must already occupy its final layout so there is no shift.
- Do not use scroll hijacking, automatic carousels, custom cursors, continuous marquees, decorative 3D, or long preloaders.
- Respect `prefers-reduced-motion` and provide an equivalent instant state.
- Keep speaker applications, ticketing, venue guidance, and event-day alerts effectively motion-free.

### Supplied asset assessment

The folder currently contains:

| Asset | Dimensions | Best use |
|---|---:|---|
| `TEDxMPK_Rectangle_fixed.png` | 1103 × 1426 | Portrait recruitment flyer for print, email, or social stories; not a responsive webpage |
| `TEDxMPK_Square_fixed.png` | 1254 × 1254 | Square social post |
| `TEDxMPK.png` | 320 × 320 | Social avatar or temporary icon, subject to TEDx brand approval |

The black, white, and TED red palette is appropriate. Preserve generous spacing, use a neutral sans-serif typeface, and let red signal actions or section markers rather than covering large reading surfaces. The event logo itself should sit only on solid black or white; photography may appear in an adjacent hero or story panel.

The website should use the flyers as campaign references, not as interface components. Recreate their hierarchy with live text, CSS, and responsive layouts. The abbreviated circular “TEDx MPK” asset should not replace the full approved event logo on the website or public event communications unless TED has approved that use.

## Accessibility, search, and quality baseline

### Accessibility

- Target WCAG 2.2 AA.
- Provide keyboard access and visible focus for every interactive element.
- Give the mobile menu an accessible name and correct expanded/collapsed state.
- Use one descriptive H1 per page and a logical heading hierarchy.
- Add meaningful alt text to informative images; use empty alt text for decorative images.
- Provide captions for videos and transcripts when available.
- Never encode essential text only inside an image or QR code.
- Publish venue mobility, seating, sensory, hearing, captioning, and contact information as soon as confirmed.

### Search and sharing

- Use a clear page title and meta description for every page.
- Define canonical URLs with human-readable slugs such as `/apply-to-speak`, not temporary names such as `/blank-1`.
- Add Open Graph/social-sharing images and descriptions.
- Add Event structured data for date, venue, status, organizer, and ticket URL once facts are final.
- Redirect expired campaign URLs rather than deleting them.
- Connect the official website to TED's event page and keep the date, venue, theme, speakers, website, and social links synchronized. TED describes these as required event-page fields in [Your Event Page](https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/branding-promotions/your-event-page).

### Performance and reliability

- Serve correctly sized WebP or AVIF images with lazy loading below the fold.
- Avoid loading an entire event's photo library on one page.
- Use privacy-conscious, click-to-load video embeds.
- Set uptime monitoring for the homepage, application, and ticket paths.
- Test on current iPhone and Android viewport sizes and at 200% zoom.
- Maintain a staging environment and a rollback path for event-week updates.

## Recommended delivery sequence

### Phase 0 — confirm facts and ownership immediately

- Confirm the licensed event name and approved logo files.
- Confirm the February 27, 2027 date, time, and venue.
- Resolve the September deadline weekday/date conflicts.
- Verify the QR/form destination and assign an application owner.
- Choose the canonical domain only after license requirements are satisfied.
- Decide who can update the site during evenings and event week.

### Phase 1 — speaker-recruitment MVP

Ship before the priority deadline:

- Home with live event facts and Apply to Speak CTA
- Speaker opportunity page
- Application form and confirmation workflow
- Required About TEDx copy and license footer
- Privacy and contact pages
- Mobile, keyboard, analytics, and form QA

### Phase 2 — complete event platform

Add:

- Event detail, venue, accessibility, FAQ, and schedule areas
- Speaker index and bio templates
- Volunteer and partner workflows
- Email signup and social links
- Eventbrite checkout, $75 General Admission configuration, waitlist, analytics, and status handling

### Phase 3 — event readiness

- Publish the final schedule, arrival guidance, parking/transit, and accessibility services.
- Add an event-day announcement system.
- Test all external links, confirmation emails, forms, analytics, and failure states.
- Freeze nonessential design changes before event week.

### Phase 4 — post-event archive

- Change the primary CTA to Watch the Talks.
- Publish approved videos, transcripts/captions, and speaker pages.
- Add a small edited photo story.
- Preserve the 2027 event as a permanent archive rather than overwriting it with the next campaign.

## Launch acceptance criteria

The initial website is ready when:

- All displayed dates, weekdays, times, venue details, and deadlines have named owners and written approval.
- The event name and logo match the TEDx license and current brand guidance.
- A mobile visitor can identify the event, date, venue, and primary action without opening the menu.
- Every CTA leads to a working destination or a useful closed-state alternative.
- Ticket pages and buttons consistently display **$75 + Eventbrite fees**, and the Eventbrite listing uses a $75 General Admission face price.
- Eventbrite inventory does not exceed the approved TEDx license or venue capacity, including complimentary and offline allocations.
- Speaker applications can be completed by keyboard and produce both on-screen and email confirmation.
- Reusable components have been checked in mobile, keyboard, long-content, loading, error, closed, and reduced-motion states.
- The official TEDx explanation and required license sentence are present.
- Sponsor names and logos appear only on their dedicated page.
- Page titles, descriptions, headings, alt text, social previews, analytics, and privacy links have been checked.
- The team has tested the site on mobile and desktop and knows who owns urgent updates.

## Decisions the team still needs to make

1. What is the exact licensed event name and approved logo arrangement?
2. Are September 12 and September 18 the correct application dates, or are the weekday labels correct?
3. What URL does the QR code open, and who owns that form and its data?
4. Which person approves event facts, speaker copy, partner recognition, and urgent updates?
5. Which platform can that person maintain confidently: a managed site builder, WordPress, or a custom CMS-backed site?
6. Which email, form, and analytics services will be used alongside Eventbrite?
7. Will the site be English-only at launch, or should key pages also support Chinese and Spanish for the local audience?
8. What venue accessibility services and contact pathway can be promised?
9. Which social channels will the team update consistently?
10. Is the 320 × 320 “TEDx MPK” mark approved for public use, or should it be treated only as a working asset?
11. Does the team approve the civic editorial stage direction, with visual variance 6/10, motion 4/10, and density 4/10?
12. What original speaker, venue, community, and behind-the-scenes photography is available for art direction?

## Bottom line

TEDxMonterey Park should launch first as a clear recruitment and event-information tool, then grow into a durable speaker and talk archive. The strongest model is not a copy of any one reference: use Manhattan Beach's first-screen event clarity and recurring-content structure, Pasadena's welcoming participation language and structured applications, Component Gallery's behavior-first component evidence, Refero's disciplined editorial vocabulary, Curated's page-section comparisons, and Landing Love's motion recordings within strict accessibility limits. The current TEDx website and identity rules remain non-negotiable constraints.
