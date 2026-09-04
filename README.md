# TEDxMontereyPark website

This folder contains the zero-build speaker-recruitment website for **TEDxMontereyPark: Reimagining Tomorrow**.

## Local preview

Open `index.html` directly in a browser. No installation or build step is required.

For local HTTP testing from this folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open `http://127.0.0.1:4173/`.

## Included

- Responsive event-first homepage
- Speaker opportunity and selection guidance
- Corrected application deadline weekdays
- Embedded Google Forms speaker application with a direct-link fallback
- Privacy Policy and form-level collection notice
- Light and dark themes
- Mobile navigation and reduced-motion support
- Ticket plan: $75 + Eventbrite fees
- Event structured data and social metadata

## Before launch

- Replace the working live-text wordmark with the official TED-approved event logo export.
- Confirm that September 12 and September 18 are the authoritative deadline dates.
- Confirm the Google Form owner, response access, required questions, confirmation message, and notification workflow.
- Decide whether phone number, full mailing address, website or LinkedIn profile, video link, and additional comments should all remain required.
- Verify the official application URL and update any printed or QR-code destinations to match it.
- Map every data service and obtain legal review of the Privacy Policy.
- Add confirmed accessibility, venue, parking, and transit information.
- Confirm `tedxmontereypark@gmail.com` is monitored by the event team.
- Add the final Eventbrite URL only when ticket sales are ready.

The complete research and product rationale is in `tedxmonterey-park-website-foundation-report.md`.
