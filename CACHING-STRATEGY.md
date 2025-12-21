# Caching Strategy Documentation

## Overview

This document explains the caching strategy used for optimal performance and cache busting.

---

## Current Issue from PageSpeed Insights

**Problem:** Resources showing only 10-minute cache instead of 1-year cache
- `pogrebni-kombi-sa-sandukom.jpg` - 10m cache (should be 1 year)
- `includes.js?v=3` - 10m cache (should be 1 year)
- `styles.min.css?v=3` - 10m cache (should be 1 year)

**Estimated savings:** 107 KiB

---

## Caching Strategy

### 1. Versioned Files (CSS & JS)

**Files:**
- `styles.min.css?v=3`
- `includes.js?v=3`

**Strategy:**
- ✅ Use query string versioning (`?v=3`)
- ✅ Cache for 1 year (31536000 seconds)
- ✅ Mark as `immutable`
- ✅ **Do NOT** add version-specific rules to `_headers`

**Why this works:**
```
When you update the file:
1. Change version: ?v=3 → ?v=4
2. Browser sees new URL, fetches new file
3. Old version (?v=3) stays cached but unused
4. No need to update _headers file
```

**Headers Configuration:**
```
/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable
```

This matches:
- ✅ `styles.min.css?v=3`
- ✅ `styles.min.css?v=4`
- ✅ `includes.js?v=3`
- ✅ Any versioned CSS/JS file

### 2. Static Images

**Files:**
- `pogrebni-kombi-sa-sandukom.jpg`
- `pogrebni-sanduci.jpg`
- `pogrebni-sanduk.png`
- etc.

**Strategy:**
- ✅ Cache for 1 year (31536000 seconds)
- ✅ Mark as `immutable`
- ✅ Use wildcard rules (no need for specific files)

**Why images can be cached forever:**
- Images rarely change
- If you need to update an image, rename it or add version query string
- Example: `image.jpg` → `image-v2.jpg` or `image.jpg?v=2`

**Headers Configuration:**
```
/*.jpg
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable
```

### 3. HTML Files

**Files:**
- `index.html`
- `nemacka.html`
- All other `.html` files

**Strategy:**
- ❌ **NO cache** - always fetch fresh
- ✅ This ensures users always get latest content
- ✅ Referenced assets (CSS, JS, images) are cached via versioning

**Headers Configuration:**
```
/*.html
  Cache-Control: no-cache, no-store, must-revalidate
  Pragma: no-cache
  Expires: 0
```

### 4. Fonts

**Files:**
- Bootstrap Icons fonts (`.woff2`)
- Any custom fonts

**Strategy:**
- ✅ Cache for 1 year
- ✅ Fonts rarely change
- ✅ Use wildcard rules

**Headers Configuration:**
```
/*.woff
  Cache-Control: public, max-age=31536000, immutable

/*.woff2
  Cache-Control: public, max-age=31536000, immutable
```

---

## Why Wildcard Rules Are Better

### ❌ Bad Approach (Version-Specific)
```
/includes.js?v=3
  Cache-Control: public, max-age=31536000, immutable

/styles.min.css?v=3
  Cache-Control: public, max-age=31536000, immutable
```

**Problems:**
1. Must update `_headers` every version bump
2. Easy to forget
3. Maintenance overhead
4. Doesn't scale

### ✅ Good Approach (Wildcard)
```
/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable
```

**Benefits:**
1. Works for all versions automatically
2. No maintenance needed
3. Scales to any number of files
4. Cleaner configuration

---

## Troubleshooting 10-Minute Cache Issue

If PageSpeed Insights still shows 10-minute cache after deploying:

### 1. Check Netlify/Cloudflare Settings

**Netlify:**
- Go to Site Settings → Build & Deploy → Post Processing
- Ensure "Asset Optimization" isn't overriding headers
- Check if there's a default cache policy

**Cloudflare:**
- Go to Caching → Configuration
- Check "Browser Cache TTL" setting
- Should be "Respect Existing Headers"
- If set to a specific time, it overrides your headers

### 2. Verify Headers Are Applied

Test with curl:
```bash
curl -I https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg
```

Should show:
```
Cache-Control: public, max-age=31536000, immutable
```

If it shows:
```
Cache-Control: public, max-age=600
```
Then the hosting platform is overriding your headers.

### 3. Force Netlify to Respect Headers

Add to `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    
[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "no-cache, no-store, must-revalidate"
```

### 4. Check File Order in _headers

The `_headers` file processes rules **in order**. More specific rules should come **after** general rules:

```
# ✅ Correct Order
/*.jpg                          # General rule first
  Cache-Control: ...

/specific-image.jpg             # Specific rule second (if needed)
  Cache-Control: ...
```

---

## Optimal _headers File Structure

```
# Global Security Headers
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

# Images - 1 year cache
/*.jpg
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

# CSS & JS - 1 year cache (versioned)
/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

# Fonts - 1 year cache
/*.woff2
  Cache-Control: public, max-age=31536000, immutable

# HTML - No cache
/*.html
  Cache-Control: no-cache, no-store, must-revalidate
  Pragma: no-cache
  Expires: 0
```

---

## Cache Busting Workflow

### When You Update CSS or JS:

1. **Edit the file:**
   ```
   styles.css (make changes)
   ```

2. **Regenerate minified version:**
   ```bash
   npx clean-css-cli -o styles.min.css styles.css
   ```

3. **Update version in HTML files:**
   ```bash
   node update-versions.js
   ```
   This automatically updates `?v=3` to `?v=4` in all HTML files

4. **Deploy:**
   ```bash
   git add .
   git commit -m "Update styles v4"
   git push
   ```

5. **Result:**
   - Users get new file: `styles.min.css?v=4`
   - Old file `styles.min.css?v=3` stays cached but unused
   - No need to clear cache or update `_headers`

### When You Update an Image:

**Option 1: Rename the file**
```
pogrebni-kombi-sa-sandukom.jpg → pogrebni-kombi-sa-sandukom-v2.jpg
```

**Option 2: Add version query string**
```html
<img src="pogrebni-kombi-sa-sandukom.jpg?v=2" />
```

**Option 3: Replace with same name**
- Only if the image is fundamentally the same
- Users will get new version on next visit (after cache expires)

---

## Performance Impact

### Before Optimization:
- Cache TTL: 10 minutes (600 seconds)
- Repeat visitors: Re-download 107 KiB every 10 minutes
- Wasted bandwidth and slower load times

### After Optimization:
- Cache TTL: 1 year (31536000 seconds)
- Repeat visitors: Instant load from cache
- **Estimated savings: 107 KiB per repeat visit**

### Benefits:
1. **Faster repeat visits** - Assets load instantly from cache
2. **Reduced bandwidth** - Less data transfer
3. **Better Core Web Vitals** - Improved LCP and FCP
4. **Lower hosting costs** - Fewer requests to server
5. **Better user experience** - Faster page loads

---

## Testing Cache Headers

### 1. Chrome DevTools

1. Open DevTools (F12)
2. Go to Network tab
3. Reload page
4. Click on a resource (e.g., `styles.min.css?v=3`)
5. Check "Response Headers"
6. Look for: `Cache-Control: public, max-age=31536000, immutable`

### 2. Online Tools

**WebPageTest:**
- URL: https://www.webpagetest.org/
- Enter your site URL
- Check "Cache Static Content" in results

**GTmetrix:**
- URL: https://gtmetrix.com/
- Check "Leverage browser caching" recommendation

**PageSpeed Insights:**
- URL: https://pagespeed.web.dev/
- Should show "Use efficient cache lifetimes" as passed (green)

### 3. Command Line

```bash
# Check image cache
curl -I https://transportpokojnika.com/pogrebni-kombi-sa-sandukom.jpg | grep -i cache-control

# Check CSS cache
curl -I https://transportpokojnika.com/styles.min.css?v=3 | grep -i cache-control

# Check JS cache
curl -I https://transportpokojnika.com/includes.js?v=3 | grep -i cache-control
```

Expected output:
```
cache-control: public, max-age=31536000, immutable
```

---

## Common Mistakes to Avoid

### ❌ Don't Do This:

1. **Version-specific rules in _headers**
   ```
   /includes.js?v=3
     Cache-Control: ...
   ```
   Problem: Must update every version bump

2. **Caching HTML files**
   ```
   /*.html
     Cache-Control: public, max-age=31536000
   ```
   Problem: Users won't see updates

3. **Not using versioning for CSS/JS**
   ```html
   <link href="styles.min.css" rel="stylesheet">
   ```
   Problem: Users stuck with old cached version

4. **Short cache times for static assets**
   ```
   Cache-Control: public, max-age=3600
   ```
   Problem: Frequent re-downloads, slower repeat visits

### ✅ Do This Instead:

1. **Use wildcard rules**
   ```
   /*.js
     Cache-Control: public, max-age=31536000, immutable
   ```

2. **Never cache HTML**
   ```
   /*.html
     Cache-Control: no-cache, no-store, must-revalidate
   ```

3. **Always version CSS/JS**
   ```html
   <link href="styles.min.css?v=3" rel="stylesheet">
   ```

4. **Long cache times for static assets**
   ```
   Cache-Control: public, max-age=31536000, immutable
   ```

---

## Summary

### Key Principles:

1. **Version your CSS/JS** - Use query strings (`?v=3`)
2. **Use wildcard rules** - Don't specify versions in `_headers`
3. **Cache static assets for 1 year** - Images, fonts, CSS, JS
4. **Never cache HTML** - Always fetch fresh
5. **Test after deployment** - Verify headers are applied

### Expected Results:

- ✅ All static assets cached for 1 year
- ✅ HTML always fresh
- ✅ No need to update `_headers` when versioning
- ✅ PageSpeed Insights: "Use efficient cache lifetimes" passed
- ✅ 107 KiB savings per repeat visit

---

## Related Files

- `_headers` - Netlify/Cloudflare headers configuration
- `netlify.toml` - Netlify build configuration
- `update-versions.js` - Automatic version bumping script
- `version.json` - Current version tracking

---

*Last updated: December 21, 2025*

