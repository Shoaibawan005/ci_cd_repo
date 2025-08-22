const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware: serve static files (like CSS/JS if you add later)
app.use(express.static(path.join(__dirname, "public")));


// Route: Home (HTML page)
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD Demo</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
          h1 { color: #0070f3; }
          p { color: #444; }
        </style>
      </head>
      <body>
        <h1>Hello from CI/CD Demo 🚀</h1>
        <h1>Shoaib you did it... Auto CD</h1>
        <p>This page is served by Express running on a self-hosted runner.</p>
        <p>Try the <a href="/api/data">/api/data</a> endpoint for JSON output.</p>
      </body>
    </html>
  `);
});

// Route: JSON data
app.get("/api/data", (req, res) => {
  res.json({
    message: process.env.APP_MESSAGE || "Hello from API",
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || "development"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
