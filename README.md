# Lansing Codes Event Sign-in Sheet

A sign-in sheet for Lansing tech events.

https://lansingcodes.github.io/sign-in-sheet/

## Digital sign-in prototype

`digital/` is a separate Netlify Forms prototype for issue #14. The existing
printable sheet remains at the site root. Deploy the repository's files to a
Netlify site with Forms enabled, then open `/digital/`. The optional `event`
query parameter pre-fills the event field, for example
`/digital/?event=Lansing%20Codes%20Meetup`; use that URL to make a QR code for
the welcome slide. Attendees can edit the event name, so organizers should
review it before using submissions as an attendance record.

The form collects a name, optional email, and an unchecked newsletter-interest
flag. It does **not** subscribe anyone automatically. A checked interest flag
requires an email in the browser. Netlify stores submissions in the site's
private Forms dashboard, accessible to its team members. The honeypot reduces
basic automated submissions. This is a demonstration: use fictional data on a
personal test site. Before using it with attendees, deploy it under a Lansing
Codes-owned account and settle consent wording, access, retention, deletion,
spam controls, and the newsletter handoff. The site owner's Netlify plan and
form limits should be checked before an event.

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


## License

[Hippocratic 2.1](https://firstdonoharm.dev)

Copyright (c) 2019-Present, Humanity Codes LLC
