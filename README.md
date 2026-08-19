# School Spotlight Demo

Build a professional **single-page school website demo** using ONLY the following application technologies:

* React
* TypeScript
* Tailwind CSS

## STRICT TECHNOLOGY REQUIREMENT

This requirement is extremely important.

Use ONLY:

* React
* TypeScript
* Tailwind CSS

Do NOT install or use any other application library.

### Absolutely DO NOT use:

* Framer Motion
* Motion
* GSAP
* Three.js
* Lucide
* React Icons
* Material UI
* shadcn/ui
* Radix UI
* Headless UI
* Bootstrap
* DaisyUI
* Chakra UI
* Swiper
* AOS
* Any animation library
* Any icon library
* Any UI component library
* Any carousel library
* Any external frontend utility library

Use native HTML, React and Tailwind CSS instead.

Do not add dependencies simply to implement something that can be done with native HTML/CSS/React.

---

# LOVABLE INDEPENDENCE

The final project MUST be completely independent from Lovable.

Do NOT use:

* Lovable Cloud
* Lovable APIs
* Lovable SDK
* Lovable authentication
* Lovable database
* Lovable-specific packages
* Lovable-specific runtime code
* Lovable-specific components
* Lovable-specific environment variables
* Any proprietary Lovable dependency

The project must be a normal standalone React + TypeScript + Vite + Tailwind CSS application that can be:

1. Downloaded/cloned from GitHub
2. Installed with npm
3. Run locally
4. Built with `npm run build`
5. Deployed directly to Vercel or another standard hosting provider

There must be no dependency on Lovable after development.

---

# CSS REQUIREMENT

This is also strict.

Do NOT put custom CSS in:

`App.css`

Do NOT create or use `App.css`.

Do NOT put custom CSS in:

`index.css`

`index.css` must contain **ONLY the required Tailwind CSS import/directive lines**.

Do not add:

* Custom CSS classes
* CSS variables
* Custom animations
* `@keyframes`
* Typography rules
* Component styles
* Utility classes
* Global custom styles

Use Tailwind CSS classes directly inside React components.

If a style can be implemented using Tailwind utility classes, use Tailwind.

Do not create unnecessary CSS files.

---

# ANIMATIONS

This is a DEMO VERSION.

Do NOT add animation libraries.

Do NOT add Framer Motion.

Do NOT add custom CSS animations.

Do NOT add complex transitions.

Keep the website static, polished and professional.

Simple native CSS transitions through Tailwind utility classes are acceptable for basic interactions such as:

* `hover:`
* `focus:`
* `transition-colors`
* `transition-opacity`

Do not build elaborate animations.

---

# PROJECT TYPE

Create a **single-page school website**.

Do NOT create separate pages/routes.

The navigation should scroll to sections on the same page.

Sections:

1. Home
2. About
3. Instagram
4. Contact
5. Footer

---

# RESPONSIVE DESIGN

The website must be properly responsive across:

* Small mobile phones
* Large mobile phones
* Tablets
* iPads
* iPad Pro
* MacBook
* Small laptops
* Large laptops
* Desktop monitors
* Large desktop monitors
* Ultra-wide screens

Do not optimize only for one mobile size and one desktop size.

Test the layout conceptually across:

320px
360px
375px
390px
414px
768px
820px
1024px
1280px
1440px
1920px
2560px

Requirements:

* No horizontal scrolling
* No overlapping content
* No clipped text
* No broken navigation
* No fixed-width layouts that break on mobile
* Images must scale correctly
* Forms must remain usable on mobile
* Buttons must have appropriate touch targets
* Cards must adapt to viewport width
* Typography must scale appropriately
* Containers must have sensible maximum widths
* Large screens must not have excessive stretched content

Use Tailwind responsive utilities, Flexbox and CSS Grid.

Use fluid sizing where appropriate.

---

# DUMMY SCHOOL BRANDING

This is only a demo that will be shown to the client.

Do NOT invent or assume the actual school name, address, phone number or other real school information.

Use placeholders such as:

`School Name`

`Your School Tagline`

`school@example.com`

`+91 XXXXX XXXXX`

`School Address, Mumbai, Maharashtra`

Make all school-specific information easy to replace later.

---

# DUMMY SCHOOL IMAGE / LOGO

Create/use a **dummy local school logo/placeholder image** for the demo.

The same dummy school branding should be used consistently in:

### Header

Show the dummy school logo beside:

`School Name`

### Favicon

Use the dummy school logo/mark as the favicon.

### Footer

Use the same dummy school logo beside the school name.

IMPORTANT:

The image assets should be stored locally inside the project.

Do NOT depend on external image URLs for the school logo.

Do NOT use an external service that could disappear later.

Use proper `alt` text for the logo where it is meaningful.

For the favicon, configure it through the normal Vite/HTML favicon mechanism.

---

# NAVBAR

Create a sticky responsive navbar.

Desktop:

Left:

* Dummy school logo
* School Name

Right:

* Home
* About
* Instagram
* Contact

Navigation links should smoothly scroll to the corresponding section.

Mobile:

* Logo
* School name
* Native React hamburger button
* Mobile navigation menu

Do not use an icon library.

For the hamburger icon, create it using simple Tailwind/HTML elements or text.

The mobile menu must be accessible.

Use:

* `aria-label`
* `aria-expanded`
* `aria-controls`

where appropriate.

Use `aria-current` where appropriate for the active navigation section.

---

# HOME SECTION

Create a professional school hero section.

Use:

* Dummy school name
* Strong educational headline
* Short description
* Primary CTA: `Contact Us`
* Secondary CTA: `Learn More`

Primary CTA scrolls to Contact.

Secondary CTA scrolls to About.

Use a **dummy local school-related image** for the hero.

The image must be responsive.

Use proper `alt` text.

Do not use an external image dependency.

The school name should be the page's single `

`.

---

# ABOUT SECTION

Create an attractive About section.

Heading:

`About Our School`

Use placeholder content.

Include three feature cards:

### Quality Education

### Holistic Development

### Safe & Supportive Environment

Use simple visual elements created with Tailwind/HTML.

Do NOT use an icon library.

Then create:

### Vision

### Mission

Use semantic HTML and proper heading hierarchy.

---

# INSTAGRAM SECTION

Create:

`Follow Us on Instagram`

Create a reusable React component:

`InstagramFeed`

For the demo, use local dummy placeholder data.

Display a responsive grid.

Desktop:

3 or 4 columns depending on available width.

Tablet:

2 columns.

Mobile:

1 column.

Each card should support:

* Local placeholder image
* Caption
* Date
* Instagram link

The component must be structured so that later we can replace the dummy data with Instagram API data without redesigning the UI.

IMPORTANT:

Do NOT implement Instagram API yet.

This is only the demo.

Do NOT install an Instagram package.

Do NOT use any third-party Instagram widget.

Do NOT expose API credentials.

Create a clean data structure that can later be replaced with real API data.

---

# CONTACT SECTION

Create:

`Contact Us`

Desktop:

Two-column layout.

Left:

School contact information.

Right:

Contact form.

Mobile:

Single-column layout.

Contact information:

* Address
* Phone
* Email
* Working Hours

Use placeholder school information.

---

# CONTACT FORM

Fields:

1. Full Name
2. Email Address
3. Phone Number
4. Message

All fields required.

Use proper:

* `

`
* ``
* ``
* ``
* `id`
* `name`
* `autocomplete`

Do NOT use placeholder text as a replacement for labels.

Implement client-side validation using React.

No validation library.

Use native JavaScript/TypeScript validation.

Display accessible validation messages.

Use:

* `aria-invalid`
* `aria-describedby`

where appropriate.

---

# WHATSAPP REDIRECTION

For the DEMO, use this testing WhatsApp number:

`7738735890`

Store it in ONE centralized configuration constant.

Use the country code:

`917738735890`

Do not duplicate the number throughout the application.

The form flow must be:

User fills form
→ Validate form
→ Format the information
→ Create WhatsApp URL
→ Open WhatsApp

Use:

`https://wa.me/917738735890?text=...`

The message must be URL encoded.

Use this message format:

```text
Hello, I am interested in contacting the school.

Name: [Full Name]
Email: [Email]
Phone: [Phone]

Message:
[Message]

Sent from the school website.
```

The actual form values must be inserted dynamically.

IMPORTANT:

The website should NOT automatically send the message.

It should open WhatsApp with the message pre-filled, and the user must press Send.

Do not use a backend for this feature.

Make the WhatsApp number easy to replace later with the school's actual number.

---

# WHATSAPP BUTTON

Add a clear WhatsApp CTA in the Contact section:

`Chat with us on WhatsApp`

Use the same centralized WhatsApp number.

Do not use an icon library.

---

# EMAIL REDIRECTION

Add a clickable email address using native HTML:

```html
<a href="mailto:school</body>@example.com">
```

Use placeholder email for now.

Keep it in the centralized school configuration.

---

# BACK TO TOP

Create a simple back-to-top button using React state and native browser APIs.

Requirements:

* Hidden near the top
* Appears after scrolling down
* Scrolls smoothly to the top
* Accessible
* Proper `aria-label`
* Keyboard accessible
* Good touch target
* Does not cover important content

Do NOT use a library.

Do NOT create custom CSS animations.

---

# ACCESSIBILITY

Use semantic HTML properly.

Prefer:

```html



```

Use:

* One `

`
* `

` for main sections
* `

` for subsections/cards where appropriate

Do not skip heading levels unnecessarily.

Use native HTML semantics before ARIA.

All form inputs must have associated labels.

All interactive elements must be keyboard accessible.

Buttons must be ``.

Links must be ``.

Do not use clickable `

` elements.

Add visible focus states using Tailwind.

Use ARIA attributes only where they provide meaningful accessibility information.

---

# SEO

Make the single-page website SEO-friendly.

Implement:

* Meaningful `@keyframes`
* custom classes
* global styles
* custom animations
* resets written manually

Use Tailwind utilities instead.

---

# APP.TSX

Do not put large amounts of styling logic or CSS into `App.tsx`.

Use reusable React components.

Keep `App.tsx` clean.

---

# NO LOVABLE LOCK-IN

Before completing the project, verify that:

* No Lovable package exists in `package.json`
* No Lovable imports exist
* No Lovable API calls exist
* No Lovable Cloud dependency exists
* No Lovable environment variables are required
* No proprietary services are required

The project must run independently with:

```bash
npm install
npm run dev
```

and build successfully with:

```bash
npm run build
```

It must be deployable directly to Vercel.

---

# FINAL DEMO QUALITY CHECK

Before finishing, verify:

* Responsive on mobile
* Responsive on tablet
* Responsive on MacBook/laptop
* Responsive on desktop
* Responsive on large/ultra-wide screens
* No horizontal overflow
* No broken layout
* No console errors
* No missing images
* Dummy school logo works
* Dummy logo appears in header
* Dummy logo appears in footer
* Dummy logo works as favicon
* Navbar works
* Mobile menu works
* About navigation works
* Instagram section works with dummy data
* Contact form validates correctly
* WhatsApp redirect works
* WhatsApp message is correctly formatted
* Email link works
* Back-to-top works
* Keyboard navigation works
* Form labels are accessible
* ARIA attributes are used appropriately
* Heading hierarchy is correct
* Exactly one `

`
* SEO metadata exists
* JSON-LD exists
* No unnecessary dependencies
* No Lovable dependency
* No Framer Motion
* No animation library
* No icon library
* No custom CSS in `App.css`
* No custom CSS in `index.css`
* `index.css` contains only Tailwind import/directive lines
* `npm run build` succeeds

The result should be a **clean, professional school website demo that looks client-ready while keeping the codebase extremely lightweight and completely independent of Lovable.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c981943b-c565-45e6-acd9-4d0cf183ae50).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
