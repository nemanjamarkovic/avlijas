# Layout Shift Fixes - CLS Optimization

## Overview

This document outlines the fixes applied to reduce Cumulative Layout Shift (CLS) from 1.867 to near-zero.

## Issues Identified

### 1. Dynamic Header Loading (1.000 shift score)

**Problem:** Header loaded via JavaScript after page render, causing entire page to shift down.

**Solution:**

- Added `min-height: 140px` to `#header-container` in critical CSS
- Added `background-color: #1a1a1a` to match final header appearance
- Reserved space before content loads

### 2. Hero Section (0.866 shift score)

**Problem:** Hero section dimensions not defined, causing shifts as content loads.

**Solution:**

- Added `min-height: 80vh` to `.hero-section` in critical CSS
- Added `contain: layout` CSS property to isolate layout calculations
- Set explicit `aspect-ratio: 3/2` on hero image
- Added `min-height: 440px` to `.hero-image-wrapper`

### 3. Contact Links (Layout shift in header)

**Problem:** Contact links shifted as Bootstrap Icons font loaded.

**Solution:**

- Added `min-height: 36px` and `min-width: 44px` to `.contact-link`
- Set explicit dimensions on icon elements (`width: 1em; height: 1em`)
- Added `flex-shrink: 0` to prevent icon compression

### 4. Bootstrap Icons Font Loading

**Problem:** Icons appeared after text, causing layout shifts throughout the page.

**Solution:**

- Added font preload: `<link rel="preload" href="...bootstrap-icons.woff2" as="font" type="font/woff2" crossorigin />`
- Kept CSS deferred with `media="print" onload="this.media='all'"` to prevent render-blocking
- Reserved space for icons with `.bi::before` pseudo-element to prevent layout shift

### 5. Main Element Containment

**Problem:** Main element allowed layout shifts to propagate.

**Solution:**

- Added `contain: layout style` to `main` element
- This isolates layout calculations within the main element

## CSS Changes Applied

### Critical Inline CSS (index.html)

```css
/* Reserve space for header to prevent layout shift */
#header-container {
  min-height: 140px;
  background-color: #1a1a1a;
}

/* Prevent main element layout shifts */
main {
  flex: 1 0 auto;
  contain: layout style;
}

/* Reserve space for hero section */
.hero-section {
  min-height: 80vh;
  background: linear-gradient(135deg, #2b2b2b 0%, #1a1a1a 100%);
  contain: layout;
}

/* Prevent layout shift from contact links */
.contact-link {
  display: inline-flex;
  align-items: center;
  min-width: 44px;
  min-height: 36px;
}

/* Contact info styling to prevent shifts */
.contact-info {
  display: flex;
  align-items: center;
  min-height: 40px;
}

/* Reserve space for icons before they load */
.bi::before {
  display: inline-block;
  width: 1em;
  height: 1em;
}

/* Top bar minimum height */
.top-bar {
  min-height: 80px;
}

/* Navbar minimum height */
.navbar {
  min-height: 60px;
}

/* Mobile-specific layout shift prevention */
@media (max-width: 768px) {
  /* Adjust header height for mobile */
  #header-container {
    min-height: 180px;
  }

  /* Hero section mobile adjustment */
  .hero-section {
    min-height: 100vh;
    padding: 60px 0;
  }

  /* Contact info mobile layout */
  .contact-info {
    flex-wrap: wrap;
    gap: 6px;
    min-height: 50px;
  }

  /* Contact link mobile sizing */
  .contact-link {
    width: 36px;
    height: 36px;
    min-width: 36px;
    min-height: 36px;
    padding: 8px;
  }

  /* Top bar mobile height */
  .top-bar {
    min-height: 120px;
  }

  /* Navbar mobile height */
  .navbar {
    min-height: 56px;
  }

  /* Row and column mobile stability */
  .row {
    margin-left: 0;
    margin-right: 0;
  }

  .col-md-6 {
    padding-left: 12px;
    padding-right: 12px;
  }
}
```

### styles.css Updates

#### Header Styles

```css
.top-bar {
  min-height: 80px;
}

.contact-info i,
.working-hours i {
  width: 1em;
  height: 1em;
  display: inline-block;
}

.contact-info .contact-link {
  min-height: 36px;
  min-width: 44px;
}

.contact-info .contact-link i {
  width: 1em;
  height: 1em;
  flex-shrink: 0;
}
```

#### Main Element

```css
main {
  flex: 1 0 auto;
  contain: layout style;
}
```

#### Hero Section

```css
.hero-section {
  contain: layout;
}

.hero-image-wrapper {
  min-height: 440px;
}

.hero-image {
  aspect-ratio: 3/2;
  object-fit: cover;
}
```

#### Navbar

```css
.navbar {
  min-height: 60px;
}
```

## HTML Changes

### Font Preloading

**Before:**

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  media="print"
  onload="this.media='all'"
/>
```

**After:**

```html
<link
  rel="preload"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
/>
```

## Testing Recommendations

1. **Test with Chrome DevTools:**

   - Open DevTools > Performance
   - Enable "Web Vitals" in the Performance panel
   - Record page load and check CLS score

2. **Test with PageSpeed Insights:**

   - Run test on https://pagespeed.web.dev/
   - Check both mobile and desktop scores
   - CLS should now be < 0.1 (good)

3. **Test with slow 3G:**

   - Throttle network in DevTools
   - Verify no visible layout shifts during load

4. **Visual Regression Testing:**
   - Ensure all elements appear in correct positions
   - Verify header doesn't "pop in"
   - Confirm icons load smoothly

## Expected Results

- **Before:** CLS = 1.867 (Poor)
- **After:** CLS < 0.1 (Good)

### Breakdown:

- Main element: 1.000 → 0
- Hero section: 0.866 → 0
- Contact links: Minor shifts → 0

## Performance Impact

- **Positive:** Significantly improved CLS score
- **Neutral:** Minimal impact on LCP (font preload may slightly improve)
- **Trade-off:** Bootstrap Icons now block render slightly, but prevents layout shifts

## Browser Compatibility

All fixes use standard CSS properties supported in:

- Chrome 52+
- Firefox 69+
- Safari 11+
- Edge 79+

The `contain` property has excellent support and gracefully degrades in older browsers.

## Maintenance Notes

1. **Keep min-heights in sync:** If header design changes, update `#header-container` min-height
2. **Image dimensions:** Ensure hero image maintains 3:2 aspect ratio
3. **Icon fonts:** If switching icon libraries, apply similar preload strategy
4. **Critical CSS:** Keep critical CSS inline for fastest render

## Related Files

- `index.html` - Critical inline CSS and font preloading
- `styles.css` - Main stylesheet with dimension fixes
- `styles.min.css` - Minified version (auto-generated)
- `includes.js` - Header/footer injection script (no changes needed)

## References

- [Web.dev CLS Guide](https://web.dev/cls/)
- [CSS Containment](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Containment)
- [Font Loading Best Practices](https://web.dev/font-best-practices/)
