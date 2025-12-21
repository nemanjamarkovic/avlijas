# File Versioning Strategy

This project uses query string versioning to ensure users get the latest CSS and JavaScript files even with long cache lifetimes.

## How It Works

- CSS and JS files are cached for **1 year** for optimal performance
- When you update files, increment the version number
- Browsers see the new version as a different file and download it
- Old cached versions remain cached (no waste)

## Current Versions

Check `version.json` for current version numbers:
```json
{
  "css": "1",
  "js": "1"
}
```

## How to Update Versions

### Method 1: Using the Script (Recommended)

1. **Edit `version.json`** and increment the version:
   ```json
   {
     "css": "2",  // Increment when you update CSS
     "js": "2"    // Increment when you update JS
   }
   ```

2. **Run the update script**:
   ```bash
   node update-versions.js
   ```

3. **Commit the changes**:
   ```bash
   git add version.json *.html
   git commit -m "Bump CSS/JS versions to v2"
   ```

### Method 2: Manual Update

If you prefer to update manually:

1. Edit `version.json` to increment versions
2. Search and replace in all HTML files:
   - `styles.min.css?v=1` → `styles.min.css?v=2`
   - `includes.js?v=1` → `includes.js?v=2`

## When to Increment Versions

### Increment CSS version when:
- ✅ You modify `styles.css` or `styles.min.css`
- ✅ You change styling that affects visual appearance
- ✅ You fix CSS bugs

### Increment JS version when:
- ✅ You modify `includes.js`
- ✅ You add new functionality
- ✅ You fix JavaScript bugs

### Don't increment when:
- ❌ You only update HTML content
- ❌ You only update images
- ❌ You only update documentation

## Examples

### Example 1: CSS Update
```bash
# 1. Make changes to styles.css
# 2. Minify: npx clean-css-cli -o styles.min.css styles.css
# 3. Update version.json: "css": "2"
# 4. Run: node update-versions.js
# 5. Deploy
```

### Example 2: JS Update
```bash
# 1. Make changes to includes.js
# 2. Update version.json: "js": "2"
# 3. Run: node update-versions.js
# 4. Deploy
```

### Example 3: Both Updated
```bash
# 1. Make changes to both files
# 2. Update version.json: "css": "2", "js": "2"
# 3. Run: node update-versions.js
# 4. Deploy
```

## File Structure

```
project/
├── version.json          # Version numbers
├── update-versions.js    # Update script
├── styles.min.css        # CSS file
├── includes.js           # JS file
└── *.html               # HTML files with versioned links
```

## Benefits

✅ **Fast loading** - 1 year cache for optimal performance  
✅ **Easy updates** - Just increment version number  
✅ **No cache issues** - Users always get latest version  
✅ **Automatic** - Script updates all files at once  

## Troubleshooting

**Q: Users still see old styles after updating?**  
A: Make sure you:
1. Updated `version.json`
2. Ran `node update-versions.js`
3. Committed and deployed the changes
4. Cleared your browser cache to test

**Q: Script not working?**  
A: Make sure you have Node.js installed. The script uses only built-in Node.js modules.

**Q: Can I use different versions for CSS and JS?**  
A: Yes! They're independent. Update only what changed.

