---
path: basic-accessibility
date: 2020-03-17T15:10:00.000Z
title: Basics of Accessibility
description: A compilation of web accessibility best practices. 
categories: ["building-blocks"]
---

This is a compilation of best practices and standards to follow in every website and web project.

## Structure

Use the appropriate HTML tags for each case. That includes `header`, `footer`, `nav`, `main`, `article`, `figure`, `button`, `label` among countless others. `div` isn’t always suited for everything.

## Text

- Avoid using all-caps or uppercase. For a more sensible approach, go for small-caps. And especially, don’t ever type all uppercase characters.

### Headings

- Use only one H1 per page.
- Respect heading hierarchy, and don’t skip over headings.

### Body Text

#### Length & Content

- Keep blocks of text relatively short and easy to skim through.
- Use lists and space to keep the reader engaged.

#### Contrast

Use adequate contrast between text and background.The contrast ratio shouldn’t be lower than 4.5:1. For an easier way to find out if the contrast you’re using is accessible or not, you can use any of the many tools available online.

- [userway.org](https://userway.org/contrast/)
- [colorsafe.co](http://colorsafe.co/)
- [contrastchecker.com](https://contrastchecker.com/)
- [webaim.org](https://webaim.org/resources/contrastchecker/)
- [accessible-colors.com](https://accessible-colors.com/)
- [contrast-ratio.com](https://contrast-ratio.com/)

#### Weight

Use proper typographical weight — don’t use extremely thin or thick text styles on small sizes or on low pixel resolution screens.

#### Width & Alignment

Paragraph width should generally revolve between 25 to 45 rems.
Left-aligned text (or right-aligned text for right-to-left languages) is generally easier to set up. Justified text can be more difficult to set, and requires proper hyphenation and careful styling.

### Links

#### Screen readers

Screen readers can scan through pages by skipping through links, so having the text in a link be things like “read more” or “click here” isn’t very helpful. Instead, use descriptive and identifiable text inside the link.
If non-descriptive links are necessary, the alternative solution is to use `aria-label` to provide a descriptive attribute to be read by screen readers. The `aria-label` should also inform users if the link is going to open a new tab.

#### Link Style

Links should be styled properly, ideally using an underline. Alternatively, a 3:1 contrast ratio from the surrounding text can work (and even then, add an underline when it’s hovered and focused).

#### Files

If the link is a file, say so in the link text. This can avoid confusion and hefty 3G bills for mobile users accidentally downloading large files.

#### Focus

Generally, we like to remove the focus styling in CSS, because it doesn’t fit with the carefully designed layout we lovingly crafted. But people who cannot use a mouse actually use it, and websites without a visible `:focus` are inaccessible. Firefox solved the issue using `:focus-visible`, which only shows the focus style if the focus has been reached from a keyboard.

### Language

Add the language attribute to your HTML: `<html lang="en>`.
Any text that’s in a different language should have an appropriate language description: `<span lang=“es”>Hola!</span>`.

## Graphics

### Text Alternatives

All images, video, and audio should have alternative text.

- `<img>` elements should contain a descriptive `alt=""`.
- All text in images should be available to people who can’t actually see the image, for whatever reason.
- Image links should have the destination in the alt, not the description.
- Dont use icon fonts. Use SVG icon sprites instead.
- Audio (for example, podcasts) should have a transcription available.
- All video with speech should have captions.

### Animation

Accessibility and animation in the web tends to be a versus rather than a playful date, and it can be tricky to find balance between both — especially when navigating the amazing possibilities that the new web provides. But it’s important to keep both in mind when designing and developing.

- Don’t auto-play video or ads.
- Allow users to stop all movement and sound.
- Respect the users’ choice using the CSS `prefers-reduced-motion` media query.
- Don’t add content that flashes more than three times in a second.
- There should always be an option to pause, stop, or hide anything that moves, blinks, or scrolls, that starts automatically, lasts more than 5 seconds, and is shown alongside other content, [according to the WCAG](~https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#qr-time-limits-pause~).

## Forms

Don’t disable auto-fill! It saves users time and makes the interaction easier and smoother.

### Form Style

- Keep textboxes visually as boxes.
- Add labels to all form fields, and don’t hide those labels.

#### Hidden labels

When a visible label is redundant, it’s ok to skip the label. In that case, use `aria-labelledby` to add a different element as the label, like a button.

## Blockages

### ReCAPTCHA

Avoid the use of old-standard Captchas. Whenever possible, keep things easy to navigate for the user. Go for the latest version of ReCaptcha or just avoid it altogether.

## Final tests

- [Validating is your friend!](~https://validator.w3.org/~)
