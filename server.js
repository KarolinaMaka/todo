const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Serwowanie statycznych plików z katalogu "public"
app.use(express.static(path.join(__dirname, "public")));

// Fallback dla aplikacji SPA
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
