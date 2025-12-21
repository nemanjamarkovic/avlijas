#!/usr/bin/env node
/**
 * Version Update Script
 *
 * This script updates all CSS and JS file references in HTML files
 * with version numbers from version.json
 *
 * Usage:
 *   node update-versions.js
 *
 * To increment versions:
 *   1. Edit version.json and increment the version numbers
 *   2. Run: node update-versions.js
 *   3. Commit the changes
 */

const fs = require("fs");
const path = require("path");

// Read version configuration
const versionConfig = JSON.parse(fs.readFileSync("version.json", "utf8"));
const cssVersion = versionConfig.css;
const jsVersion = versionConfig.js;

console.log(`Updating versions: CSS=v${cssVersion}, JS=v${jsVersion}`);

// Find all HTML files in current directory
const htmlFiles = fs
  .readdirSync(".")
  .filter(
    (file) =>
      file.endsWith(".html") && file !== "header.html" && file !== "footer.html"
  );

let updatedFiles = 0;
let totalReplacements = 0;

htmlFiles.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");
  let modified = false;
  let replacements = 0;

  // Update CSS references (with and without preload)
  const cssPatterns = [
    {
      old: /href="styles\.min\.css(\?v=\d+)?"/g,
      new: `href="styles.min.css?v=${cssVersion}"`,
    },
    {
      old: /href="styles\.css(\?v=\d+)?"/g,
      new: `href="styles.css?v=${cssVersion}"`,
    },
  ];

  cssPatterns.forEach((pattern) => {
    if (content.match(pattern.old)) {
      content = content.replace(pattern.old, pattern.new);
      modified = true;
      replacements++;
    }
  });

  // Update JS references
  const jsPatterns = [
    {
      old: /src="includes\.js(\?v=\d+)?"/g,
      new: `src="includes.js?v=${jsVersion}"`,
    },
  ];

  jsPatterns.forEach((pattern) => {
    if (content.match(pattern.old)) {
      content = content.replace(pattern.old, pattern.new);
      modified = true;
      replacements++;
    }
  });

  if (modified) {
    fs.writeFileSync(file, content, "utf8");
    updatedFiles++;
    totalReplacements += replacements;
    console.log(`✓ Updated ${file} (${replacements} replacements)`);
  }
});

console.log(
  `\n✅ Complete! Updated ${updatedFiles} files with ${totalReplacements} total replacements.`
);
console.log(`\nCurrent versions: CSS=v${cssVersion}, JS=v${jsVersion}`);
