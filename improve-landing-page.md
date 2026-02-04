# Landing Page Improvement Plan

## Current State Audit

| Element | Current | Problem |
|---------|---------|---------|
| **Headline** | "Get the data you need, without the hassle." | Generic, doesn't stop anyone. No specific outcome. Could be any SaaS product. |
| **Subheadline** | "You focus on growing your business. We handle the web scraping, data crawling, and pipeline automation..." | Talks about *us* and *our process*, not the outcome for *them*. |
| **Hero Image** | Abstract data extraction illustration | Doesn't prove the headline. No visible outcome. |
| **CTA** | "Get My Free Quote" | Says what they get (a quote) but not what the actual outcome is. "Quote" implies price uncertainty/negotiation. |
| **Form** | 7 fields on one page (name, email, phone, company, service, referral, message) | Too many fields upfront. High friction = low conversion. "Message" field is vague and intimidating. |

---

## 1. Headline — Stop them, promise a clear outcome

**Current:** "Get the data you need, without the hassle."

**Problems:**
- "Without the hassle" is a removed negative, not a concrete outcome
- "The data you need" is vague — what data? What do they do with it?
- Doesn't call out *who* this is for

**Suggested directions (pick one, test others):**

> **"Fresh data from any website. Delivered to your inbox every morning."**

> **"10,000 leads from LinkedIn by Friday. We scrape it, you close it."**

> **"We turn any website into a structured data feed you can actually use."**

**Principles applied:**
- Specific outcome (structured data feed, leads, inbox delivery)
- Implies speed / a timeframe
- The reader can picture the result

---

## 2. Subheadline — Clarify the promise, add context

**Current:** "You focus on growing your business. We handle the web scraping, data crawling, and pipeline automation — delivering clean, structured data on your schedule."

**Problems:**
- Leads with a cliche ("focus on growing your business")
- Lists services instead of clarifying the outcome
- Doesn't address who this is for or why now

**Suggested directions:**

> **"Tell us the website and the data points you need. We build the scraper, run it on your schedule, and deliver clean CSV/JSON/API — so you never copy-paste from a browser again."**

> **"No code. No maintenance. No broken scrapers at 2am. Just the data you asked for, in the format you need, on the schedule you set."**

**Principles applied:**
- Adds *how* (tell us, we build, we deliver)
- Addresses pain (broken scrapers, copy-pasting, maintenance)
- Specific formats ground it in reality

---

## 3. Hero Image — Show proof of the outcome

**Current:** Generic illustration — doesn't prove anything.

**Options (ranked by effectiveness):**

1. **Screenshot of an actual deliverable** — Show a real CSV/spreadsheet with scraped data (blur sensitive fields). Caption: "Actual client delivery — 50,000 product listings, refreshed daily." This is the strongest proof.

2. **Before/after split** — Left side: messy website. Right side: clean spreadsheet. Visual transformation = instant understanding.

3. **Dashboard/inbox mockup** — Show an email or Slack notification: "Your daily data delivery is ready — 12,450 new records." Makes the outcome tangible.

**Avoid:** Abstract illustrations, stock photos of people at computers, generic "data" graphics. These add zero proof.

---

## 4. CTA — What they get + how they get it

**Current:** "Get My Free Quote"

**Problems:**
- "Quote" implies cost/negotiation, creates anxiety
- Doesn't tell them what happens next
- Secondary CTA ("See How It Works") competes and dilutes

**Suggested directions:**

> **"Describe Your Data — Get a Free Sample"**
> (What they get: a sample. How: describe what they need.)

> **"Tell Us What You Need — We'll Show You a Sample"**

> **"Get a Free Data Sample in 24 Hours"**

**Principles applied:**
- Lowers commitment (sample, not quote)
- Action is clear (describe/tell us)
- Outcome is clear (sample in 24 hours)
- Remove the secondary CTA — one action only in the hero

---

## 5. Form — Minimum fields, multi-step

**Current:** 7 fields on one page. High friction.

### Proposed Multi-Step Form

**Step 1 — The easy commitment (1 field)**
> "What website do you need data from?"
> `[ Enter URL or website name ]`
> `[ Next -> ]`

*Why this works:* It's the one thing they definitely know. Low effort. Gets them invested (commitment bias). The question itself communicates what you do.

**Step 2 — Qualify the lead (2 fields)**
> "What data do you need from it?"
> `[ ] Contact info / leads`
> `[ ] Product listings / prices`
> `[ ] Reviews / ratings`
> `[ ] Job postings`
> `[ ] Other: ________`
>
> "How often do you need this data?"
> `( ) One-time pull`
> `( ) Daily`
> `( ) Weekly`
> `( ) Monthly`

*Why this works:* Multiple choice is easier than open text. Tells you the use case and value (recurring > one-time). Still feels easy.

**Step 3 — Contact info (2 fields)**
> "Where should we send your free sample?"
> `[ Email address ]`
> `[ Name ]`
> `[ Get My Free Sample ]`

*Why this works:* By now they're invested (2 steps done). Asking for email is framed as delivery mechanism, not lead capture. Name personalizes follow-up.

### Fields removed entirely:
- **Phone number** — High friction, low value at this stage. Get it on the sales call.
- **Company name** — Look it up from the email domain.
- **"How did you find us?"** — Use UTM params and analytics instead of asking the lead.
- **Message textarea** — Replaced by structured questions that are easier to answer AND give you better lead data.

### Technical notes:
- Add a progress indicator (Step 1 of 3) to set expectations
- Persist form state so back navigation doesn't lose data
- Submit partial data at each step (so you capture the URL even if they drop off)
- Animate transitions between steps for polish

---

## 6. Additional Recommendations

### Move social proof higher
The logos section ("We extract data from platforms you rely on") should appear directly below the hero, before features. Proof before explanation.

### Bottom CTA section
**Current:** "Your data, delivered." / "Get My Free Quote"

**Should mirror the hero promise:**
> **"See your data before you commit."**
> **"Describe what you need — get a free sample in 24 hours."**
> `[ Get My Free Sample ]`

### Features section
**Current headline:** "You tell us what you need. We deliver."

This is decent but should reinforce the outcome:
> **"Here's exactly what happens after you hit send."**

Reframe features as steps: (1) You tell us the source, (2) We build your scraper, (3) You get clean data on schedule. Process clarity reduces anxiety.

---

## Priority Order for Implementation

1. **Multi-step form** — Biggest conversion impact. Reducing fields from 7 to 2-per-step will measurably increase submissions.
2. **Headline + subheadline rewrite** — Second biggest impact. Current copy doesn't differentiate or stop the scroll.
3. **CTA copy change** — Quick win. "Free sample" > "free quote" for lowering commitment.
4. **Hero image swap** — Requires creating/sourcing a new asset, but high impact.
5. **Reorder sections** — Move logos/social proof above features.
6. **Bottom CTA alignment** — Match the new hero messaging.
