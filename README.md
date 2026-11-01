# Lansing Codes Event Sign-in Sheet

A sign-in sheet for Lansing tech events.

https://lansingcodes.github.io/sign-in-sheet/

## Contents

- [Digital sign-in prototype](#digital-sign-in-prototype)
- [Code of Conduct](#code-of-conduct)
- [Instructions](#instructions)
- [Questions](#questions)
- [Stay in touch](#stay-in-touch)
- [Contributing](#contributing)
- [License](#license)

## Digital sign-in prototype

`digital/` is a separate Netlify Forms prototype for issue #14. The existing
printable sheet remains at the site root. The optional `event` query parameter
pre-fills the event field, for example
`/digital/?event=Lansing%20Codes%20Meetup`; use that URL to make a QR code for
the welcome slide. Attendees can edit the event name, so organizers should
review it before using submissions as an attendance record.

### Move it to a Lansing Codes account

1. Merge documentation PR #16 and CI PR #18, then this prototype PR. Create a Netlify site owned by
   Lansing Codes, connect this repository, set the publish directory to the
   repository root (`.`), and leave the build command empty. A manual deploy
   of the same static files also works.
2. In the new site's **Forms** page, enable form detection and deploy again.
   Check that Netlify lists the `meetup-sign-in` form.
3. Open `/digital/` on the new site. Submit one fictional record, check the
   custom success page, and confirm the record appears in the private Forms
   dashboard. Keep the newsletter box unchecked for that test.
4. Set the approved attendee notice, form access and retention policy. Check
   the site's free-plan limits. Only then make a QR code for the new site's
   event-specific `/digital/?event=...` URL and use it at a meetup.

GitHub Pages can serve the HTML but cannot process the Netlify form. If the
site stays on GitHub Pages, a separate managed form or backend is required.

The form collects a name, optional email, and an unchecked newsletter-interest
flag. It does **not** subscribe anyone automatically. A checked interest flag
requires an email in the browser. Netlify stores submissions in the site's
private Forms dashboard, accessible to its team members. The honeypot reduces
basic automated submissions. This is a demonstration: use fictional data on a
personal test site. Before using it with attendees, settle consent wording,
access, retention, deletion, spam controls, and the newsletter handoff.
## Code of Conduct

All participants are expected to treat others with respect and follow our [Code of Conduct](https://www.lansing.codes/code-of-conduct/).

## Instructions
Anything appearing in red (including this message) will not appear in the printed version of this page.

Type your event name in the red box to the right of the logo. It will be centered correctly in the print version.

The print version is styled to look best with 1" margins on all sides of the page and no headers or footers.

You can also choose how many pages to print and whether to show line numbers using the form at the top of the page.

## Questions

For general support, direct your questions to the
[Lansing Codes Slack team](http://slack.lansing.codes). The issue list for this
project is exclusively for bug reports and feature requests.

## Stay in touch

-   [Slack](http://slack.lansing.codes)
-   [Twitter](https://twitter.com/lansingcodes)
-   [Facebook](https://www.facebook.com/lansingcodes)
-   [Website](https://www.lansing.codes)
-   [Newsletter](http://bit.ly/lansing-codes-newsletter)

## Contributing

See the [Contributing Guide](.github/CONTRIBUTING.md) for issue reports, pull
requests, local testing, and deployment details.

## License

[Hippocratic 2.1](https://firstdonoharm.dev)

Copyright (c) 2019-Present, Humanity Codes LLC
