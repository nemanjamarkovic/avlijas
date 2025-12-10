# Security Headers Implementation Guide

This guide explains how to implement the Strict-Transport-Security (HSTS) header and other security headers for your website.

## What is HSTS?

HTTP Strict Transport Security (HSTS) is a security header that forces browsers to only connect to your website over HTTPS, preventing protocol downgrade attacks and cookie hijacking.

## Configuration Files Included

I've created configuration files for different hosting environments:

### 1. **Apache Server** - `.htaccess`

- Use this if your site is hosted on Apache
- Upload this file to your website's root directory
- Requires `mod_headers` and `mod_rewrite` modules to be enabled

### 2. **IIS Server** - `web.config`

- Use this if your site is hosted on Windows IIS
- Upload this file to your website's root directory
- Requires URL Rewrite module installed

### 3. **Nginx Server** - `nginx.conf`

- Use this if your site is hosted on Nginx
- Add the configuration to your Nginx server block
- Update SSL certificate paths
- Reload Nginx: `sudo nginx -t && sudo nginx -s reload`

### 4. **Static Hosting (Netlify/Cloudflare Pages)** - `_headers`

- Use this if hosting on Netlify, Cloudflare Pages, or similar
- Upload this file to your website's root directory
- The platform will automatically apply these headers

## Implementation Steps

### Step 1: Ensure HTTPS is Working

**IMPORTANT:** Before enabling HSTS, make sure:

- Your site has a valid SSL certificate
- All pages load correctly over HTTPS
- All resources (images, scripts, stylesheets) use HTTPS

### Step 2: Choose the Right Configuration File

Based on your hosting environment, use the appropriate configuration file:

- **cPanel/Shared Hosting**: Usually Apache → use `.htaccess`
- **Windows Server**: IIS → use `web.config`
- **VPS/Dedicated Server**: Check if Apache or Nginx → use respective config
- **Netlify/Cloudflare Pages/Vercel**: Use `_headers`

### Step 3: Upload Configuration

1. Upload the appropriate configuration file to your website's root directory
2. Test your website to ensure it still works correctly
3. Verify the headers are being sent (see Testing section below)

### Step 4: Test the Implementation

Use these tools to verify HSTS is working:

1. **Browser DevTools:**

   - Open Chrome/Firefox DevTools (F12)
   - Go to Network tab
   - Load your website
   - Click on the first request
   - Check Response Headers for `Strict-Transport-Security`

2. **Online Tools:**
   - https://securityheaders.com/
   - https://hstspreload.org/
   - https://www.ssllabs.com/ssltest/

### Step 5: Monitor for Issues

After implementation:

- Test all pages of your website
- Check that all resources load correctly
- Verify forms and interactive elements work
- Test on different browsers

## Security Headers Explained

### Strict-Transport-Security

```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
```

- `max-age=31536000`: Enforce HTTPS for 1 year (31,536,000 seconds)
- `includeSubDomains`: Apply to all subdomains
- `preload`: Allow inclusion in browser preload lists

### X-Content-Type-Options

```
X-Content-Type-Options: nosniff
```

Prevents browsers from MIME-sniffing responses, reducing XSS risks.

### X-XSS-Protection

```
X-XSS-Protection: 1; mode=block
```

Enables browser's built-in XSS protection (legacy browsers).

### X-Frame-Options

```
X-Frame-Options: SAMEORIGIN
```

Prevents clickjacking by not allowing the site to be framed by other domains.

### Referrer-Policy

```
Referrer-Policy: strict-origin-when-cross-origin
```

Controls how much referrer information is sent with requests.

### Permissions-Policy

```
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

Disables unnecessary browser features for security.

## HSTS Preload (Optional)

Once HSTS is working correctly, you can submit your domain to the HSTS preload list:

1. Visit: https://hstspreload.org/
2. Enter your domain: `transportpokojnika.com`
3. Check if you meet the requirements
4. Submit your domain

**Warning:** Preloading is a commitment. Removal can take months. Only do this when you're certain your site will always use HTTPS.

## Troubleshooting

### Headers Not Appearing

- Check if the configuration file is in the correct location
- Verify your server supports the required modules
- Check server error logs
- Clear browser cache and test in incognito mode

### Mixed Content Warnings

If you see warnings about mixed content:

- Update all HTTP URLs to HTTPS in your HTML files
- Check `index.html` and other pages for `http://` links
- Update image, script, and stylesheet URLs

### Site Not Loading

If your site stops loading after implementing HSTS:

1. Check if SSL certificate is valid
2. Verify HTTPS is working without the HSTS header
3. Clear HSTS settings in browser:
   - Chrome: `chrome://net-internals/#hsts` → Delete domain
   - Firefox: Delete `SiteSecurityServiceState.txt` file

## Support

If you need help implementing these headers:

1. Contact your hosting provider
2. Check your hosting control panel for security settings
3. Consult your server documentation

## Current Configuration

Based on your website structure, you're likely using one of these:

- **Apache** (most common for static sites)
- **Static hosting platform** (Netlify, Cloudflare Pages, etc.)

Start with `.htaccess` if you're unsure, or `_headers` if using a modern static hosting platform.

## Additional Resources

- [MDN Web Docs - HSTS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
- [OWASP - Security Headers](https://owasp.org/www-project-secure-headers/)
- [Security Headers Scanner](https://securityheaders.com/)
