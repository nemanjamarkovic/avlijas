# How to Show Up in Google Search Rankings - Complete Guide

## 🎯 Overview

To appear in Google search results and rank well, you need to complete several essential steps. This guide covers everything from basic setup to advanced optimization.

---

## ✅ STEP 1: ESSENTIAL SETUP (Do These First!)

### 1.1 Google Search Console Setup ⭐⭐⭐⭐⭐

**What it is:** Free tool from Google that tells Google about your website and shows how it's performing in search.

**How to set up:**

1. Go to: https://search.google.com/search-console
2. Click "Start now" and sign in with Google account
3. Add your property: `https://transportpokojnika.com`
4. Verify ownership using one of these methods:
   - **HTML file upload** (easiest)
   - DNS verification
   - HTML tag in `<head>`
   - Google Analytics

**Verification via HTML file (recommended):**

```
1. Download verification file from Google
2. Upload it to your website root folder
3. Click "Verify" in Search Console
```

**Why it's critical:**

- ✅ Tells Google your site exists
- ✅ Shows which keywords bring traffic
- ✅ Alerts you to problems
- ✅ Lets you submit sitemap

---

### 1.2 Submit Your Sitemap ⭐⭐⭐⭐⭐

**What it is:** A file that lists all your pages so Google can find and index them.

**You already have:** `sitemap.xml` in your root folder

**How to submit:**

1. Open Google Search Console
2. Go to "Sitemaps" in left menu
3. Enter: `sitemap.xml`
4. Click "Submit"

**Expected result:**

- Google will start crawling your pages
- Pages will appear in search within 1-7 days

---

### 1.3 Google Business Profile (Google My Business) ⭐⭐⭐⭐⭐

**What it is:** Your business listing on Google Maps and local search results.

**How to set up:**

1. Go to: https://business.google.com
2. Click "Manage now"
3. Enter business details:

   - **Name:** Transport pokojnika - Pogrebno preduzeće
   - **Category:** Funeral Home / Funeral Service
   - **Address:** Your business address in Belgrade
   - **Phone:** +381 64 249 28 49
   - **Website:** https://transportpokojnika.com
   - **Hours:** 24/7

4. Verify your business (Google will send postcard or call)

**Why it's critical:**

- ✅ Appears in "near me" searches
- ✅ Shows on Google Maps
- ✅ Displays reviews
- ✅ Shows phone number prominently

**Optimization tips:**

- Add photos of your vehicles
- Add photos of your office
- Post updates weekly
- Respond to all reviews
- Add services list
- Add service areas (Belgrade, Serbia, etc.)

---

### 1.4 robots.txt File ⭐⭐⭐⭐

**You already have:** `robots.txt` in your root folder

**Verify it contains:**

```
User-agent: *
Allow: /
Sitemap: https://transportpokojnika.com/sitemap.xml
```

**What it does:**

- Tells search engines they can crawl your site
- Points to your sitemap

---

## 📊 STEP 2: TECHNICAL SEO (Already Mostly Done!)

### 2.1 Meta Tags ✅ DONE

You've already completed:

- ✅ Unique title tags on all pages
- ✅ Compelling meta descriptions (updated today!)
- ✅ Keywords in titles
- ✅ "MI ZAVRŠAVAMO SVU DOKUMENTACIJU" messaging

**What's working:**

- Each page has unique, keyword-rich title
- Meta descriptions are compelling and include phone number
- Emphasizes your key differentiator

---

### 2.2 Schema Markup (Structured Data) ⭐⭐⭐⭐

**What you have:**

- ✅ FuneralHome schema on homepage
- ✅ Service schema on country pages
- ✅ Breadcrumb schema on city pages

**What to add next:**

1. **FAQ Schema** - Add to all pages with FAQ sections
2. **LocalBusiness Schema** - Add to all pages
3. **Review Schema** - When you have reviews

**How to add FAQ Schema:**

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Koliko košta prevoz pokojnika iz Nemačke?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cena zavisi od grada i usluga. Kontaktirajte nas za besplatnu procenu."
        }
      }
    ]
  }
</script>
```

**Test your schema:**

- Go to: https://search.google.com/test/rich-results
- Enter your URL
- Fix any errors

---

### 2.3 Page Speed ⭐⭐⭐⭐

**Test your speed:**

- Go to: https://pagespeed.web.dev
- Enter: https://transportpokojnika.com
- Aim for 90+ score

**Common improvements:**

1. **Compress images:**

   - Use TinyPNG or similar
   - Convert to WebP format
   - Add width/height attributes

2. **Minify CSS/JS:**

   - You already have `styles.min.css` ✅
   - Consider minifying JavaScript

3. **Enable caching:**
   - Add to `.htaccess`:

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

### 2.4 Mobile-Friendly ✅ DONE

**You already have:**

- ✅ Responsive design
- ✅ Mobile-optimized header (fixed today!)
- ✅ Touch-friendly buttons
- ✅ Readable text size

**Test it:**

- Go to: https://search.google.com/test/mobile-friendly
- Enter your URL
- Should pass all tests

---

### 2.5 HTTPS/SSL Certificate ✅ DONE

**You already have:**

- ✅ SSL certificate (https://)
- ✅ Secure connection

**Verify:**

- Check that all pages load with `https://`
- No mixed content warnings
- Green padlock in browser

---

## 🔗 STEP 3: OFF-PAGE SEO (Build Authority)

### 3.1 Get Backlinks ⭐⭐⭐⭐⭐

**What are backlinks:** Other websites linking to yours. Google sees this as a "vote of confidence."

**Where to get quality backlinks:**

#### A. Local Directories (Easy, Do First!)

1. **Google Business Profile** ✅ (set up in Step 1.3)
2. **Yelp Serbia:** https://www.yelp.com
3. **Yellow Pages Serbia:** https://www.yellowpages.rs
4. **Infobel:** https://www.infobel.com
5. **Local.rs:** Submit your business
6. **Srbija.gov.rs:** Government business directory

#### B. Industry Directories

1. **Funeral service directories**
2. **Transport service directories**
3. **European business directories**

#### C. Social Media (Already Done! ✅)

- ✅ Facebook page with link to website
- ✅ Instagram with link in bio
- Add to: LinkedIn, Twitter, YouTube

#### D. Content & PR

1. **Write guest posts:**

   - Contact Serbian blogs about expat life
   - Offer to write "What to do when someone dies abroad"
   - Include link to your site

2. **Get mentioned in news:**

   - Contact local newspapers
   - Offer expert commentary on repatriation
   - Press releases about your service

3. **Partner websites:**
   - Serbian embassies abroad (ask for listing)
   - Expat forums and communities
   - Travel insurance companies

#### E. Citations (NAP - Name, Address, Phone)

Make sure your business info is consistent everywhere:

- **Name:** Transport pokojnika - Pogrebno preduzeće
- **Address:** [Your address]
- **Phone:** +381 64 249 28 49

List on:

- Google Business Profile
- Facebook
- Instagram
- Yelp
- Yellow Pages
- All directories

---

### 3.2 Social Signals ⭐⭐⭐

**What to do:**

1. **Post regularly on social media:**

   - Facebook: 2-3 times per week
   - Instagram: 3-4 times per week
   - Share helpful content
   - Answer questions
   - Engage with followers

2. **Get social shares:**

   - Add share buttons to blog posts
   - Ask satisfied customers to share
   - Share testimonials

3. **Build following:**
   - Run Facebook ads (small budget)
   - Engage with local community
   - Join relevant groups

---

## 📝 STEP 4: CONTENT STRATEGY (Ongoing)

### 4.1 Blog Content ⭐⭐⭐⭐⭐

**Why it matters:** Fresh, helpful content = better rankings

**Topics to write about:**

#### Week 1-4 (Priority Articles):

1. **"Šta raditi kada neko umre u inostranstvu - Kompletni vodič"**

   - Step-by-step guide
   - Country-specific information
   - Documentation checklist
   - Target keyword: "šta raditi kada neko umre u inostranstvu"

2. **"Dokumentacija za prevoz pokojnika iz Nemačke"**

   - Detailed document list
   - Where to get each document
   - Timeline
   - Target keyword: "dokumentacija prevoz pokojnika nemačka"

3. **"Koliko košta prevoz pokojnika iz Evrope - Cenovnik 2024"**

   - Price ranges by country
   - What affects cost
   - Hidden costs to avoid
   - Target keyword: "koliko košta prevoz pokojnika"

4. **"Kako izabrati pogrebni sanduk - Vodič za porodice"**
   - Types of coffins
   - Materials explained
   - Price ranges
   - Target keyword: "pogrebni sanduk izbor"

#### Month 2 (Next Articles):

5. "Razlika između repatrijacije i ekshumacije"
6. "Vremenska linija: Od smrti do sahrane u Srbiji"
7. "Najčešće greške pri organizaciji prevoza pokojnika"
8. "Kako se priprema telo za međunarodni transport"

**Article structure:**

- 1000-2000 words
- Include target keyword 5-8 times
- Use H2 and H3 headings
- Add images
- Include internal links
- Add FAQ section at end
- Include call-to-action

---

### 4.2 Update Existing Content ⭐⭐⭐⭐

**What to do:**

1. **Add more content to thin pages:**

   - City pages should have 500+ words
   - Country pages should have 800+ words
   - Add local information
   - Add FAQ sections

2. **Add "MI ZAVRŠAVAMO SVU DOKUMENTACIJU" section:**

   - To all country pages
   - To all city pages
   - Explain exactly what you handle

3. **Add "Proces" section:**
   - Step-by-step explanation
   - Timeline
   - What customer needs to provide

---

### 4.3 Create New City Pages ⭐⭐⭐⭐⭐

**Priority cities (create next week):**

1. Düsseldorf
2. Köln (Cologne)
3. Stuttgart
4. Dortmund
5. Essen

**Why it matters:**

- Each city page = new keyword opportunity
- "prevoz pokojnika iz [city]" searches
- Less competition than country pages
- Easier to rank

**Template for each city:**

- H1: "Prevoz pokojnika iz [CITY] | Hitni transport 24/7"
- 500+ words of content
- Local information (hospitals, embassies)
- Documentation specific to that city
- FAQ section (3-5 questions)
- Breadcrumb navigation
- Link back to country page

---

## 🎯 STEP 5: LOCAL SEO (Critical for Your Business!)

### 5.1 Optimize for "Near Me" Searches ⭐⭐⭐⭐⭐

**Target keywords:**

- "prevoz pokojnika beograd"
- "pogrebno preduzeće beograd"
- "transport pokojnika srbija"
- "međunarodni prevoz pokojnika beograd"

**How to optimize:**

1. **Add location to titles:**

   - "Prevoz pokojnika Beograd | Međunarodni transport"

2. **Create location pages:**

   - `/beograd` page
   - `/novi-sad` page
   - `/nis` page

3. **Add location schema:**

```json
{
  "@type": "LocalBusiness",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Beograd",
    "addressCountry": "RS"
  }
}
```

---

### 5.2 Get Reviews ⭐⭐⭐⭐⭐

**Why critical:** Reviews are #1 local ranking factor

**Where to get reviews:**

1. **Google Business Profile** (most important!)
2. Facebook
3. Yelp
4. Industry-specific sites

**How to get reviews:**

1. **Ask satisfied customers:**

   - After successful transport
   - Send follow-up email
   - Make it easy (direct link)

2. **Respond to all reviews:**

   - Thank positive reviews
   - Address negative reviews professionally
   - Shows you care

3. **Display reviews on website:**
   - Add Google Reviews widget
   - Show testimonials prominently
   - Add review schema markup

---

## 📈 STEP 6: TRACKING & MONITORING

### 6.1 Google Analytics 4 ✅ DONE

**You already have:** GA4 tracking code

**What to monitor:**

- Organic traffic (from Google)
- Top landing pages
- Conversion rate
- Bounce rate
- Time on page

**Set up goals:**

1. Phone call clicks
2. Contact form submissions
3. WhatsApp clicks
4. Time on site > 2 minutes

---

### 6.2 Google Search Console ⭐⭐⭐⭐⭐

**What to monitor weekly:**

1. **Performance Report:**

   - Which keywords bring traffic
   - Click-through rate (CTR)
   - Average position

2. **Coverage Report:**

   - Which pages are indexed
   - Any errors

3. **Enhancements:**
   - Mobile usability issues
   - Core Web Vitals

**How to improve rankings:**

- Find keywords ranking #11-20
- Optimize those pages
- Add more content
- Get backlinks to them

---

### 6.3 Rank Tracking Tools

**Free tools:**

1. **Google Search Console** (built-in)
2. **Ubersuggest** - https://ubersuggest.com (free tier)
3. **Google Keyword Planner**

**Paid tools (optional):**

1. **SEMrush** (~€100/month) - Professional
2. **Ahrefs** (~€100/month) - Professional
3. **Moz** (~€100/month) - Good for beginners

**What to track:**

- Your position for target keywords
- Competitor positions
- New keyword opportunities
- Backlink growth

---

## 🚀 STEP 7: QUICK WINS (Do This Week!)

### Week 1 Checklist:

- [ ] **Set up Google Search Console**

  - Verify ownership
  - Submit sitemap
  - Check for errors

- [ ] **Set up Google Business Profile**

  - Add all business info
  - Upload photos
  - Add services
  - Request verification

- [ ] **Optimize images**

  - Compress all images
  - Add alt text to all images
  - Add width/height attributes

- [ ] **Add FAQ schema**

  - To homepage
  - To country pages
  - Test with Google tool

- [ ] **Get first 5 backlinks**

  - Submit to 3 directories
  - Add to 2 social media profiles
  - Ensure NAP consistency

- [ ] **Ask for 3 reviews**
  - Contact recent customers
  - Send direct Google review link
  - Respond to any existing reviews

---

## 📊 EXPECTED TIMELINE FOR RANKINGS

### Week 1-2: Setup Phase

- Google indexes your site
- Search Console shows data
- First pages appear in search

### Week 3-4: Initial Rankings

- Long-tail keywords start ranking
- City pages appear in search
- Position #30-50 for main keywords

### Month 2-3: Growth Phase

- Main keywords move to #20-30
- City pages rank #10-20
- Organic traffic increases 50%

### Month 4-6: Competitive Phase

- Main keywords reach #10-15
- City pages rank #5-10
- Organic traffic doubles

### Month 7-12: Authority Phase

- Main keywords reach #3-5
- City pages rank #1-3
- Organic traffic triples
- Established market presence

---

## 🎯 TARGET KEYWORDS & EXPECTED POSITIONS

### Primary Keywords (High Competition):

| Keyword                             | Current    | 3 Months | 6 Months | 12 Months |
| ----------------------------------- | ---------- | -------- | -------- | --------- |
| prevoz pokojnika iz inostranstva    | Not ranked | #20-30   | #10-15   | #3-5      |
| međunarodni prevoz pokojnika        | Not ranked | #25-35   | #15-20   | #5-8      |
| transport pokojnika iz inostranstva | Not ranked | #20-30   | #10-15   | #3-5      |

### Country Keywords (Medium Competition):

| Keyword                        | Current | 3 Months | 6 Months | 12 Months |
| ------------------------------ | ------- | -------- | -------- | --------- |
| prevoz pokojnika iz nemačke    | #15-20  | #8-12    | #3-5     | #1-2      |
| prevoz pokojnika iz austrije   | #20-25  | #10-15   | #5-8     | #2-3      |
| prevoz pokojnika iz švajcarske | #20-25  | #10-15   | #5-8     | #2-3      |

### City Keywords (Low Competition):

| Keyword                     | Current | 3 Months | 6 Months | 12 Months |
| --------------------------- | ------- | -------- | -------- | --------- |
| prevoz pokojnika iz berlina | #25-30  | #8-12    | #3-5     | #1-2      |
| prevoz pokojnika iz beča    | #30-40  | #10-15   | #5-8     | #1-3      |
| prevoz pokojnika iz ciriha  | #30-40  | #10-15   | #5-8     | #1-3      |

---

## 💡 PRO TIPS FOR FASTER RANKINGS

### 1. Focus on Long-Tail Keywords First

Instead of: "prevoz pokojnika"
Target: "prevoz pokojnika iz berlina u beograd"

**Why:** Less competition, easier to rank, more specific intent

### 2. Answer Questions

Create content around:

- "kako prevesti pokojnika iz nemačke"
- "šta treba za prevoz pokojnika"
- "koliko košta prevoz pokojnika iz austrije"

**Why:** Featured snippets, voice search, helpful content

### 3. Optimize for Intent

Understand what searchers want:

- **Informational:** "kako prevesti pokojnika" → Blog post
- **Commercial:** "najbolje pogrebno preduzeće" → Comparison page
- **Transactional:** "prevoz pokojnika beograd" → Service page

### 4. Build Topical Authority

Don't just create random pages. Build clusters:

- **Main topic:** Prevoz pokojnika iz Nemačke
- **Subtopics:** Berlin, Hamburg, München, Frankfurt
- **Supporting:** Dokumentacija, cene, proces

**Link them together:**

- Country page links to all city pages
- City pages link back to country page
- All link to relevant blog posts

### 5. Steal Competitor Keywords

**How to do it:**

1. Go to: https://ubersuggest.com
2. Enter competitor URL (funusprevoz.com)
3. See which keywords they rank for
4. Create better content for those keywords

---

## ⚠️ COMMON MISTAKES TO AVOID

### 1. Keyword Stuffing ❌

**Don't:** Repeat keyword 50 times
**Do:** Use keyword naturally 5-8 times

### 2. Duplicate Content ❌

**Don't:** Copy competitor content
**Do:** Write unique, original content

### 3. Ignoring Mobile ❌

**Don't:** Desktop-only optimization
**Do:** Mobile-first approach (you're doing this! ✅)

### 4. No Internal Linking ❌

**Don't:** Isolated pages
**Do:** Link related pages together

### 5. Forgetting Local SEO ❌

**Don't:** Only target international keywords
**Do:** Also target local (Beograd, Srbija)

### 6. Not Tracking Results ❌

**Don't:** Guess what's working
**Do:** Use Google Search Console & Analytics

### 7. Expecting Instant Results ❌

**Don't:** Expect #1 in 1 week
**Do:** Be patient, SEO takes 3-6 months

---

## 📞 WHAT TO DO RIGHT NOW (Action Plan)

### Today (30 minutes):

1. ✅ Set up Google Search Console
2. ✅ Submit sitemap
3. ✅ Start Google Business Profile setup

### This Week (2-3 hours):

1. ✅ Complete Google Business Profile
2. ✅ Add FAQ schema to 3 pages
3. ✅ Compress all images
4. ✅ Submit to 5 directories
5. ✅ Ask 3 customers for reviews

### This Month (8-10 hours):

1. ✅ Write 4 blog articles
2. ✅ Create 5 new city pages
3. ✅ Get 10 backlinks
4. ✅ Get 5 Google reviews
5. ✅ Optimize all images

### Ongoing (Weekly):

1. ✅ Check Google Search Console
2. ✅ Post on social media
3. ✅ Respond to reviews
4. ✅ Write 1 blog article
5. ✅ Get 2-3 backlinks

---

## 🎉 SUMMARY

### To show up in Google search, you need:

1. **Technical Setup:**

   - ✅ Google Search Console
   - ✅ Sitemap submitted
   - ✅ Google Business Profile
   - ✅ Fast loading speed
   - ✅ Mobile-friendly
   - ✅ HTTPS

2. **On-Page SEO:**

   - ✅ Unique titles (DONE!)
   - ✅ Meta descriptions (DONE!)
   - ✅ Schema markup
   - ✅ Quality content
   - ✅ Internal linking

3. **Off-Page SEO:**

   - ✅ Backlinks from directories
   - ✅ Social media presence (DONE!)
   - ✅ Reviews
   - ✅ Citations

4. **Content:**

   - ✅ Blog articles
   - ✅ City pages
   - ✅ FAQ sections
   - ✅ Regular updates

5. **Local SEO:**
   - ✅ Google Business Profile
   - ✅ Local keywords
   - ✅ Reviews
   - ✅ NAP consistency

### Your Current Status:

- ✅ Website structure: Excellent
- ✅ Meta tags: Optimized (updated today!)
- ✅ Mobile-friendly: Yes
- ✅ Social media: Set up
- ⏳ Google Search Console: Need to set up
- ⏳ Google Business Profile: Need to set up
- ⏳ Backlinks: Need to build
- ⏳ Reviews: Need to get
- ⏳ Blog content: Need to create

### Priority Order:

1. **Week 1:** Google Search Console + Google Business Profile
2. **Week 2:** Get first backlinks + reviews
3. **Week 3-4:** Create blog content + new city pages
4. **Ongoing:** Monitor, optimize, repeat

---

**Remember:** SEO is a marathon, not a sprint. Consistent effort over 6-12 months will get you to #1!

---

_Guide created: December 11, 2024_
_Next update: January 11, 2025_
_Questions? Refer to this guide or check Google Search Console Help_
