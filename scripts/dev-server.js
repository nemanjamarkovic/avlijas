#!/usr/bin/env node
/**
 * Local dev server with clean URLs (mirrors Netlify pretty URLs).
 * Usage: node scripts/dev-server.js [port]
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const START_PORT = Number(process.argv[2] || process.env.PORT || 3000);
const MAX_PORT = START_PORT + 10;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function resolveFile(urlPath) {
  let decoded = decodeURIComponent(urlPath.split("?")[0]);
  if (decoded.endsWith("/")) decoded += "index";
  if (decoded === "" || decoded === "/") decoded = "/index";

  const relative = decoded.replace(/^\//, "").replace(/\//g, path.sep);
  const candidates = [
    path.join(ROOT, relative),
    path.join(ROOT, relative + ".html"),
    path.join(ROOT, relative, "index.html"),
  ];

  for (const file of candidates) {
    if (fs.existsSync(file) && fs.statSync(file).isFile()) return file;
  }
  return null;
}

function startServer(port) {
  const server = http.createServer((req, res) => {
    const file = resolveFile(req.url);

    if (!file) {
      const notFound = path.join(ROOT, "404.html");
      if (fs.existsSync(notFound)) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        fs.createReadStream(notFound).pipe(res);
        return;
      }
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 Not Found");
      return;
    }

    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, {
      "Content-Type": MIME[ext] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    fs.createReadStream(file).pipe(res);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE" && port < MAX_PORT) {
      console.log(`Port ${port} is in use, trying ${port + 1}...`);
      startServer(port + 1);
      return;
    }
    if (err.code === "EADDRINUSE") {
      console.error(
        `Ports ${START_PORT}-${MAX_PORT} are all in use.\n` +
          `Stop the other server or run: npm run dev -- 4000`
      );
    } else {
      console.error("Dev server error:", err.message);
    }
    process.exit(1);
  });

  server.listen(port, () => {
    if (port !== START_PORT) {
      console.log(`(Port ${START_PORT} was already in use)`);
    }
    console.log(`Dev server running at http://localhost:${port}`);
    console.log("Clean URLs enabled (/berlin → berlin.html)");
    console.log("Press Ctrl+C to stop");
  });
}

startServer(START_PORT);
