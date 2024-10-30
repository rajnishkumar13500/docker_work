// index.js
const express = require("express");
const app = express();
const port = 5500;

app.get("/", (req, res) => {
  // Use delete and require to dynamically reload dummy.js when it changes
  delete require.cache[require.resolve("./volume/dummy.js")];
  const data = require("./volume/dummy");
  res.json(data);
});

app.get("/hii", (req, res) => {
    // Use delete and require to dynamically reload dummy.js when it changes
    const d = "hii ssdldjflkfsl"
    res.json(d);
  });



app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
