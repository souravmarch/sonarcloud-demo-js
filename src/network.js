const http = require("http"); // ❌ insecure, should use https

function fetchUnsecuredData() {
  http
    .get("http://example.com", (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => console.log("Fetched data:", data));
    })
    .on("error", (err) => {
      console.error("Error fetching data:", err);
    });
}

module.exports = { fetchUnsecuredData };
